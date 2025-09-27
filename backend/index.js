import express from "express";
import cors from "cors";
import alumnosRoutes from "./routes/Router.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Rutas
app.use("/", alumnosRoutes);

// Middleware 404
app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

// Iniciar servidor
app.listen(PORT, "192.168.10.118", () => {
  console.log(`✅ Servidor corriendo en http://192.168.10.118:${PORT}`);
});
