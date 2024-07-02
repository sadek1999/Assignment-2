import express, { Application } from "express";
import router from "./app/router";
const app:Application = express();


app.use("api/v1", router)

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
