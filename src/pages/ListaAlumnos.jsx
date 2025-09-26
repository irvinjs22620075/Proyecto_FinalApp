import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Image, StyleSheet, SafeAreaView, TouchableOpacity,Platform, StatusBar, Alert } from "react-native";
import { obtenerAlumnos, eliminarAlumno } from "../services/alumnos.js"; // ✅ ya lo traemos de services
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function ListaAlumnos({ navigation }) {
  const [alumnos, setAlumnos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await obtenerAlumnos();
      if (data) setAlumnos(data);
    };
    fetchData();
  }, []);

  const confirmarEliminar = (id) => {
    Alert.alert(
      "Confirmar eliminación",
      "¿Está seguro que desea eliminar este alumno?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Eliminar",
          style: "destructive",
          onPress: async () => {
            try {
              const data = await eliminarAlumno(id); // ✅ usamos el service
              Alert.alert("Éxito", data.message);
              setAlumnos(alumnos.filter((a) => a.id !== id)); // eliminamos del estado
            } catch (error) {
              Alert.alert("Error", "No se pudo eliminar el alumno");
              console.error("Error al eliminar alumno:", error);
            }
          },
        },
      ]
    );
  };

  return (
    <SafeAreaView style={style.mainS}>
      <View style={style.container}>
        <View style={style.headerTopBar}>
          <Text style={style.headerTopBarText}>Lista de Alumnos</Text>
          <FontAwesome5 name="search" size={20} color={'#fff'} />
        </View>
      </View>

      <ScrollView style={{ padding: 10 }}>
        {alumnos.map((alumno) => (
          <View key={alumno.id} style={style.card}>
            {/* Imagen */}
            <View>
              {alumno.Imagen ? (
                <Image
                  source={{
                    uri: `https://img.freepik.com/vector-premium/ilustracion-vector-personaje-dibujos-animados-anime_648489-34.jpg`,
                  }}
                  style={style.avatar}
                />
              ) : (
                <Text style={style.tableCell}>IMAGE</Text>
              )}
            </View>

            {/* Datos + botones */}
            <View style={{ flexDirection: "column", marginLeft: 10 }}>
              <View style={style.card1}>
                <View style={style.infoRow}>
                  <Text style={style.cardTextIN}>Nombre: </Text>
                  <Text style={style.cardText}>{alumno.Nombre}</Text>
                </View>
                <View style={style.infoRow}>
                  <Text style={style.cardTextIN}>No. Control: </Text>
                  <Text style={style.cardText}>{alumno.NumeroControl}</Text>
                </View>
                <View style={style.infoRow}>
                  <Text style={style.cardTextIN}>Carrera: </Text>
                  <Text style={style.cardText}>{alumno.Carrera}</Text>
                </View>
                <View style={style.infoRow}>
                  <Text style={style.cardTextIN}>Semestre: </Text>
                  <Text style={style.cardText}>{alumno.Semestre}</Text>
                </View>
                <View style={style.infoRow}>
                  <Text style={style.cardTextIN}>Teléfono: </Text>
                  <Text style={style.cardText}>{alumno.Telefono}</Text>
                </View>
              </View>

              {/* Botones */}
              <View style={{ flexDirection: "row", marginTop: 10, alignSelf: "center" }}>
                <TouchableOpacity style={style.botonIcon1}>
                  <MaterialIcons name="edit" size={20} color="#000" />
                </TouchableOpacity>
                <TouchableOpacity style={style.botonIcon2} onPress={() => confirmarEliminar(alumno.id)}>
                  <MaterialIcons name="delete" size={20} color="#000" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Navbar */}
      <View style={style.navbar}>
        <View style={style.navItem}>
          <TouchableOpacity style={style.botonNav} onPress={() => navigation.navigate("Alumnos")}>
            <MaterialIcons name="person" size={30} color={"#fff"} />
            <Text style={style.navText}>Users</Text>
          </TouchableOpacity>
        </View>
        <View style={style.navItem}>
          <TouchableOpacity style={style.botonNav} onPress={() => navigation.navigate("Principal")}>
            <MaterialIcons name="home" size={30} color={"#fff"} />
            <Text style={style.navText}>Home</Text>
          </TouchableOpacity>
        </View>
        <View style={style.navItem}>
          <TouchableOpacity style={style.botonNav} onPress={() => navigation.navigate("ListaAlumnos")}>
            <MaterialIcons name="list" size={30} color={"#fff"} />
            <Text style={style.navText}>Users List</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
const style = StyleSheet.create({
  mainS: {
    flex: 1,
    backgroundColor: '#afbeccff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 44,
    //padding: 25,
    //marginTop: 27,
  },
  headerTopBar: {
    backgroundColor: '#1d3557',
    borderRadius: 3,
    padding: 8,

  },
  headerTopBarText: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },


  tableCell: {
    flex: 1,
    textAlign: "center",
    fontSize: 12,
    color: "#333",
  },
  card: {
    padding: 16,
    flexDirection: 'row',
    borderRadius: 16,
    backgroundColor: '#34527cff',
    elevation: 2,
    margin: 5,
    // alignItems: 'center', 
  },
  card1: {
    borderRadius: 16,
    backgroundColor: '#ebe7eaff',
    elevation: 2,
    padding: 12,
    width: 265,          // ancho fijo
    minHeight: 130,      // altura mínima para que todas luzcan igual
    justifyContent: 'center'
  },
  infoRow: {
  flexDirection: 'row',
  // justifyContent: 'space-between', // etiqueta a la izquierda, valor a la derecha
  marginVertical: 3,
},
  cardTextIN: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  cardText: {
    fontSize: 14,
    // fontWeight: 'bold',

  },

  avatar: {
    width: 80,
    height: 80,
    borderRadius: 15,
    marginTop: 28,
    // marginRight: 12,
    flexDirection: 'row',
  },
  botonIcon1: {
    backgroundColor: '#e99426ff',
    borderRadius: 6,
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botonIcon2: {
    backgroundColor: '#c50b0bff',
    borderRadius: 6,
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    // margin: 4,
    marginHorizontal: 14,
  },
  //INICIO DE ESTILOS NAVBAR
  navbar: {
    //position:'absolute',
    bottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: '#1d3557',
    marginHorizontal: 100,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 40,
    shadowColor: '#000',
    elevation: 8,
    shadowOpacity: 0.3,
    // borderTopWidth:1,  
    // marginBottom:10,
  },
  navItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  navInfo: {
    alignItems: 'center',

  },
  navText: {
    fontSize: 12,
    color: '#fff',
    marginTop: 4,

  },
  botonNav: {
    alignItems: 'center',
  },
});

