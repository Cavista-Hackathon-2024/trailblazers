import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import hello from "./routes/hello.js";
import ussd from "./routes/ussd.js";
import sms from "./routes/sms.js";
import hospital from "./routes/hospital.js";
import report from "./routes/report.js";
import driver from "./routes/driver.js";
import first_aid from "./routes/first_aid.js";
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
app.use("/hospital", hospital);
app.use("/report", report);
app.use("/driver", driver);
app.use("/first_aid", first_aid);

const startSever = async () => {
  try {
    // Connect to database
    // connecDB(process.env.MONGODB_URL);
    app.listen(PORT, () =>
      console.log(`Server started on port http://localhost:${PORT}`)
    );
  } catch (error) {
    console.log(error);
  }
};

startSever();
