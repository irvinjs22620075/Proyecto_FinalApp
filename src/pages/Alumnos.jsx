import { StatusBar } from 'expo-status-bar';
import { Platform,Alert,  StyleSheet, Text, View, SafeAreaView, Icon, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { registrarAlumno } from '../services/alumnos';
import React, { useState } from 'react';


import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';




export default function Alumnos({ navigation }) {
  const [Nombre, setNombre] = useState("");
  const [NumeroControl, setNumeroControl] = useState("");
  const [Carrera, setCarrera] = useState("");
  const [Semestre, setSemestre] = useState("");
  const [Telefono, setTelefono] = useState("");
  const [Imagen, setImagen] = useState("");
  return (
    <SafeAreaView style={style.mainS}>

      <View style={style.headerTopBar}>
        <Text style={style.headerTopBarText}>Registro</Text>
      </View>

      <ScrollView style={{ padding: 15 }}>
        {/* Inicio de Lista */}
        <View style={style.container}>
          <Text style={style.TitleContainer}>Registrar Alumnos</Text>
          <FontAwesome5 name="users" size={30} color={'#e9a770ff'} padding={4} alignSelf={'center'} />
          <View style={style.cardInfo}>
            <Text style={style.label}>Nombre</Text>
            <TextInput style={style.info} placeholder="Ingresa tu nombre" value={Nombre} onChangeText={setNombre} />
            <Text style={style.label}>Numero de Control</Text>
            <TextInput style={style.info} placeholder="1234567" keyboardType='numeric' value={NumeroControl} onChangeText={setNumeroControl} />
            <Text style={style.label}>Carrera</Text>
            <TextInput style={style.info} placeholder="Ingresa tu carrera" value={Carrera} onChangeText={setCarrera} />
            <Text style={style.label}>Semestre</Text>
            <TextInput style={style.info} placeholder="1,3,5,7" keyboardType='numeric' value={Semestre} onChangeText={setSemestre} />
            <Text style={style.label}>Telefono</Text>
            <TextInput style={style.info} placeholder="9531643574" keyboardType='numeric' value={Telefono} onChangeText={setTelefono} />
            <Text style={style.label}>Imagen</Text>
            <TextInput style={style.info} placeholder="Enlace URL" value={Imagen} onChangeText={setImagen} />


            <TouchableOpacity
              style={style.Boton}
              onPress={async () => {
                // Validación de campos vacíos
                if (!Nombre || !NumeroControl || !Carrera || !Semestre || !Telefono) {
                  Alert.alert(
                    "Campos incompletos",
                    "Por favor completa todos los campos obligatorios antes de registrar al alumno."
                  );
                  return; // Salimos de la función, no se registra
                }

                try {
                  await registrarAlumno({
                    Nombre,
                    NumeroControl,
                    Carrera,
                    Semestre,
                    Telefono,
                    Imagen
                  });

                  Alert.alert("Éxito", "Alumno registrado correctamente");

                  // Limpiar campos
                  setNombre("");
                  setNumeroControl("");
                  setCarrera("");
                  setSemestre("");
                  setTelefono("");
                  setImagen("");
                } catch (error) {
                  console.error("Error al registrar alumno: ", error);
                  Alert.alert("Error", "No se pudo registrar al alumno");
                }
              }}
            >
              <Text style={{ color: '#000', fontWeight: 'bold', textAlign: 'center', padding: 8, justifyContent: 'center' }}>
                Registrar Alumno
              </Text>
              <FontAwesome5
                style={style.iconRigth}
                name='user-plus'
                size={20}
                color={"#fff"}
                alignSelf={'center'}
                padding={2}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* Fin de lista */}
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
    marginTop: 27,
  },
  headerTopBar: {
    backgroundColor: '#1d3557',
    // borderRadius: 3,
    padding: 8,

  },
  headerTopBarText: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },

  container: {
    backgroundColor: '#1d3557',
    padding: 16,
    borderRadius: 16,
    shadowOpacity: 0.3,
    shadowColor: '#000',
    elevation: 5,

  },
  TitleContainer: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: '#fff'
  },
  label: {
    fontWeight: 'bold',
    fontSize: 13,
    marginBottom: 8,
    textAlign: 'start',
    marginStart: 12,
    color: '#fff'
  },
  info: {
    fontSize: 13,
    marginBottom: 10,
    borderRadius: 15,
    backgroundColor: 'hsla(195, 21%, 93%, 1.00)',
    padding: 10,
  },
  Boton: {
    borderRadius: 20,
    backgroundColor: '#1f6831ff',
    width: '40%',
    alignSelf: 'center',
    // padding: 2,
    //  flexDirection:'row',
  },

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

