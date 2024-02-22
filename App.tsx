import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/templates/Login/Login';
import RegisterPage from './src/templates/Login/Registro';
import Home from './src/templates/Main/Home';
import ListConfig from './src/templates/Main/ListConfig';
import Perfil from './src/templates/Perfil/Perfil';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthProvider } from './src/templates/Login/AuthContext';


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
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
