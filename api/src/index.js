import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();

import { apiRouter } from "./routes";

app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: false, limit: "50mb" }));

app.use("/api", apiRouter);

app.listen(8080, err => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("RUnning on port 3000");
});
