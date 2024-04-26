import express from "express";

const router = express.Router();

router.route("/").post((req, res) => {
  console.log(req.body);
  res.send("Finding the nearest hospital");
});

export default router;
