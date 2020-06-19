import express from "express";
import routes from "../routes";
import { doc } from "../controllers/apiController";

const globalRouter = express.Router();

globalRouter.get(routes.doc, doc);

export default globalRouter;
