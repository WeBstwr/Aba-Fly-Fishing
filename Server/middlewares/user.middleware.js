import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const validateInfo = async (req, res, next) => {
  const { userName, email } = req.body;
  const userWithUserName = await prisma.user.findFirst({
    where: {
      userName: userName,
    },
  });
  if (userWithUserName)
    return res
      .status(400)
      .json({ success: false, messade: "Email already exists" });
  const userWithEmail = await prisma.user.findFirst({
    where: {
      email: email,
    },
  });
  if (userWithEmail)
    return res
      .status(400)
      .json({ success: false, messade: "Email already exists" });
  next();
};
