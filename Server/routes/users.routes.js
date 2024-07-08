import { Router } from "express";
import { createUser, loginUser } from "../controllers/users.controllers.js";
import { validateInfo } from "../middlewares/user.middleware.js";

const router = Router();

router.post("/register", validateInfo, createUser);
router.post("/login", loginUser);

export default router;
