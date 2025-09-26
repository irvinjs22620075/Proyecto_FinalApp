import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View,Image, SafeAreaView, Icon, ScrollView, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import React, { useEffect } from 'react';
// import {interpolate, useAnimatedStyle, useSharedValue, withSpring} from 'react-native-reanimated';


import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
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
      {/* <ImageBackground style={style.wallpaper} resizeMode="cover" source={require("../Images/Snoppy2.jpg")}> */}
      <View style={style.container}>
        <View style={[style.headerTopBar,{paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 20 }]}>
          <Text style={style.headerTopBarText}>Pantalla Principal</Text>
        </View>

      </View>
      <ScrollView style={{ padding: 15 }}>
        {/* Inicio de Lista */}
        {/* <View>
          <TouchableOpacity style={style.login} onPress={() => navigation.navigate("Home")}>
            <Text style={style.tittleLogin}>
              Sign up
            </Text>
          </TouchableOpacity>
        </View> */}

        <View style={style.card1}>
          {/* <Text style={style.tittleB}>Bienvenidos </Text> */}
         
       <Image style={{alignSelf:'center', width:300, height:300}} source={require("../Images/logo.png")}/>
        </View>
        <View style={style.card}>

          <Text style={{ color: '#fff', fontSize: 20, marginTop: 10, fontWeight: 'bold' }}>¿Qué desea realizar?</Text>
          <View>
            <TouchableOpacity style={style.cardBotonA} onPress={()=> navigation.navigate("Alumnos")}>
              <Text style={style.textcardBoton}>Registrar Alumnos</Text>
              <FontAwesome5 name="user-plus" size={20} alignSelf={'center'} color={'#fff'} />

            </TouchableOpacity>
            {/* <TouchableOpacity style={style.cardBotonD}>
              <Text style={style.textcardBoton}>Registrar Docentes</Text>
              <FontAwesome5 name="user-plus" size={20} alignSelf={'center'} color={'#fff'} />

            </TouchableOpacity> */}
          </View>
          <Text style={{ color: '#fff', marginTop: 40, }}>Contactos</Text>
          <View style={style.iconsCard}>

            <FontAwesome5 name="instagram" size={20} alignSelf={'center'} color={'#fff'} marginHorizontal={12} />
            <FontAwesome5 name="facebook" size={20} alignSelf={'center'} color={'#fff'} marginHorizontal={12} />
            <FontAwesome5 name="github" size={20} alignSelf={'center'} color={'#fff'} marginHorizontal={12} />
          </View>

        </View>
      </ScrollView>


      <View style={style.navbar}>
        <View style={style.navItem}>
          <TouchableOpacity style={style.botonNav} onPress={() => navigation.navigate("Alumnos")}>
            <MaterialIcons name="person" size={30} color={"#fff"}  />
            <Text style={style.navText}>Users</Text>
          </TouchableOpacity>
        </View>
        <View style={style.navItem}>
          <TouchableOpacity style={style.botonNav} onPress={() => navigation.navigate("Principal")}>
            <MaterialIcons style={style.icon} name="home" size={30} color={"#fff"}  />
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
      {/* </ImageBackground> */}
    </SafeAreaView>
  );
}
const style = StyleSheet.create({
  mainS: {
    flex: 1,
    backgroundColor: '#ffffffff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 44,
    // padding: 25,
    marginTop: 27,
  },
  // wallpaper: {
  //   flex: 1,
  //   width: '100%',
  //   height: '100%',
  // },
   headerTopBar: {
    backgroundColor: '#1d3557',
    //  borderRadius: 3,
    padding: 8,
    marginBottom:10,

  },
    headerTopBarText: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },

  login: {
    backgroundColor: '#1d3557',
    borderRadius: 16,
    width: '25%',
    padding: 6,
    alignSelf: 'flex-end',
    shadowColor: '#fff',
    // shadowOffset:{width:3, height:3},
    // shadowOpacity:0.5,
    // shadowRadius:10,
    elevation: 50,
    // borderColor: '#000',
    borderWidth: 0.3,

  },
  tittleLogin: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  card: {
    width: 300,
    height: 300,
    marginTop: -60,
    backgroundColor: '#1d3557',
    borderRadius: 14,
    alignItems: 'center',
    alignSelf: 'center',
    shadowColor: '#000',
    elevation: 5,
  },
  cardBotonA: {
    backgroundColor: '#1f6831ff',
    borderRadius: 16,
    padding: 8,
    margin: 4,
    marginTop: 40,
    // flexDirection:'row'

  },
  // cardBotonD: {
  //   backgroundColor: '#1f6831ff',
  //   borderRadius: 16,
  //   padding: 8,
  //   margin: 4,
  //   marginTop: 20,
  //   // flexDirection:'row'

  // },
  textcardBoton: {
    fontSize: 16,
    fontWeight: 'bold',

  },
  tittleB: {
    fontStyle: 'italic',
    fontSize: 55,
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: '#000',
    color: '#000000ff',
  },
  tittleC: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: '#000',
    color: '#000',
    // textShadowOffset: { width: 1.6, height: 1.6 },
    // textShadowRadius: 18,
  },
  tittleD: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: '#000',
    color: '#000',

    // textShadowOffset: { width: 1.6, height: 1.6 },
    // textShadowRadius: 18,
  },
  iconsCard: {
    flexDirection: 'row',


  },

  navbar: {
    // position:'absolute',
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

