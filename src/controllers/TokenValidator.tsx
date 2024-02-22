// TokenValidator.tsx
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { jwtDecode } from "jwt-decode";
import { NavigationProp } from '@react-navigation/core';
import { Alert } from 'react-native';


// Define una interfaz para la estructura esperada del token decodificado
interface DecodedToken {
  exp: number;
}

type RootStackParamList = {
    Login: undefined;
    Home: undefined;
    // Define otros parámetros de ruta aquí
  };
  


const useAutoLogout = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();


  useEffect(() => {
    console.log("Entro a useEffect");
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('userToken');
      if (token) {
        // Asegúrate de manejar el caso donde jwtDecode no pueda decodificar el token
        console.log(" if (token) {");
        try {
          const decoded: DecodedToken = jwtDecode(token);
          //const decoded = jwtDecode(token);
          const isExpired = decoded.exp * 1000 < Date.now(); // jwt exp es en segundos
          console.log("try { ");
          console.log("try { ", decoded);
          if (isExpired) {
            // Si el token ha expirado, limpiar token y redirigir a Login
            await AsyncStorage.removeItem('userToken');
            Alert.alert("Advertencia", "El Usuario ha expirado, favor de ingresar de nuevo");
            navigation.navigate('Login');

          }
        } catch (error) {
          console.error('Error decoding token', error);
        }
      }
    };

    checkToken();

    // Intervalo para verificar continuamente
    const intervalId = setInterval(checkToken,  60 * 60 * 1000); // Cada 1 hora

     return () => clearInterval(intervalId); // Limpiar
  }, [navigation]);

  return null;
};

export default useAutoLogout;