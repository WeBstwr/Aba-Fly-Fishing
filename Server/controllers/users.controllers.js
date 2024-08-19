import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createUser = async (req, res) => {
  try {
    const { userName, firstName, lastName, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = await prisma.user.create({
      data: {
        userName,
        firstName,
        lastName,
        email,
        password: hashedPassword,
      },
    });
    res.status(201).json({ success: true, message: "Registered Successfully" });
  } catch (e) {
    res.status(500).json({ success: false, message: "Internal Error" });
  }
};

export const loginUser = async (req, res) => {
  const { userNameOrEmail, password } = req.body;
  try {
    const user = await prisma.user.findFirst({
      where: {
        OR: [{ email: userNameOrEmail }, { userName: userNameOrEmail }],
      },
    });

    if (user && bcrypt.compareSync(password, user.password)) {
      const payload = {
        id: user.id,
        userName: user.userName,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      };
      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "10m",
      });
      res.cookie("fly_fishing_access_token", token, { httpOnly: true });
      res.status(200).json({ success: true, data: payload });
    } else {
      res
        .status(400)
        .json({ success: false, message: "Wrong email or password" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Error" });
  }
};

export const addItemToCart = async (req, res) => {
  const { id } = req.user;
  const { itemId, quantity } = req.body;

  try {
    const existingItem = await prisma.cartItem.findFirst({
      where: { userId: id, itemId },
    });

    if (existingItem) {
      const updatedItem = await prisma.cartItem.update({
        where: { id: existingItem.id },
        data: { quantity: existingItem.quantity + quantity },
      });
      return res.status(200).json({ success: true, data: updatedItem });
    }

    const newItem = await prisma.cartItem.create({
      data: {
        userId: id,
        itemId,
        quantity,
      },
    });

    res.status(201).json({ success: true, data: newItem });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Error" });
  }
};

export const removeItemFromCart = async (req, res) => {
  const { id } = req.user;
  const { itemId } = req.body;

  try {
    const item = await prisma.cartItem.findFirst({
      where: { userId: id, itemId },
    });

    if (item) {
      await prisma.cartItem.delete({
        where: { id: item.id },
      });
      return res.status(200).json({ success: true, message: "Item removed" });
    }

    res.status(404).json({ success: false, message: "Item not found in cart" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Error" });
  }
};

export const getCartItems = async (req, res) => {
  const { id } = req.user;

  try {
    const cartItems = await prisma.cartItem.findMany({
      where: { userId: id },
      include: {
        item: true,
      },
    });

    res.status(200).json({ success: true, data: cartItems });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Error" });
  }
};
