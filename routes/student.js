import express from "express";
const router = express.Router();
router.get("/", (req, res) => {
  res.send("get student");
});
router.get("/:id", (req, res) => {
  res.send("get student by id");
});
router.post("/insert", (req, res) => {
  res.send("post insert student");
});
export default router;
