// routes/alumnos.js
import express from "express";
import db from "../db.js"; 

const router = express.Router();

// Registrar un alumno
router.post("/alumnos", (req, res) => {
  const { Nombre, NumeroControl, Carrera, Semestre, Telefono, Imagen } = req.body;

  if (!Nombre || !NumeroControl || !Carrera || !Semestre || !Telefono) {
    return res.status(400).json({ error: "Faltan datos obligatorios" });
  }

  const query = `
    INSERT INTO Alumnos (Nombre, NumeroControl, Carrera, Semestre, Telefono, Imagen)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(query, [Nombre, NumeroControl, Carrera, Semestre, Telefono, Imagen || null], (err, result) => {
    if (err) {
      console.error("❌ Error al registrar alumno:", err);
      return res.status(500).json({ error: "Error al registrar alumno" });
    }
    res.status(201).json({ message: " Alumno registrado correctamente", id: result.insertId });
  });
});

// Actualizar alumno por ID
router.put("/alumnos/:id", (req, res) => {
  const { id } = req.params;
  const { Nombre, NumeroControl, Carrera, Semestre, Telefono, Imagen } = req.body;

  const query = `
    UPDATE Alumnos
    SET Nombre = ?, NumeroControl = ?, Carrera = ?, Semestre = ?, Telefono = ?, Imagen = ?
    WHERE id = ?
  `;

  db.query(query, [Nombre, NumeroControl, Carrera, Semestre, Telefono, Imagen || null, id], (err, result) => {
    if (err) {
      console.error("❌ Error al actualizar alumno:", err);
      return res.status(500).json({ error: "Error al actualizar alumno" });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Alumno no encontrado" });
    }

    res.json({ message: " Alumno actualizado correctamente" });
  });
});

//  Obtener todos los alumnos
router.get("/alumnos", (req, res) => {
  const query = "SELECT * FROM Alumnos";
  db.query(query, (err, results) => {
    if (err) {
      console.error("❌ Error al obtener alumnos:", err);
      return res.status(500).json({ error: "Error al obtener alumnos" });
    }
    res.json(results);
  });
});

//  Eliminar alumno por ID
router.delete("/alumnos/:id", (req, res) => {
  const { id } = req.params;

  const query = "DELETE FROM Alumnos WHERE id = ?";
  db.query(query, [id], (err, result) => {
    if (err) {
      console.error("❌ Error al eliminar alumno:", err);
      return res.status(500).json({ error: "Error al eliminar alumno" });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Alumno no encontrado" });
    }

    res.json({ message: " Alumno eliminado correctamente" });
  });
});

export default router;
