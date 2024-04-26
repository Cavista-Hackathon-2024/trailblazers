import express from "express";
import AfricasTalking from "africastalking";

const credentials = {
  username: "sandbox",
  apiKey: "1ab3e8e77344d1a85a8a642737a28f79437560971e3e6bdf4d5c0d3aabcedc1e",
};

const router = express.Router();
const aft = AfricasTalking(credentials);

router.route("/callback").post((req, res) => {
  const data = req.body;
  console.log(`Recived message \n ${data}`);
  res.sendStatus(200);
});

router.route("/send_message").post(async (req, res) => {
  const { recepient, message, from } = req.body;
  try {
    const result = await aft.SMS.send({
      to: recepient,
      message: message,
      from: from || "31000",
    });
    const data = await result.json();
    console.log(data);
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
  }
});

export default router;
