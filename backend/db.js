import mysql from "mysql2";

// configuracion de la conexion
const connection =mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"appMovilDB"
});

connection.connect((err)=>{
    if(err){
    console.error("Error al conectar a MySQL: ", err);
    return;
    }
    console.log("Conectado a MySQL correctamente");
});
export default connection;

