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
        userName: userName,
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: hashedPassword,
      },
    });
    res.status(201).json({ success: true, message: "Registered Successfully" });
  } catch (event) {
    res.status(500).json({ success: false, message: "Internal Error" });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });
    console.log(user);
    if (user) {
      const isPasswordMatch = bcrypt.compareSync(password, user.password);
      if (isPasswordMatch === true) {
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
        res.cookie("fly_fishing_access_token", token);
        res.status(200).json({ success: true, data: payload });
      } else {
        res
          .status(400)
          .json({ success: false, message: "Wrong email or password" });
      }
    } else {
      res
        .status(400)
        .json({ success: false, message: "Wrong email or password" });
    }
  } catch (e) {
    console.error(e);
    res.status(500).json({ success: false, message: "Internal Error" });
  }
};
