import { Router } from "express";
import {
  createUser,
  loginUser,
  addItemToCart,
  removeItemFromCart,
  getCartItems,
} from "../controllers/users.controllers.js";
import { validateInfo } from "../middlewares/user.middleware.js";
import { authenticateToken } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/register", validateInfo, createUser);
router.post("/login", loginUser);
router.post("/cart/add", authenticateToken, addItemToCart);
router.post("/cart/remove", authenticateToken, removeItemFromCart);
router.get("/cart", authenticateToken, getCartItems);

export default router;
