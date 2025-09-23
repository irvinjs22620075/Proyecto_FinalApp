import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View, Icon } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


export default function Alumnos({navigation}) {
  return (
    <SafeAreaView>
      

        
        <View style={style.navbar}>
          
          <View style={style.navItem}>
            <MaterialIcons name="person" marginTop={10} size={30} color={"#fff"}  />
            <Text style={style.navText}>Users</Text>
          </View>
          <View style={style.navItem}>
            <MaterialIcons style={style.icon} name="settings" marginTop={10} size={30} color={"#fff"}  />
            <Text style={style.navText}>Settings</Text>
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
        marginTop: 27,
    },
    title: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 16,

  },
  botonInicio: {
    marginTop:50,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center',
    height: 100,
    backgroundColor: '#7ba3bdff',
    marginTop:730,
    // borderTopWidth:1,  
    // marginBottom:10,
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

