import express from "express";
import globalRouter from "../routers/globalRouter";
import courseRouter from "../routers/courseRouter";
import apiRouter from "../routers/apiRouter";
import api1Router from "../routers/api1Router";
import api2Router from "../routers/api2Router";
import routes from "../routes";

const app = express();

const PORT = 3000;

const handleListening = () =>
  console.log(`Listening on : http://localhost:${PORT}`);

app.use(routes.home, globalRouter);
app.use(routes.courses, courseRouter);
app.use(routes.api, apiRouter, api1Router, api2Router);

app.listen(PORT, handleListening);

// Codesanbox does not need PORT :)
// app.listen(() => console.log(`Listening!`));
