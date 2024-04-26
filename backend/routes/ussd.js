import express from "express";

const router = express.Router();

router.route("/").post((req, res) => {
  const { sessionId, serviceCode, phoneNumber, text } = req.body;

  let response = "";

  response = processRequest(text);

  res.set("Content-Type: text/plain");
  res.send(response);

  //   res.send("Welcome to Emergency health");
  console.log(req.body);
});

function processRequest(text) {
  let output = "";
  switch (text) {
    case "":
      // This is the first request.
      output = `CON What would you like to check
            1. My account
            2. My phone number`;
      break;
    case "1":
      // Logic for first level response
      output = `CON Choose account information you want to view 
            1. Account Number`;
      break;
    case "1*1":
      output = `END Your account number is 2230667938`;
      break;

    default:
      output = `END Error processing your request.
            `;
      break;
  }

  return output;
}

export default router;
