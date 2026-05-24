import { Router, type IRouter } from "express";
import { db, leadsTable, insertLeadSchema } from "@workspace/db";
import { sendLeadNotification } from "../lib/mailer.js";

const router: IRouter = Router();

router.post("/leads", async (req, res) => {
  try {
    const parsed = insertLeadSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({ message: "Invalid request", errors: parsed.error.issues });
      return;
    }
    const [lead] = await db.insert(leadsTable).values(parsed.data).returning();

    sendLeadNotification({
      name: parsed.data.name,
      email: parsed.data.email,
      company: parsed.data.company ?? undefined,
      phone: parsed.data.phone ?? undefined,
      service: parsed.data.service ?? undefined,
      message: parsed.data.message,
    }).catch((err) => console.error("Email notification failed:", err));

    res.status(201).json(lead);
  } catch (err) {
    console.error("Lead submission error:", err);
    res.status(500).json({ message: "Failed to submit lead. Please try again." });
  }
});

export default router;
