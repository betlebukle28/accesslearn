// Login.tsx
import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
};

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;
type LoginScreenRouteProp = RouteProp<RootStackParamList, 'Login'>;

type Props = {
  navigation: LoginScreenNavigationProp;
  route: LoginScreenRouteProp;
};

const Login: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>INICIAR SESION</Text>
        <Image source={require('../../images/AccessLearn.png')} style={styles.logo} />
    <Text style={styles.textinput}>USUARIO</Text>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Usuario" style={styles.input} />
      </View>
      <Text style={styles.textinput}>CONTRASEÑA</Text>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Contraseña" style={styles.input} secureTextEntry />
      </View>
      <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Home')}>
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