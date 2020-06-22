import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "NOMAD CHALLANGE";
  res.locals.routes = routes;
  next();
};
