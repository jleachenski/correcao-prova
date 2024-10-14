import { Router } from "express";
import workshopController from "../controllers/workshopController.js"

const router = Router();

router.post("/", workshopController.store)
router.get("/", workshopController.index)
router.get("/:id", workshopController.show)
router.put("/:id", workshopController.update)
router.delete("/:id", workshopController.destroy)

export default router;