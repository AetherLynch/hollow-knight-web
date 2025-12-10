const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

// Servir archivos estáticos de la carpeta "public"
app.use(express.static(path.join(__dirname, "public")));

// Ruta principal
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Endpoint de ejemplo tipo API (opcional, solo por demo)
app.get("/api/lore", (req, res) => {
  res.json({
    title: "Hollow Knight",
    message: "Bienvenido a Hallownest. Explora, lucha y descubre los secretos bajo el suelo.",
    main_characters: ["Caballero", "Hornet", "Rey Pálido", "Hollow Knight"]
  });
});

app.listen(PORT, () => {
  console.log(`Servidor Hollow Knight escuchando en http://localhost:${PORT}`);
});
