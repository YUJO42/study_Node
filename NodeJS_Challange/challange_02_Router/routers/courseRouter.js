import express from "express";
import routes from "../routes";
import {
  courses,
  myCourses,
  newCourses,
} from "../controllers/coursesController";

const globalRouter = express.Router();

globalRouter.get(routes.courses, courses);
globalRouter.get(routes.newCourses, newCourses);
globalRouter.get(routes.myCourses, myCourses);

export default globalRouter;
