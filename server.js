const express = require("express");
const path = require("path");
const pool = require("./db");
const fs = require("fs");

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
app.get("/admin/init-db", async (req, res) => {
  try {
    const sql = fs.readFileSync("./sql/init.sql", "utf8");
    await pool.query(sql);
    res.send("✅ Base de datos inicializada (characters creada y datos insertados).");
  } catch (err) {
    console.error(err);
    res.status(500).send("❌ Error inicializando la BD: " + err.message);
  }
});
app.get("/api/characters", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM characters ORDER BY id ASC");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error consultando characters" });
  }
});

// Exportamos la app para poder probarla con Jest/Supertest
module.exports = app;

// Solo escuchamos si se ejecuta directamente (no en los tests)
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Servidor Hollow Knight escuchando en http://localhost:${PORT}`);
  });
}
