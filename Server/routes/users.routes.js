import { Router } from "express";
import { createUser } from "../controllers/users.controllers.js";
import { validateInfo } from "../middlewares/user.middleware.js";

const router = Router();

router.post("/register", validateInfo, createUser);

export default router;
