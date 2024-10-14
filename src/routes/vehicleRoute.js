import { Router } from "express";
import vehicleController from "../controllers/vehicleController.js"

const router = Router();

router.post("/", vehicleController.store)
router.get("/", vehicleController.index)
router.get("/:id", vehicleController.show)
router.put("/:id", vehicleController.update)
router.delete("/:id", vehicleController.destroy)

export default router;