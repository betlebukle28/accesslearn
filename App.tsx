// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/templates/Login/Login'; // Asegúrate de tener este archivo/componente
import RegisterPage from './src/templates/Login/Registro'; // Asegúrate de tener este archivo/componente
import Home from './src/templates/Main/Home';
import ListConfig from './src/templates/Main/ListConfig';
import Perfil from './src/templates/Perfil/Perfil';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterPage} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="ListConfig" component={ListConfig} options={{ headerShown: false }}/>
        <Stack.Screen name="Perfil" component={Perfil} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
