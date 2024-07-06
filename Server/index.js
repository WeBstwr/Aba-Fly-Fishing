import express from "express";
import { config } from "dotenv";
config();

const app = express();

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
