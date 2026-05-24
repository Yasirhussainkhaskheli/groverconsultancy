import { Router, type IRouter } from "express";
import { eq } from "drizzle-orm";
import { db, insightsTable } from "@workspace/db";

const router: IRouter = Router();

router.get("/insights", async (_req, res) => {
  try {
    const rows = await db
      .select()
      .from(insightsTable)
      .orderBy(insightsTable.publishedAt)
      .then((rows) => rows.reverse());
    res.json(rows);
  } catch {
    res.json([]);
  }
});

router.get("/insights/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      res.status(400).json({ message: "Invalid ID" });
      return;
    }
    const [row] = await db.select().from(insightsTable).where(eq(insightsTable.id, id));
    if (!row) {
      res.status(404).json({ message: "Insight not found" });
      return;
    }
    res.json(row);
  } catch {
    res.status(404).json({ message: "Insight not found" });
  }
});

export default router;
