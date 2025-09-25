import express from "express";
import db from "../db.js"; // importamos la conexión

const router = express.Router();

// Registrar un alumno
router.post("/alumnos", (req, res) => {
  const { Nombre, NumeroControl, Carrera, Semestre, Telefono, Imagen } = req.body;

  const sql = "INSERT INTO Alumnos (Nombre, NumeroControl, Carrera, Semestre, Telefono, Imagen) VALUES (?, ?, ?, ?, ?, ?)";
  db.query(sql, [Nombre, NumeroControl, Carrera, Semestre, Telefono, Imagen], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Alumno registrado con éxito", id: result.insertId });
  });
});

// Obtener todos los alumnos
router.get("/alumnos", (req, res) => {
  db.query("SELECT * FROM Alumnos", (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});
// Editar un alumno por ID
router.put("/alumnos/:id", (req, res) => {
  const { id } = req.params;
  const { Nombre, NumeroControl, Carrera, Semestre, Telefono, Imagen } = req.body;

  const sql = `
    UPDATE Alumnos 
    SET Nombre = ?, NumeroControl = ?, Carrera = ?, Semestre = ?, Telefono = ?, Imagen = ?
    WHERE id = ?
  `;
  db.query(sql, [Nombre, NumeroControl, Carrera, Semestre, Telefono, Imagen, id], (err, result) => {
    if (err) return res.status(500).json({ error: err });

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Alumno no encontrado" });
    }

    res.json({ message: "Alumno actualizado con éxito" });
  });
});

// Eliminar un alumno por ID
router.delete("/alumnos/:id", (req, res) => {
  const { id } = req.params;

  const sql = "DELETE FROM Alumnos WHERE id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json({ error: err });

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Alumno no encontrado" });
    }

    res.json({ message: "Alumno eliminado con éxito" });
  });
});

export default router;
