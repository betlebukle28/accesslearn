// Registro.tsx
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';


type RootStackParamList = {
  Home: undefined;
  ListConfig: undefined;
  Perfil: undefined;
};

type RegisterScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Perfil'>;
type RegisterScreenRouteProp = RouteProp<RootStackParamList, 'Perfil'>;

type Props = {
  navigation: RegisterScreenNavigationProp;
};

const Perfil: React.FC<Props> = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ApellidoPaterno, setApellidoPaterno] = useState('');
  const [ApellidoMaterno, setApellidoMaterno] = useState('');
  const [Telefono, setTelefono] = useState('');

  const handleRegister = () => {
    console.log('Registrar usuario');
    // Aquí deberías agregar la lógica para registrar al usuario,
    // como enviar los datos a un servidor o base de datos.
  };

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps='handled'>
      <Image source={require('../../images/AccessLearn.png')} style={styles.logo} />
      <Text style={styles.header}>PERFIL</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={username}
        onChangeText={setUsername}
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
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      
      </ScrollView>
  );
};

export default Perfil;

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
