import express from "express";

const router = express.Router();

router.route("/").post((req, res) => {
  // send request to ai with prompt to get first aid information
  console.log(req.body);
  res.send("Getting First aid");
});

export default router;


