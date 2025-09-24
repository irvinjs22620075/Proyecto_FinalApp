import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { DataTable } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';


const data = [
    { "id": 1, "Nombre": "Irvin ", "NoControl": 22620075, "Carrera": "Ing. Sistemas",  "Telefono": 9531643574, "Imagen": "imagen" },
    { "id": 2, "Nombre": "Marco ", "NoControl": 22620075, "Carrera": "Ing. Sistemas",  "Telefono": 9531643574, "Imagen": "imagen" },
    { "id": 3, "Nombre": "Diego ", "NoControl": 22620075, "Carrera": "Ing. Sistemas",  "Telefono": 9531643574, "Imagen": "imagen" },
    { "id": 4, "Nombre": "Erik ", "NoControl": 22620075, "Carrera": "Ing. Sistemas",  "Telefono": 9531643574, "Imagen": "imagen" },
    { "id": 5, "Nombre": "Pedro ", "NoControl": 22620075, "Carrera": "Ing. Sistemas", "Telefono": 9531643574, "Imagen": "imagen" },
    { "id": 6, "Nombre": "Jorge ", "NoControl": 22620075, "Carrera": "Ing. Sistemas",  "Telefono": 9531643574, "Imagen": "imagen" },
    { "id": 7, "Nombre": "Ana ", "NoControl": 22620075, "Carrera": "Ing. Sistemas",  "Telefono": 9531643574, "Imagen": "imagen" },
    { "id": 8, "Nombre": "Ameli ", "NoControl": 22620075, "Carrera": "Ing. Sistemas",  "Telefono": 9531643574, "Imagen": "imagen" },
    { "id": 9, "Nombre": "Azucena ", "NoControl": 22620075, "Carrera": "Ing. Sistemas",  "Telefono": 9531643574, "Imagen": "imagen" },
    // { "id": 9, "Nombre": "Sandy ", "NoControl": 22620075, "Carrera": "Ing. Sistemas", "Semestre": 7, "Telefono": 9531643574, "Imagen": "imagen" }

];

export default function ListaAlumnos({ navigation }) {

    const renderItem = ({ item }) => (
        <View style={style.row}>

            <Text style={style.cell}>{item.Nombre}</Text>
            <Text style={style.cell}>{item.NoControl}</Text>
            <Text style={style.cell}>{item.Carrera}</Text>
            {/* <Text style={style.cell}>{item.Semestre}</Text> */}
            <Text style={style.cell}>{item.Telefono}</Text>
            <Image style={style.avatar} source={{ uri: "https://tse4.mm.bing.net/th/id/OIP.sEt9IS7ZhUi3CLe1VSwq5AHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" }} />


            <View style={style.BotonList}>
                <TouchableOpacity style={{ backgroundColor: '#eea333ff', borderRadius: 10, padding: 10, margin: 4, }} >
                    <MaterialIcons name="edit" size={15} color={"#030303ff"} />
                    {/* <Text style={style.TextBotonList}>Editar</Text> */}
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: '#cc1414f6', borderRadius: 10, padding: 10, margin: 4, borderColor:'' }}>
                    <MaterialIcons name="delete" size={15} color={"#000000ff"} />
                    {/* <Text style={style.TextBotonList}>Eliminar</Text> */}
                </TouchableOpacity>
            </View>

        </View>
    )

    return (
        <SafeAreaView style={style.mainS}>

            <View style={style.container}>
                <View style={style.headerTopBar} >
                    <Text style={style.headerTopBarText}>Lista de Alumnos</Text>
                </View>
                <View style={style.header}>
                    <Text style={style.heading}>Nombre</Text>
                    <Text style={style.heading}>No. C</Text>
                    <Text style={style.heading}>Carrera</Text>
                    {/* <Text style={style.heading}>Semestre</Text> */}
                    <Text style={style.heading}>Tel.</Text>
                    <Text style={style.heading}>Image</Text>
                    <Text style={style.heading}>Opciones</Text>
                </View>
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderItem}
                    // horizontal={true}
                    // showsHorizontalScrollIndicator={true}
                />
            </View>


            {/* Inicio de Tabla */}

            {/* Fin de tabla */}



            <View style={style.navbar}>
                <View style={style.navItem}>
                    <TouchableOpacity onPress={() => navigation.navigate("Alumnos")}>
                        <MaterialIcons name="person" marginTop={10} size={30} color={"#fff"} />
                        <Text style={style.navText}>Users</Text>
                    </TouchableOpacity>
                </View>
                <View style={style.navItem}>
                    <TouchableOpacity >
                        <MaterialIcons name="list" marginTop={10} size={30} color={"#fff"}  />
                        <Text style={style.navText}>Users List</Text>
                    </TouchableOpacity>
                </View>
                <View style={style.navItem}>
                    <TouchableOpacity>
                        <MaterialIcons style={style.icon} name="settings" marginTop={10} size={30} color={"#fff"} />
                        <Text style={style.navText}>Settings</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </SafeAreaView>
    );
}
const style = StyleSheet.create({
    mainS: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 44,
        //padding: 25,
        //marginTop: 27,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 30,
        paddingHorizontal: 15,
    },
    headerTopBar: {
        backgroundColor: '#5060a7ff',
        paddingHorizontal: 12,
        paddingVertical: 10,
        borderRadius: 5,
        elevation: 2,
        marginBottom: 15,
    },
    headerTopBarText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,

    },
    heading: {
        flex: 1,
        fontWeight: 'bold',
        fontSize: 15,
        textShadowColor:'#000',
        shadowColor:'#000'
        // borderRadius:6,
        // backgroundColor:'#e0ddddff',
        // textAlign:'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 8,
        marginHorizontal: 2,
        shadowColor:'#000',
        shadowOpacity:0.4,
        elevation: 1,
        borderRadius: 4,
        borderColor: '#d4d4d4ff',
        padding: 10,
        backgroundColor: '#cdd8e2ff',
    },
    cell: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginBotton: 28,
        marginRight: 12,

    },
    BotonList: {
        //backgroundColor:'#ffffffff',
        //borderRadius:15,
        alignItems: 'flex-end',
        alignSelf: 'flex-end',
        padding: 5,
        paddingBottom: 5,
        marginEnd: 4,
        // flexDirection:'row',
        //flexWrap:'wrap',
    },
    //ESTILOS PARA EL NAVBAR
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 80,
        backgroundColor: '#5060a7ff',
        marginTop: 'auto',

        // borderTopWidth:1,  
        // marginBottom:10,
    },
    navItem: {
        alignItems: 'center',
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

