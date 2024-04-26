import express from "express";

const router = express.Router();

router.route("/").post((req, res) => {
  console.log(req.body);
  res.send("Generating Police reports");
});

export default router;
