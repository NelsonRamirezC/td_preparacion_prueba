import { Router } from "express";
import viewsControllers from "../controllers/views.controllers.js"
const router = Router();


router.get(["/", "/home"], viewsControllers.home);
router.get("/home2", viewsControllers.home2);

export default router;
