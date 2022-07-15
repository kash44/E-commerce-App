import { Router } from "express";
import { stripePayment } from "../Controllers/stripe.controller";

const router: Router = Router();

router.post("/payment", stripePayment)

module.exports = router;
