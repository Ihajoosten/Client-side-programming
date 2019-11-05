import express from "express";
const router = express.Router();
import * as controller from "./authentication-controller.js";

router.post("/auth", controller.index);

export default router;
