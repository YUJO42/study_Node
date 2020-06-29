import express from "express";
import path from "path";
import "./db";
import movieRouter from "./movieRouter";
import { localsMiddleware } from "./middlewares";

const PORT = 3300;

const handleListening = () =>
  console.log(`Listening on : http://localhost:${PORT}`);

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(localsMiddleware);
app.use("/", movieRouter);

app.listen(PORT, handleListening);
