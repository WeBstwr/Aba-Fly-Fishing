import bcrypt from "bcrypt";
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
