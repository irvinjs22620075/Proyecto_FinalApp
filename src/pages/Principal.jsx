import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View,SafeAreaView , Icon, ScrollView,TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react';

import { MaterialIcons } from '@expo/vector-icons';





export default function Principal({navigation}) {
  return (
    <SafeAreaView style={style.mainS}>
            <ImageBackground style={style.wallpaper} resizeMode="cover" source={ require("../Images/Snoppy2.jpg")}>

      <ScrollView style={{padding:15}}>
        {/* Inicio de Lista */}
            <View>
                <TouchableOpacity style={style.login} onPress={()=> navigation.navigate("Home")}>
                    <Text style={style.tittleLogin}>
                        Sign up
                    </Text>
                </TouchableOpacity>
            </View>
          <View style={style.card}>
            <Text style={style.tittleB}>Bienvenidos </Text>
            <Text style={style.tittleC}>a mi  </Text>
            <Text style={style.tittleD}>Aplicación  </Text>
          </View>
        {/* Fin de lista */}
</ScrollView>


         <View style={style.navbar}>  
          <View style={style.navItem}>
            <TouchableOpacity>
            <MaterialIcons name="person" marginTop={10} size={30} color={"#fff"} onPress={() => navigation.navigate("Alumnos")} />
            <Text style={style.navText}>Users</Text>
            </TouchableOpacity>
          </View>
          <View style={style.navItem}>
            <TouchableOpacity>
            <MaterialIcons style={style.icon} name="home" marginTop={10} size={30} color={"#fff"}  />
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
      </ImageBackground>
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
    wallpaper:{
        flex:1,
         width: '100%',
        height: '100%',
    },
    login:{
        backgroundColor:'#5060a7ff',
        borderRadius:16,
        width:'25%',
        padding:6,
        alignSelf:'flex-end',
        shadowColor:'#000',
        // shadowOffset:{width:3, height:3},
        // shadowOpacity:0.5,
        // shadowRadius:10,
        elevation:50,
        borderColor:'#000',
        borderWidth:1,

    },
    tittleLogin:{
        color:'#fff',
        textAlign:'center',
        fontWeight:'bold',
    },
    card:{
        marginTop:100,
    },
    tittleB:{
        fontSize:55,
        fontWeight:'bold',
        textAlign:'center',
        textShadowColor:'#000',
        textShadowOffset:{width:1.6, height:1.6},
        textShadowRadius:18,
    },
    tittleC:{
        fontSize:25,
        fontWeight:'bold',
        textAlign:'center',
        textShadowColor:'#000',
        textShadowOffset:{width:1.6, height:1.6},
        textShadowRadius:18,
    },
    tittleD:{
        fontSize:35,
        fontWeight:'bold',
        textAlign:'center',
        textShadowColor:'#000',
        textShadowOffset:{width:1.6, height:1.6},
        textShadowRadius:18,
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

