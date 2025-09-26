
import { StyleSheet, Text, View, SafeAreaView, Platform, ScrollView, TouchableOpacity, TextInput, Image, StatusBar,ImageBackground  } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';


import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';


export default function Home({navigation}) {
    return (
        <SafeAreaView style={style.mainS}>
            {/* <ImageBackground style={style.wallpaper} resizeMode="cover" source={{uri:'https://wallpaperaccess.com/full/1417825.jpg' }}> */}
            <View style={style.appBar}>
                
            </View>
            {/* cierre de appbar */}
            {/* inicio ded formulario */}
            <ScrollView style={{ padding:15}}>


                <View style={style.container}>
                    <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: 'bold', color:'#fff'}}>Sign In Form</Text>
                    <Image style={style.avatar} source={{ uri: 'https://img.freepik.com/vector-premium/impresion_1309087-156.jpg' }} />

                    <View style={style.cardInfo}>
                        <Text style={style.label}>User</Text>
                        <TextInput style={style.input} placeholder="Escribe tu nombre" />
                        <Text style={style.label}>Password</Text>
                        <TextInput style={style.input} placeholder="*****" secureTextEntry={true} />

                        <Text style={style.label}>Email</Text>
                        <TextInput style={style.input} placeholder="docs@gmail.com" keyboardType='email-address' />
                        <View style={style.rowBetween}>
                            <TouchableOpacity style={{flexDirection:'row', }}>
                                <FontAwesome5 name="check-square" color={'#fff'}/>
                                <Text style={{color:'#fff'}} >Remember me</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={{color:'#fff'}}  >Forgot Password?</Text>
                            </TouchableOpacity>

                        </View>

                        <TouchableOpacity style={style.buttonForm} onPress={() => navigation.navigate("Alumnos")}>
                            {/* <Icon name="send" size={20} color={"#fff"} style={style.iconoCentro}/> */}
                            <Text style={style.textBotton}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            {/* fin de formulario */}
            {/* </ImageBackground> */}
        </SafeAreaView>

    );
}

const style = StyleSheet.create({
    mainS: {
        flex: 1,
    backgroundColor: '#afbeccff',
        
       paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 44,
        //padding: 25,
       
    },
    wallpaper:{
        flex:1,
         width: '100%',
        height: '100%',
    },
    container: {
        width: '100%',
        // backgroundColor: '#5188bbe7',
    backgroundColor: '#1d3557',

        borderRadius: 15,
        padding: 15,
        // alignItems: 'flex-start',
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 10,
        elevation: 5,
        marginTop:150,
    },

    avatar: {
        width: 70,
        height: 70,
        borderRadius: 50,
        marginBotton: 28,
        marginRight: 12,
        alignSelf: 'center',
    },

    label: {
        fontWeight: 'bold',
        fontSize: 13,
        marginBottom: 8,
        textAlign: 'start',
        marginStart: 12,
        color:'#fff',
    },
    labelInf: {
        alignSelf: 'flex-end',
        textAlign: 'justify',
        alignItems: 'flex-end',
    },
    rowBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 4,
        marginStart: 12,
    },
    input: {
        fontSize: 13,
        marginBottom: 10,
        borderRadius: 15,
        backgroundColor: 'hsla(0, 0%, 100%, 1.00)',
        padding: 10,
    },
    buttonForm: {
        backgroundColor: '#1b478aff',
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        paddingVertical: 12,
        borderRadius: 18,
        width: '50%',
        shadowColor: '#020c66ff',
        shadowOpacity: 5,
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 20,
        elevation: 7,
    },
    textBotton: {
        color: '#fff',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: 18,
    },

});