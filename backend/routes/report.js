import express from "express";

const router = express.Router();

// Please provide Reporter Name, Victims name (if known), Location of incidence, Time of report, Description of the Insidence

// => Police report pdf

router.route("/").post((req, res) => {
  const req_data = req.body

  

  console.log(req.body);


  res.send("Generating Police reports");
  
});

export default router;



