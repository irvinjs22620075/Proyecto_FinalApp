import { api } from "../Api/api";

// Obtener todos los alumnos
export const obtenerAlumnos = async () => {
  try {
    const response = await api.get("/alumnos");
    return response.data;
  } catch (error) {
    console.error("❌ Error al obtener alumnos:", error);
    throw error;
  }
};

// Registrar alumno
export const registrarAlumno = async (alumno) => {
  try {
    const response = await api.post("/alumnos", alumno);
    return response.data;
  } catch (error) {
    console.error("❌ Error al registrar alumno:", error);
    throw error;
  }
};

// Editar alumno
export const editarAlumno = async (id, alumno) => {
  try {
    const response = await api.put(`/alumnos/${id}`, alumno);
    return response.data;
  } catch (error) {
    console.error("❌ Error al actualizar alumno:", error);
    throw error;
  }
};

// ✅ Eliminar alumno
export const eliminarAlumno = async (id) => {
  try {
    const response = await api.delete(`/alumnos/${id}`);
    return response.data; // debería traer { message: "Alumno eliminado correctamente" }
  } catch (error) {
    console.error("❌ Error al eliminar alumno:", error);
    throw error;
  }
};
