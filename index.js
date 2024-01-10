import express from "express";
import * as dotenv from "dotenv";
import { userRouter, studentRouter } from "./routes/route.js";
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
// router
app.use("/users", userRouter);
app.use("/students", studentRouter);

app.get("/", (req, res) => {
  res.send("Root router reponse");
});
app.listen(port, async () => {
  console.log(`listening on port: ${port}`);
});
