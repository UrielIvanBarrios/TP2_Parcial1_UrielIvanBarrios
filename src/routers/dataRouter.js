import { Router } from "express";
import { DataController } from "../controllers/dataController.js";

const DataRouter = Router();

DataRouter.get("/data_externa", DataController.agregarCsv);

export { DataRouter };
