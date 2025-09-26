import React, { useState, useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View, SafeAreaView, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native';
import { registrarAlumno, editarAlumno } from '../services/alumnos';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

export default function Config({ navigation, route }) {
  const alumnoEditar = route.params?.alumno || null;

  // Estados de los campos
  const [Nombre, setNombre] = useState(alumnoEditar ? alumnoEditar.Nombre : "");
  const [NumeroControl, setNumeroControl] = useState(alumnoEditar ? alumnoEditar.NumeroControl : "");
  const [Carrera, setCarrera] = useState(alumnoEditar ? alumnoEditar.Carrera : "");
  const [Semestre, setSemestre] = useState(alumnoEditar ? alumnoEditar.Semestre : "");
  const [Telefono, setTelefono] = useState(alumnoEditar ? alumnoEditar.Telefono : "");
  const [Imagen, setImagen] = useState(alumnoEditar ? alumnoEditar.Imagen : "");

  // Contador de ediciones
  const [contadorEdiciones, setContadorEdiciones] = useState(0);

  const handleSubmit = async () => {
    try {
      if (alumnoEditar) {
        // Editar alumno
        await editarAlumno(alumnoEditar.id, { Nombre, NumeroControl, Carrera, Semestre, Telefono, Imagen });
        Alert.alert("Éxito", "Alumno actualizado correctamente");
        setContadorEdiciones(prev => prev + 1); // incrementamos el contador
      } else {
        // Registrar nuevo alumno
        await registrarAlumno({ Nombre, NumeroControl, Carrera, Semestre, Telefono, Imagen });
        Alert.alert("Éxito", "Alumno registrado correctamente");
      }
      // navigation.goBack(); // opcional: puedes dejarlo para cerrar la pantalla
    } catch (error) {
      console.error("Error al guardar alumno:", error);
      Alert.alert("Error", "No se pudo guardar el alumno");
    }
  };

  return (
    <SafeAreaView style={style.mainS}>
      
      <ScrollView style={{ padding: 15 }}>
        <View style={style.container}>
          <Text style={style.TitleContainer}>{alumnoEditar ? "Editar Alumno" : "Registrar Alumno"}</Text>
          <FontAwesome5 name="users" size={30} color={'#e9a770ff'} padding={4} alignSelf={'center'} />

          <View style={style.cardInfo}>
            <Text style={style.label}>Nombre</Text>
            <TextInput style={style.info} placeholder="Ingresa tu nombre" value={Nombre} onChangeText={setNombre} />

            <Text style={style.label}>Número de Control</Text>
            <TextInput style={style.info} placeholder="1234567" keyboardType='numeric' value={NumeroControl} onChangeText={setNumeroControl} />

            <Text style={style.label}>Carrera</Text>
            <TextInput style={style.info} placeholder="Ingresa tu carrera" value={Carrera} onChangeText={setCarrera} />

            <Text style={style.label}>Semestre</Text>
            <TextInput style={style.info} placeholder="1,3,5,7" keyboardType='numeric' value={Semestre} onChangeText={setSemestre} />

            <Text style={style.label}>Teléfono</Text>
            <TextInput style={style.info} placeholder="9531643574" keyboardType='numeric' value={Telefono} onChangeText={setTelefono} />

            <Text style={style.label}>Imagen</Text>
            <TextInput style={style.info} placeholder="Enlace URL" value={Imagen} onChangeText={setImagen} />

            {alumnoEditar && (
              <Text style={{ marginBottom: 10, fontWeight: 'bold', color: '#fff' }}>
                Número de ediciones: {contadorEdiciones}
              </Text>
            )}

            <TouchableOpacity style={style.Boton} onPress={handleSubmit}>
              <Text style={{ color: '#fff', textAlign: 'center', padding: 8 }}>
                {alumnoEditar ? "Actualizar Alumno" : "Registrar Alumno"}
              </Text>
              <FontAwesome5 style={style.iconRigth} name={alumnoEditar ? 'edit' : 'user-plus'} size={20} color={"#fff"} alignSelf={'center'} padding={2} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  mainS: {
    flex: 1,
    backgroundColor: '#e0e8ebff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 44,
    //padding: 25,
    marginTop: 27,
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
    backgroundColor: '#d18339ff',
    width: '75%',
    alignSelf: 'center',
    padding: 2,
    //  flexDirection:'row',
  },

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
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',

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

