import express from "express";
import path from "path";
import routes from "../routes";
import globalRouter from "../globalRouter";
import { localsMiddleware } from "../middleware";

const PORT = 3000;

const handleListening = () =>
  console.log(`Listening on : http://localhost:${PORT}`);

const app = express();

app.use(localsMiddleware);

app.set("view engine", "pug");
app.set("views", "./views/index,pug");

app.use(routes.home, globalRouter);
// Add your magic here!

// Codesanbox does not need PORT :)
// app.listen(() => console.log(`Listening!`));

app.listen(PORT, handleListening);
