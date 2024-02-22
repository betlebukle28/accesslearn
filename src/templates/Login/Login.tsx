// Login.tsx
import React, { useState }  from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';


type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
};

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;
type LoginScreenRouteProp = RouteProp<RootStackParamList, 'Login'>;

type Props = {
  navigation: LoginScreenNavigationProp;
  
};



const Login: React.FC<Props> = ({ navigation }) => {

  const [Usuario, setUsuario] =  useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const url = 'http://172.26.26.78:3000/api/login-profesor'; // URL de tu API
    
    // Bbjeto con los datos del usuario
    const userData = {
      Usuario: Usuario,
      password: password,
    };
  
    try {
      // Solicitud POST a la API
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      const json = await response.json();
  
      if (response.status === 200) {
        console.log('Usuario logueado con éxito:', json);
        const token = json.token;
      
        // Almacenar el token en AsyncStorage
        await AsyncStorage.setItem('userToken', token);
      
        // Resetea el stack de navegación y navega a la pantalla principal
        navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }],
        });
      } else {
        // Manejo de errores
        console.log('Error en el inicio de sesión del usuario:', json);
        // Mostrar alerta de error al usuario
        Alert.alert("Error", "Las credenciales no son correctas");
      }
    } catch (error) {
      // Error en la Red
      console.error('Error de solicitud:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>INICIAR SESION</Text>
        <Image source={require('../../images/AccessLearn.png')} style={styles.logo} />
    <Text style={styles.textinput}>USUARIO</Text>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Usuario" style={styles.input}
        value={Usuario}
        onChangeText={setUsuario} />
      </View>
      <Text style={styles.textinput}>CONTRASEÑA</Text>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Contraseña" style={styles.input} secureTextEntry
        value={password}
        onChangeText={setPassword} />
      </View>
      <TouchableOpacity style={styles.buttonContainer} onPress={handleLogin}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Register')}>
        <View style={styles.buttonLine}>
          <Text style={styles.buttonTextLine}>Registrarse</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

// Aquí continúan tus estilos

export default Login;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff', // Un fondo blanco limpio para la pantalla
      alignItems: 'center', // Centra los elementos horizontalmente
      justifyContent: 'center', // Centra los elementos verticalmente
    },
    header: {
      fontSize: 26,
      marginBottom: 40,
      color: '#333', // Color oscuro para el texto del encabezado
      fontWeight: 'bold', // Texto en negrita para el encabezado
    },
    textinput: {
      fontSize: 15,
      textAlign: 'left',
      
    },
    inputContainer: {
      width: '80%', // Ancho del contenedor del input al 80% del ancho de la pantalla
      marginBottom: 15,
    },
    input: {
      backgroundColor: '#eee', // Fondo claro para los campos de texto
      padding: 15, // Espaciado interno para el texto
      borderRadius: 8, // Bordes redondeados para el input
      fontSize: 16, // Tamaño de fuente legible
    },
    buttonContainer: {
      width: '60%', // Ancho del contenedor del botón al 60% del ancho de la pantalla
      marginTop: 20,
    },
    button: {
      backgroundColor: '#3896BF', // Un azul atractivo para el botón de inicio de sesión
      padding: 15, // Espaciado interno para el botón
      borderRadius: 20, // Bordes redondeados para el botón
      alignItems: 'center', // Centra el texto del botón
    },
    buttonText: {
      color: '#fff', // Texto blanco para que destaque en el botón azul
      fontSize: 16, // Tamaño de fuente que coincide con el de los inputs
      fontWeight: 'bold', // Texto en negrita para el botón
    },
    buttonTextLine: {
      color: '#3896BF', // Texto Negro para que destaque en el botón blanco
      fontSize: 16, // Tamaño de fuente que coincide con el de los inputs
      fontWeight: 'bold',
    },
    buttonLine: {
        backgroundColor: '#ffffff', // Un color de fondo claro para el botón
        padding: 15, // Espaciado interno para el botón
        borderRadius: 20, // Bordes redondeados para el botón
        alignItems: 'center', // Centra el texto del botón
        borderWidth: 2, // Ancho del borde de 2px
        borderColor: '#3896BF', // Color del borde azul
        borderStyle: 'solid', // Estilo del borde sólido
      },
    logo: {
    width: 200, // Ajusta según tus necesidades
    height: 200, // Ajusta según tus necesidades
    marginBottom: 20,
  },
  });