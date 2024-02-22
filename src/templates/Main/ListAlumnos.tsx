import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput  } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

type RootStackParamList = {
    Login: undefined;
    Register: undefined;
    Home: undefined;
    ListConfig: undefined;
    Perfil: undefined;
    Desarrollo: undefined;
    ListAlumnos: undefined;
  };

type RegisterScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ListAlumnos'>;
type RegisterScreenRouteProp = RouteProp<RootStackParamList, 'ListAlumnos'>;

type Props = {
  navigation: RegisterScreenNavigationProp;
};

const ListAlumnos: React.FC<Props> = ({ navigation }) => {
 
  return (
    
    <ScrollView style={styles.container}>
    <View style={styles.headerContainerNav}>
      <TouchableOpacity onPress={() => navigation.navigate('Desarrollo')}>
      <FontAwesome name="user-circle" size={28} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
      <Text style={styles.headerTitleNav }>A C C E S S L E A R N</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ListConfig')}>
      <Fontisto name="nav-icon-list-a" size={28} color="white" />
      </TouchableOpacity>
    </View>
      <View style={styles.headerContainer}>
        <Text style={[styles.headerTitle]}>Lista de niños</Text>
        {/* <Image source={require('../../images/RobotDesarrollo.png')} style={styles.logoH4} /> */}
      </View>
      <View style={styles.container}>
      <TouchableOpacity style={styles.buttonContainer}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Regresar</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContainer}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Agregar Niño</Text>
        </View>
      </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    textAlign: 'left',
  },
  headerContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  logo: {
    width: 100, // Ajusta según el tamaño de tu logo
    height: 100, // Ajusta según el tamaño de tu logo
    resizeMode: 'contain',
  },
  logoH4: {
    width: 300, // Ajusta según tus necesidades
    height: 300, // Ajusta según tus necesidades
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 0,
  },
  input: {
    backgroundColor: '#eee', // Fondo claro para los campos de texto
    padding: 15, // Espaciado interno para el texto
    borderRadius: 8, // Bordes redondeados para el input
    fontSize: 16, // Tamaño de fuente legible
  },
  inputContainer: {
    width: '80%', // Ancho del contenedor del input al 80% del ancho de la pantalla
    marginBottom: 15,
    paddingLeft: 20,
  },
  menuContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingBottom: 30,
  },
  menuButton: {
    width: '40%', // Aproximadamente para dos botones por fila
    aspectRatio: 1, // Para que los botones sean cuadrados
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F0F0', // Un color de fondo para el botón
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  ButtonList:{
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F0F0F0', // Un color de fondo para el botón
    borderRadius: 10,
  },
  menuText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 10,
  },
  headerContainerNav: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#3896BF', // Reemplaza con tu color de fondo
      paddingHorizontal: 15, // Añade el padding horizontal que necesites
      paddingTop: 60, // Este es el padding típico para el status bar en iOS, ajusta según la plataforma y diseño
      paddingBottom: 10, // Añade el padding inferior que necesites
    },
    headerTitleNav: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
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
});

export default ListAlumnos;
