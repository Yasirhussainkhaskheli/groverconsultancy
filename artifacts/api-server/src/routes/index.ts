import { Router, type IRouter } from "express";
import healthRouter from "./health";
import leadsRouter from "./leads";
import insightsRouter from "./insights";

const router: IRouter = Router();

router.use(healthRouter);
router.use(leadsRouter);
router.use(insightsRouter);

export default router;
