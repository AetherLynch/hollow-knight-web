const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/api/lore", (req, res) => {
  res.json({
    title: "Hollow Knight",
    message: "Bienvenido a Hallownest. Explora, lucha y descubre los secretos bajo el suelo.",
    main_characters: ["Caballero", "Hornet", "Rey Pálido", "Hollow Knight"]
  });
});

// Exportamos la app para poder probarla con Jest/Supertest
module.exports = app;

// Solo escuchamos si se ejecuta directamente (no en los tests)
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Servidor Hollow Knight escuchando en http://localhost:${PORT}`);
  });
}
