import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import useAutoLogout from '../../controllers/TokenValidator';

type RootStackParamList = {
    Login: undefined;
    Register: undefined;
    Home: undefined;
    ListConfig: undefined;
    Perfil: undefined;
    Desarrollo: undefined;
    ListAlumnos: undefined;
    RegistroAlumno: undefined;
    RecursosAd: undefined;
    Reportes: undefined;
  };

type RegisterScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
type RegisterScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: RegisterScreenNavigationProp;
};


const Home: React.FC<Props> = ({ navigation }) => {

  useAutoLogout();
 
  return (
    
    <ScrollView style={styles.container}>
    <View style={styles.headerContainerNav}>
      <TouchableOpacity onPress={() => navigation.navigate('Desarrollo')}>
        <FontAwesome name="user-circle" size={28} color="white" />
      </TouchableOpacity>
        <Text style={styles.headerTitleNav}>A C C E S S L E A R N</Text>
      <TouchableOpacity onPress={() => navigation.navigate('ListConfig')}>
        <Fontisto name="nav-icon-list-a" size={28} color="white" />
      </TouchableOpacity>
    </View>
      <View style={styles.headerContainer}>
        <Text style={[styles.headerTitle]}>Menú General</Text>
      </View>
      
      <View style={styles.menuContainer}>
        <TouchableOpacity style={[styles.menuButton, {backgroundColor:"#2A708F"}]} onPress={() => navigation.navigate('RecursosAd')}>
          <Text style={[styles.menuText, {color: "#ffffff"}]}>Recursos</Text>
          <Text style={[styles.menuText, {color: "#ffffff"}]}>Adicionales</Text>
          <Image source={require('../../../src/images/RecursosAd.png')} style={styles.menuIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.menuButton, {backgroundColor:"#E85A55"}]} onPress={() => navigation.navigate('Reportes')}>
          <Text style={[styles.menuText, {color: "#ffffff"}]}>Soporte Tecnico y Ayuda</Text>
          <Image source={require('../../../src/images/SoporteTecnico.png')} style={styles.menuIcon} />          
        </TouchableOpacity>

        <TouchableOpacity style={[styles.menuButton, {backgroundColor:"#43943A"}]}>
          <Text style={[styles.menuText, {color: "#ffffff"}]}>Personalización de actividades</Text>
          <Image source={require('../../../src/images/PersActividades.png')} style={styles.menuIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.menuButton, {backgroundColor:"#0A1029"}]} onPress={() => navigation.navigate('RegistroAlumno')} >
          <Text style={[styles.menuText, {color: "#ffffff"}]}>Registrar Niño</Text> 
          <Image source={require('../../../src/images/RegistrarN2.png')} style={styles.menuIcon} />          
        </TouchableOpacity>

        <TouchableOpacity style={[styles.menuButton, {backgroundColor:"#3896BF"}]} onPress={() => navigation.navigate('ListAlumnos')}>
          <Text style={[styles.menuText, {color: "#ffffff"}]}>Lista de niños</Text>
          <Image source={require('../../../src/images/ListaDeN.png')} style={styles.menuIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.menuButton, {backgroundColor:"#3B746A"}]}>
          <Text style={[styles.menuText, {color: "#ffffff"}]}>Configuración</Text>
          <Text style={[styles.menuText, {color: "#ffffff"}]}>De App</Text>
          <Image source={require('../../../src/images/Config.png')} style={styles.menuIcon} />
        </TouchableOpacity>
        
        {/* Repite este bloque para los otros botones */}
        {/* ... */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  headerTitle: {
    fontSize: 35,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  menuContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  menuButton: {
    width: '40%', // Aproximadamente para dos botones por fila
    aspectRatio: 1, // Para que los botones sean cuadrados
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F0F0', // Un color de fondo para el botón
    borderRadius: 10, // Bordes redondeados
    // Sombra (opcional)
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  menuIcon: {
    width: '60%', // Ajusta según tus necesidades
    height: '60%', // Ajusta según tus necesidades
    resizeMode: 'contain',
  },
  menuText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
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
});

export default Home;
