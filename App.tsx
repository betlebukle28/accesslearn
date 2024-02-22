import { decode as atob, encode as btoa } from 'base-64';

if (!global.btoa) {
    global.btoa = btoa;
}

if (!global.atob) {
    global.atob = atob;
}

import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthProvider } from './src/controllers/AuthContext';
import useAutoLogout from './src/controllers/TokenValidator';
// TEMPLATES
import Login from './src/templates/Login/Login';
import RegisterPage from './src/templates/Login/Registro';
import Home from './src/templates/Main/Home';
import ListConfig from './src/templates/Main/ListConfig';
import Perfil from './src/templates/Perfil/Perfil';
import Desarrollo from './src/templates/Extras/Desarrollo';
import ListAlumnos from './src/templates/Main/ListAlumnos';

if (!global.btoa) {
    global.btoa = btoa;
}

if (!global.atob) {
    global.atob = atob;
}


const Stack = createNativeStackNavigator();

const jwtDecode = require('jwt-decode').default;


const App = () => {
  
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {/* Solo define tus pantallas aquí, AuthProvider maneja cuáles deben mostrarse basado en el estado de autenticación */}
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Register" component={RegisterPage} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="ListConfig" component={ListConfig} options={{ headerShown: false }} />
          <Stack.Screen name="Perfil" component={Perfil} options={{ headerShown: false }} />
          <Stack.Screen name="Desarrollo" component={Desarrollo} options={{ headerShown: false }} />
          <Stack.Screen name="ListAlumnos" component={ListAlumnos} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
