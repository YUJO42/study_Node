import express from "express";
import routes from "../routes";
import { edit, remove } from "../controllers/apiController";

const globalRouter = express.Router();

globalRouter.get(routes.remove, remove);
globalRouter.get(routes.edit, edit);

export default globalRouter;
