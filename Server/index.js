import express from "express";
import usersRouter from "./routes/users.routes.js";
import { config } from "dotenv";
import cors from "cors";
config();

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PATCH", "DELETE"],
  }),
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/users", usersRouter);

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
