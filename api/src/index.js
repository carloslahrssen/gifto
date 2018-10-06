import express from "express";
import bodyParser from "body-parser";
const app = express();

import { apiRouter } from "./routes";

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: false, limit: "50mb" }));

app.use("/api", apiRouter);

app.listen(3000, err => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("RUnning on port 3000");
});
