import { Router } from "express";
import viewsControllers from "../controllers/views.controllers.js"
const router = Router();


router.get(["/", "/home"], viewsControllers.home);

export default router;
