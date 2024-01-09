import express from "express";
import * as dotenv from "dotenv";
import userRouter from "./routes/user.js";
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
// router
app.use("/users", userRouter);

app.get("/", (request, response) => {
  response.send("Root router reponse");
});
app.listen(port, async () => {
  console.log(`listening on port: ${port}`);
});
