import express from "express";

const app = express();

const PORT = 3000;

const handleListening = () =>
  console.log(`Listening on : http://localhost:${PORT}`);

// Middleware

const consoleMiddleware = (req, res, next) => {
  console.log("I`m a Middleware!");
  next();
};

const protectedMiddleWare = (req, res, next) => {
  console.log("You can`t connect protected");
  next();
};

// Page Handling

const handleHome = (req, res) => res.send("Hello, It`s HOME");

const handleAbout = (req, res) => res.send("Hello, It`s ABOUT-US");

const handleContact = (req, res) => res.send("Hello, It`s CONTACT");

const handleProtected = (req, res) => res.redirect("/");

// excute

app.get("/", consoleMiddleware, handleHome);
app.get("/about-us", consoleMiddleware, handleAbout);
app.get("/contact", consoleMiddleware, handleContact);
app.get("/protected", protectedMiddleWare, handleProtected);

app.listen(PORT, handleListening);

// Codesanbox does not need PORT :)
// app.listen(() => console.log(`Listening!`));
