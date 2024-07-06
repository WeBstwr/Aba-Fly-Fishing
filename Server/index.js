import express from "express";
import usersRouter from "./routes/users.routes.js";
import { config } from "dotenv";
config();

const app = express();
app.use(express.json());

app.use("/api/users", usersRouter);

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
