import express from "express";
import routes from "../routes";
import { buy, refund, doc } from "../controllers/apiController";

const globalRouter = express.Router();

globalRouter.get(routes.doc, doc);
globalRouter.get(routes.buy, buy);
globalRouter.get(routes.refund, refund);

export default globalRouter;
