import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "./src/pages/Home";
import Alumnos from './src/pages/Alumnos';
import ListaAlumnos from './src/pages/ListaAlumnos';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Alumnos" component={Alumnos} />
        <Stack.Screen name="ListaAlumnos" component={ListaAlumnos}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
