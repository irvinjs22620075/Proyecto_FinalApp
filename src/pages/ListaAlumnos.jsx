import React, { useEffect, useState } from "react";
import { View, Text, Button, ScrollView, Image, StyleSheet, SafeAreaView, Platform, TouchableOpacity, StatusBar } from "react-native";
import { obtenerAlumnos, registrarAlumno } from "../services/alumnos.js";

import { MaterialIcons } from '@expo/vector-icons';



export default function ListaAlumnos({ navigation }) {
  const [alumnos, setAlumnos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await obtenerAlumnos();
      if (data) setAlumnos(data);
    };
    fetchData();
  }, []);

  return (
    <SafeAreaView style={style.mainS}>
      <View style={style.container}>
        <View style={style.headerTopBar}>
          <Text style={style.headerTopBarText}>Lista de Alumnos</Text>
        </View>

      </View>
      <ScrollView>

        {/* Encabezado */}
        {/* <View style={style.tableRowHeader}>
      <Text style={style.tableHeader}>Nombre</Text>
      <Text style={style.tableHeader}>No. Control</Text>
      <Text style={style.tableHeader}>Carrera</Text>
      <Text style={style.tableHeader}>Semestre</Text>
      <Text style={style.tableHeader}>Teléfono</Text>
      <Text style={style.tableHeader}>Imagen</Text>
    </View> */}

        {alumnos.map((alumno) => (
          <View key={alumno.id} style={style.card}>

            <View style={{ alignSelf: 'center' }}>
              {alumno.Imagen ? (
                <Image source={{ uri: `https://img.freepik.com/vector-premium/ilustracion-vector-personaje-dibujos-animados-anime_648489-34.jpg` }} style={style.avatar} />) : (
                <Text style={style.tableCell}>IMAGE</Text>
              )}
            </View>

            <View style={style.card1}>

              <Text style={style.cardText}>Nombre:  </Text>
              <Text style={style.cardTextIN}>{alumno.Nombre}</Text>
              <Text style={style.cardText}>No. Control: </Text>
              <Text style={style.cardTextIN}>{alumno.NumeroControl}</Text>
              <Text style={style.cardText}>Carrera:</Text>
              <Text style={style.cardTextIN}>{alumno.Carrera}</Text>
              <Text style={style.cardText}>Semestre: </Text>
              <Text style={style.cardTextIN}>{alumno.Semestre}</Text>
              <Text style={style.cardText}>Telefono:</Text>
              <Text style={style.cardTextIN} >{alumno.Telefono}</Text>
            </View>



            {/* Botones con opciones */}
            <View style={{ alignItems: 'center', marginLeft: 10 }}>
              <TouchableOpacity style={style.botonIcon1}>
                <MaterialIcons name="edit" size={20} color="#000000ff" />
              </TouchableOpacity>
              <TouchableOpacity style={style.botonIcon2}>
                <MaterialIcons name="delete" size={20} color="#fff" />
              </TouchableOpacity>
            </View>
            {/* fin de botones */}
          </View>

        ))}


      </ScrollView>
      <View style={style.navbar}>
        <View style={style.navItem}>
          <TouchableOpacity style={style.botonNav} onPress={() => navigation.navigate("Alumnos")}>
            <MaterialIcons name="person" size={30} color={"#fff"} />
            <Text style={style.navText}>Users</Text>
          </TouchableOpacity>
        </View>
        <View style={style.navItem}>
          <TouchableOpacity style={style.botonNav} onPress={() => navigation.navigate("Principal")}>
            <MaterialIcons style={style.icon} name="home" size={30} color={"#fff"} />
            <Text style={style.navText}>Home</Text>
          </TouchableOpacity>
        </View>
        <View style={style.navItem} >
          <TouchableOpacity style={style.botonNav} onPress={() => navigation.navigate("ListaAlumnos")} >
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
    backgroundColor: '#FCFCFC',
    //paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 44,
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
    backgroundColor: '#a7bcc9ff',
    elevation: 2,
    margin: 5,
  },
  card1: {
    //padding:16,
    //flexDirection:'row',
    borderRadius: 16,
    backgroundColor: '#dcdfe6ff',
    elevation: 2,
    paddingHorizontal: 40,
    // margin:5,
    width: 240,          // ancho fijo
    minHeight: 150,      // altura mínima para que todas luzcan igual
    justifyContent: 'center'
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',

  },

  containertableData: {
    // borderColor: '#000',
    // borderWidth: 0.4,
    backgroundColor: '#3b6197ff',
    borderRadius: 5,
    padding: 3,
    // flexDirection:'row',


  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginBotton: 28,
    marginRight: 12,
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
  margin: 4,
},
  //INICIO DE ESTILOS NAVBAR
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',

    alignItems: 'center',
    height: 80,
    backgroundColor: '#1d3557',
    marginTop: 'auto',

    // borderTopWidth:1,  
    // marginBottom:10,
  },
  navItem: {
    // alignItems: 'center',
    // alignContent: 'center',
    // alignSelf: 'center',
    flexDirection: 'row',

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

