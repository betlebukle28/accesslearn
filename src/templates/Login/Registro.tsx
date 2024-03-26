// Registro.tsx
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import LocalHost from '../../controllers/UrlLocalHost';

type RootStackParamList = {
  Login: undefined;
  Register: undefined;
};

type RegisterScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Register'>;
type RegisterScreenRouteProp = RouteProp<RootStackParamList, 'Register'>;

type Props = {
  navigation: RegisterScreenNavigationProp;
};

const Registro: React.FC<Props> = ({ navigation }) => {
  const [Nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ApellidoPaterno, setApellidoPaterno] = useState('');
  const [ApellidoMaterno, setApellidoMaterno] = useState('');
  const [Telefono, setTelefono] = useState('');
  const [Usuario, setUsuario] =  useState('');

  const handleRegister = async () => {
    const url = `${LocalHost}3000/api/registrar-profesor`; // URL de tu API
    
    // Bbjeto con los datos del usuario
    const userData = {
      Nombre: Nombre,
      ApellidoPaterno: ApellidoPaterno,
      ApellidoMaterno: ApellidoMaterno,
      email: email,
      Telefono: Telefono,
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
        console.log('Usuario registrado con éxito:', json);
        // Navegar a la pantalla de Login
        navigation.navigate('Login');
      } else {
        console.log('Error en el registro:', json);
      }
    } catch (error) {
      // Error en la Red
      console.error('Error de solicitud:', error);
    }
  };
  

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps='handled'>
      <Image source={require('../../images/AccessLearn.png')} style={styles.logo} />
      <Text style={styles.header}>REGISTRO</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={Nombre}
        onChangeText={setNombre}
      />
      <TextInput
        style={styles.input}
        placeholder="Apellido Paterno"
        value={ApellidoPaterno}
        onChangeText={setApellidoPaterno}
      />
      <TextInput
        style={styles.input}
        placeholder="Apellido Materno"
        value={ApellidoMaterno}
        onChangeText={setApellidoMaterno}
      />
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Telefono"
        value={Telefono}
        onChangeText={setTelefono}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Usuario"
        value={Usuario}
        onChangeText={setUsuario}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.buttonContainer} onPress={handleRegister}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Registrarse</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Login')}>
      <View style={styles.buttonLine}>
        <Text style={styles.buttonTextLine}>¿Ya tienes cuenta?</Text>
        </View>
      </TouchableOpacity>
      </ScrollView>
  );
};

export default Registro;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 26,
    marginBottom: 40,
    color: '#333', // Color oscuro para el texto del encabezado
    fontWeight: 'bold', // Texto en negrita para el encabezado
  },
  input: {
    width: '100%',
    marginVertical: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  buttonContainer: {
    width: '60%', // Ancho del contenedor del botón al 60% del ancho de la pantalla
    marginTop: 20,
  },
  button: {
    backgroundColor: '#3896BF',
    padding: 15,
    borderRadius: 20,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
    
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logo: {
    width: 150, // Ajusta según tus necesidades
    height: 150, // Ajusta según tus necesidades
    marginBottom: 25,
    marginTop: 50,
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
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff', // Un fondo blanco limpio para la pantalla
//     alignItems: 'center', // Centra los elementos horizontalmente
//     justifyContent: 'center', // Centra los elementos verticalmente
//   },
//   header: {
//     fontSize: 26,
//     marginBottom: 40,
//     color: '#333', // Color oscuro para el texto del encabezado
//     fontWeight: 'bold', // Texto en negrita para el encabezado
//   },
//   inputContainer: {
//     width: '80%', // Ancho del contenedor del input al 80% del ancho de la pantalla
//     marginBottom: 15,
//   },
//   input: {
//     backgroundColor: '#eee', // Fondo claro para los campos de texto
//     padding: 15, // Espaciado interno para el texto
//     borderRadius: 8, // Bordes redondeados para el input
//     fontSize: 16, // Tamaño de fuente legible
//   },
//   buttonContainer: {
//     width: '60%', // Ancho del contenedor del botón al 60% del ancho de la pantalla
//     marginTop: 20,
//   },
//   button: {
//     backgroundColor: '#0066ff', // Un azul atractivo para el botón de inicio de sesión
//     padding: 15, // Espaciado interno para el botón
//     borderRadius: 20, // Bordes redondeados para el botón
//     alignItems: 'center', // Centra el texto del botón
//   },
//   buttonLine: {
//     backgroundColor: '#ffffff', // Un color de fondo claro para el botón
//     padding: 15, // Espaciado interno para el botón
//     borderRadius: 20, // Bordes redondeados para el botón
//     alignItems: 'center', // Centra el texto del botón
//     borderWidth: 2, // Ancho del borde de 2px
//     borderColor: '#0066ff', // Color del borde azul
//     borderStyle: 'solid', // Estilo del borde sólido
//   },
//   buttonText: {
//     color: '#fff', // Texto blanco para que destaque en el botón azul
//     fontSize: 16, // Tamaño de fuente que coincide con el de los inputs
//     fontWeight: 'bold', // Texto en negrita para el botón
//   },
//   buttonTextLine: {
//     color: '#000', // Texto Negro para que destaque en el botón blanco
//     fontSize: 16, // Tamaño de fuente que coincide con el de los inputs
//     fontWeight: 'bold',
//   }