import { Router } from "express";
import viewsControllers from "../controllers/orders.controllers.js"
const router = Router();


router.post("/filter", viewsControllers.filterOrders);

export default router;
