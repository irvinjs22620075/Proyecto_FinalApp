
import { StyleSheet, Text, View, SafeAreaView, Platform, ScrollView, TouchableOpacity, TextInput, Image, StatusBar } from 'react-native';


import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';

export default function Home({navigation}) {
    return (
        <SafeAreaView style={style.mainS}>
            <View style={style.appBar}>
                
            </View>
            {/* cierre de appbar */}
            {/* inicio ded formulario */}
            <ScrollView style={{ padding: 10 }}>


                <View style={style.container}>
                    <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: 'bold' }}>Sign In Form</Text>
                    <Image style={style.avatar} source={{ uri: 'https://img.freepik.com/vector-premium/impresion_1309087-156.jpg' }} />

                    <View style={style.cardInfo}>
                        <Text style={style.label}>User</Text>
                        <TextInput style={style.input} placeholder="Escribe tu nombre" />
                        <Text style={style.label}>Password</Text>
                        <TextInput style={style.input} placeholder="*****" secureTextEntry={true} />

                        <Text style={style.label}>Email</Text>
                        <TextInput style={style.input} placeholder="docs@gmail.com" keyboardType='email-address' />
                        <View style={style.rowBetween}>
                            <TouchableOpacity>
                                <Text >Remember me</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text >Forgot Password?</Text>
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
            
        </SafeAreaView>

    );
}

const style = StyleSheet.create({
    mainS: {
        flex: 1,
        backgroundColor: '#e0e8ebff',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 44,
        padding: 25,
       
    },
    

    container: {
        width: '100%',
        backgroundColor: '#ffffffff',
        borderRadius: 15,
        padding: 15,
        // alignItems: 'flex-start',
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 10,
        elevation: 5,
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
        backgroundColor: '#e9e7e7ff',
        padding: 10,
    },
    buttonForm: {
        backgroundColor: '#1e56aaff',
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