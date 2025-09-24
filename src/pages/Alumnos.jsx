import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View,SafeAreaView , Icon, ScrollView,TextInput, TouchableOpacity  } from 'react-native';
import React from 'react';

import { MaterialIcons } from '@expo/vector-icons';




export default function Alumnos({navigation}) {
  return (
    <SafeAreaView style={style.mainS}>

      <ScrollView style={{padding:15}}>
        {/* Inicio de Lista */}
          <View style={style.container}>
            <Text style={style.TitleContainer}>Registrar Alumnos</Text>
              <View style={style.cardInfo}>
                  <Text style={style.label}>Nombre</Text>
                  <TextInput style={style.info} placeholder="Ingresa tu nombre"/>
                  <Text style={style.label}>Numero de Control</Text>
                  <TextInput style={style.info} placeholder="1234567" keyboardType='numeric'/>
                  <Text style={style.label}>Carrera</Text>
                  <TextInput style={style.info} placeholder="Ingresa tu carrera"/>
                  <Text style={style.label}>Semestre</Text>
                  <TextInput style={style.info} placeholder="1,3,5,7" keyboardType='numeric'/>
                  <Text style={style.label}>Telefono</Text>
                  <TextInput style={style.info} placeholder="9531643574"keyboardType='numeric'/>
                   <Text style={style.label}>Imagen</Text>
                  <TextInput style={style.info} placeholder="Ingrese una imagen"/>
                  

                  <TouchableOpacity style={style.Boton}>
                    {/* <MaterialIcons style={style.iconRigth} name='send' marginTop={10} size={20} color={"#fff"}/> */}
                    <Text style={{color:'#fff', textAlign:'center', padding:8, justifyContent:'center'}}>Registrar Alumno</Text>
                  </TouchableOpacity>
              </View>
          </View>
        {/* Fin de lista */}
</ScrollView>


         <View style={style.navbar}>  
          <View style={style.navItem}>
            <TouchableOpacity>
            <MaterialIcons name="person" marginTop={10} size={30} color={"#fff"}  />
            <Text style={style.navText}>Users</Text>
            </TouchableOpacity>
          </View>
          <View style={style.navItem}>
            <TouchableOpacity>
            <MaterialIcons style={style.icon} name="home" marginTop={10} size={30} color={"#fff"} onPress={() => navigation.navigate("Principal") } />
            <Text style={style.navText}>Home</Text>
            </TouchableOpacity>
          </View>
          <View style={style.navItem}>
            <TouchableOpacity style={{alignSelf:'center'}} onPress={() => navigation.navigate("ListaAlumnos")}>
            <MaterialIcons name="list" marginTop={10} size={30} color={"#fff"}  />
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
        backgroundColor: '#e0e8ebff',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 44,
        //padding: 25,
        //marginTop: 27,
    },
    container:{
      backgroundColor:'#5060a7ff',
      padding:16,
      borderRadius:16,
      shadowOpacity:0.3,
      shadowColor:'#000',
      elevation:5,

    },
    TitleContainer: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf:'center',
    color:'#fff'
    },
     label: {
        fontWeight: 'bold',
        fontSize: 13,
        marginBottom: 8,
        textAlign: 'start',
        marginStart: 12,
        color:'#fff'
    },
    info: {
        fontSize: 13,
        marginBottom: 10,
        borderRadius: 15,
        backgroundColor: 'hsla(195, 21%, 93%, 1.00)',
        padding: 10,
    },
    Boton:{
      borderRadius:20,
      backgroundColor:'#252c3fff',
      width:'75%',
      alignSelf:'center',
      padding:2,
  //  flexDirection:'row',
    },

  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 80,
    backgroundColor: '#5060a7ff',
    marginTop:'auto',
    
    // borderTopWidth:1,  
    // marginBottom:10,
  },
  navItem:{
    alignItems:'center',
    alignContent:'center',
    alignSelf:'center',
    
  },
  navInfo: {
    alignItems: 'center',

  },
  navText: {
    fontSize: 12,
    color: '#000000ff',
    marginTop: 4,

  },

});

