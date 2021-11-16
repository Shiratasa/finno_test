import express from "express";
import data from "./data.js";

const app = express();

app.get("/api/funds", (req, res) => {
  res.send(data.funds);
});

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Serve at http://localhost:${PORT}`);
});