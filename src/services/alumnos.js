import { api } from "../Api/api";

// Obtener todos los alumnos
export const obtenerAlumnos = async () => {
  try {
    const response = await api.get("/alumnos");
    console.log(response.data);
     return response.data;
  } catch (error) {
    console.error("Error al obtener alumnos:", error);
    throw error;
  }
};

// Registrar alumno
export const registrarAlumno = async (alumno) => {
  try {
    const response = await api.post("/alumnos", alumno);
    return response.data;
  } catch (error) {
    console.error("Error al registrar alumno:", error);
    throw error;
  }
};
