import PuppeteerHTMLPDF from "puppeteer-html-pdf";
import { report_html } from "./utils.js";
import path from "path";

const __dirname = path.resolve();

const htmlPDF = new PuppeteerHTMLPDF();

const options = {
  format: "A4",
  path: `${__dirname}/sample.pdf`,
};

let del_path = `${__dirname}/sample.pdf`;
console.log(del_path);

htmlPDF.setOptions(options);

try {
  await htmlPDF.create(report_html);
  console.log("Pdf created");
} catch (error) {
  console.log("PuppeteerHTML error", error);
}
