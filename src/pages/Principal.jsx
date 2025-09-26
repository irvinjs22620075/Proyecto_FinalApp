import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View, SafeAreaView, Icon, ScrollView, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import React, { useEffect } from 'react';
// import {interpolate, useAnimatedStyle, useSharedValue, withSpring} from 'react-native-reanimated';


import { MaterialIcons } from '@expo/vector-icons';
import { useIsFocused } from '@react-navigation/native';





export default function Principal({ navigation }) {
//   const scale = useSharedValue(0);

//   useEffect(()=>{
//     scale.value = withSpring(typeof useIsFocused === 'boolean' ? (useIsFocused ? 1 : 0 ) : useIsFocused,
//      {duration:350});
//   },[scale, useIsFocused]);

//   const animatedTextStyle = useAnimatedStyle(() => {
//     const opacity = interpolate(scale.value, [0,1],[1,0]);
// return{
//   opacity
// }
//   });
  return (

    

    <SafeAreaView style={style.mainS}>
      <ImageBackground style={style.wallpaper} resizeMode="cover" source={require("../Images/Snoppy2.jpg")}>

        <ScrollView style={{ padding: 15 }}>
          {/* Inicio de Lista */}
          <View>
            <TouchableOpacity style={style.login} onPress={() => navigation.navigate("Home")}>
              <Text style={style.tittleLogin}>
                Sign up
              </Text>
            </TouchableOpacity>
          </View>
          <View style={style.card}>

            <View style={style.card1}>
              <Text style={style.tittleB}>Bienvenidos </Text>
              <Text style={style.tittleC}>a mi  </Text>
              <Text style={style.tittleD}>Aplicación  </Text>
            </View>
            {/* Fin de lista */}
            <View>
              <TouchableOpacity style={style.cardBoton}>
                <MaterialIcons name="add-circle" size={20}/>
                  <Text style={style.textcardBoton}>Registrar Alumnos</Text>
              </TouchableOpacity>
              <TouchableOpacity style={style.cardBoton}>
                <MaterialIcons name="add-circle" size={20}/>
                  <Text style={style.textcardBoton}>Registrar Docentes</Text>
              </TouchableOpacity>
            </View>

          </View>
        </ScrollView>


        <View style={style.navbar}>
          <View style={style.navItem}>
            <TouchableOpacity style={style.botonNav}>
              <MaterialIcons name="person"  size={30} color={"#fff"} onPress={() => navigation.navigate("Alumnos")} />
              <Text style={style.navText}>Users</Text>
            </TouchableOpacity>
          </View>
          <View style={style.navItem}>
            <TouchableOpacity style={style.botonNav}>
              <MaterialIcons style={style.icon} name="home"size={30} color={"#fff"} onPress={() => navigation.navigate("Principal")} />
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
  wallpaper: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  login: {
    backgroundColor: '#1d3557',
    borderRadius: 16,
    width: '25%',
    padding: 6,
    alignSelf: 'flex-end',
    shadowColor: '#000',
    // shadowOffset:{width:3, height:3},
    // shadowOpacity:0.5,
    // shadowRadius:10,
    elevation: 50,
    borderColor: '#000',
    borderWidth: 1,

  },
  tittleLogin: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  card: {
    width:300,
    height:400,
    marginTop:20,
    backgroundColor:'#1d3557',
    borderRadius:14,
    alignItems:'center',
    alignSelf:'center',
    shadowColor:'#000',
    elevation:5,
  },
  cardBoton:{
    backgroundColor:'#c2822eff',
    borderRadius:16,
    padding:8,
    margin:4,
    marginTop:20,
    flexDirection:'row'
  },
  tittleB: {
    fontSize: 55,
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: '#000',
    color:'#FFF',

    // textShadowOffset: { width: 1.6, height: 1.6 },
    // textShadowRadius: 18,
  },
  tittleC: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: '#000',
    color:'#FFF',
    // textShadowOffset: { width: 1.6, height: 1.6 },
    // textShadowRadius: 18,
  },
  tittleD: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: '#000',
    color:'#FFF',

    // textShadowOffset: { width: 1.6, height: 1.6 },
    // textShadowRadius: 18,
  },

  navbar: {
   // position:'absolute',
    bottom:20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent:'center',
    backgroundColor: '#1d3557',
    marginHorizontal:100,
    paddingVertical:10,
    paddingHorizontal:30,
    borderRadius:40,
    shadowColor:'#000',
    elevation:8,
    shadowOpacity:0.3,
    // borderTopWidth:1,  
    // marginBottom:10,
  },
  navItem: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    
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

