import { Router } from "express";
import maintenanceController from "../controllers/maintenanceController.js"

const router = Router();

router.post("/", maintenanceController.store)
router.get("/", maintenanceController.index)
router.get("/:id", maintenanceController.show)
router.put("/:id", maintenanceController.update)
router.delete("/:id", maintenanceController.destroy)

export default router;