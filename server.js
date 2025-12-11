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
  res.json([
    { name: "El Caballero", role: "Protagonista", description: "Un viajero silencioso que explora Hallownest.", image: "img/vessel.webp" },
    { name: "Hornet", role: "Guardián", description: "Ágil y mortal, ligada al destino del reino.", image: "img/Hornet_Idle.webp" },
    { name: "Hollow Knight", role: "Vasija", description: "Creado para contener la infección.", image: "img/hollow.webp" },
    { name: "Grimm", role: "Jefe", description: "Líder del Troupe Grimm, elegante y mortal.", image: "img/Grimm_Idle.webp" },
    { name: "Zote", role: "Aventurero", description: "Autoproclamado héroe... con mucha suerte.", image: "img/zote.jpg" }
  ]);
});

// Arranque del servidor
app.listen(PORT, () => {
  console.log(`Servidor Hollow Knight corriendo en http://localhost:${PORT}`);
});
