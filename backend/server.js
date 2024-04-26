import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import hello from "./routes/hello.js";
import ussd from "./routes/ussd.js";
import sms from "./routes/sms.js";
import connecDB from "./mongodb/connect.js";

dotenv.config();

const PORT = process.env.PORT || 3000;
console.log("port", PORT);
const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use("/hello", hello);
app.use("/ussd/callback", ussd);
app.use("/sms", sms);

const startSever = async () => {
  try {
    // Connect to database
    connecDB(process.env.MONGODB_URL);
    app.listen(PORT, () =>
      console.log(`Server started on port http://localhost:${PORT}`)
    );
  } catch (error) {
    console.log(error);
  }
};

startSever();
