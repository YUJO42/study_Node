export const home = (req, res) => res.render("home", { pageTitle: "HOME" });
export const login = (req, res) => res.render("login", { pageTitle: "LOGIN" });
export const photos = (req, res) =>
  res.render("photos", { pageTitle: "PHOTOS" });
export const profile = (req, res) =>
  res.render("profile", { pageTitle: "PROFILE" });
