import express from "express";

const router = express.Router();

router.route("/").post((req, res) => {
  console.log(req.body);
  res.send("Getting First aid");
});

export default router;
