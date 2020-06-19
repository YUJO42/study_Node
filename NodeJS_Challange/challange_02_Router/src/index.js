import express from "express";

const app = express();

const PORT = 3000;

const handleListening = () =>
  console.log(`Listening on : http://localhost:${PORT}`);

app.listen(PORT, handleListening);

// Codesanbox does not need PORT :)
// app.listen(() => console.log(`Listening!`));
