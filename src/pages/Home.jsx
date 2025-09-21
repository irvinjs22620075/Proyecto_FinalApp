import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Platform, ScrollView, TouchableOpacity } from 'react-native';

export default function Home() {
    return (
        <SafeAreaView style={style.mainS}>
            <View style={style.appBar}>
                <Text style={style.appBarTittle}>INICIO</Text>
                 <View style={{ width: 20 }}></View>
            </View>
            {/* cierre de appbar */}
            {/* inicio ded formulario */}
                <ScrollView style={{padding:14}}>
                    <Text style={style.sectionTittle}>Iniciar Sesion</Text>

                    <View style={style.card}>
                        <View style={style.cardInfo}>
                            <Text style={style.label}>User</Text>
                            <Text style={style.info}>irvin</Text>
                            <Text style={style.label}>Password</Text>
                            <Text style={style.info}>****</Text>
                            <Text style={style.label}>Email</Text>
                            <Text style={style.info}>docs@gmail.com</Text>
                        </View>
                        <TouchableOpacity>
                            <Icon name="send" size={20} color={"#fff"} style={style.iconoCentro}/>
                            <Text style={style.textBotton}>Enviar</Text>
                        </TouchableOpacity>
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
});