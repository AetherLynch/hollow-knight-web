const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// Ruta principal
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

/*
  Ruta opcional de API.
  En este punto NO es necesaria para local,
  pero la dejamos para que en Render no rompa nada
  y el frontend pueda intentar consultarla.
*/
app.get("/api/characters", (req, res) => {
  // No devolvemos error, solo indicamos que no hay BD
  res.json([]);
});

// Arranque del servidor
app.listen(PORT, () => {
  console.log(`Servidor Hollow Knight corriendo en http://localhost:${PORT}`);
});
