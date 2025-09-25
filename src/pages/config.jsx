import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View, SafeAreaView, Icon, ScrollView, TextInput, TouchableOpacity, useState } from 'react-native';
import { registrarAlumno } from '../services/alumnos';

import { MaterialIcons } from '@expo/vector-icons';




export default function Config({ navigation }) {

  return (
    <SafeAreaView style={style.mainS}>
      <ScrollView style={{ padding: 15 }}>
        
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
    //marginTop: 27,
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

