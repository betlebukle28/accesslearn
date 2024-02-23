import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth }  from '../../controllers/AuthContext';
import styles from '../../css/styles';

type RootStackParamList = {
    Login: undefined;
    Register: undefined;
    Home: undefined;
    ListConfig: undefined;
    Perfil: undefined;
    Desarrollo: undefined;
  };

type RegisterScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ListConfig'>;
type RegisterScreenRouteProp = RouteProp<RootStackParamList, 'ListConfig'>;

type Props = {
  navigation: RegisterScreenNavigationProp;
};

const ListConfig: React.FC<Props> = ({ navigation }) => {

  const { signOut } = useAuth();
  
  const handleSignOut = async () => {
    await signOut(); // Llama a signOut. No necesitas pasar un callback aquí.
    // Después de cerrar sesión, resetea el stack de navegación
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }], // Asegúrate de que 'Login' sea el nombre correcto de tu ruta
    });
  };
  
 
  return (
    
    <ScrollView>
      
    <View style={styles.headerContainerNav}>
      <TouchableOpacity onPress={() => navigation.navigate('Desarrollo')}>
      <FontAwesome name="user-circle" size={28} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
      <Text style={styles.headerTitleNav }>A C C E S S L E A R N</Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <Fontisto name="nav-icon-list-a" size={28} color="white" />
      </TouchableOpacity>
    </View>
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={[styles.headerTitle]}>Configuracion</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
      <View style={styles.menuContainerList}>
        <Text style={styles.menuText}>Regresar</Text>
        <AntDesign name="right" size={24} color="black" />
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
      <View style={styles.menuContainerList}>
        <Text style={styles.menuText}>Perfil</Text>
        <AntDesign name="right" size={24} color="black" />
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
      <View style={styles.menuContainerList}>
        <Text style={styles.menuText}>Ayuda y Soporte Tecnico</Text>
        <AntDesign name="right" size={24} color="black" />
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
      <View style={styles.menuContainerList}>
        <Text style={styles.menuText}>Configuracion y Privacidad</Text>
        <AntDesign name="right" size={24} color="black" />
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSignOut}>
      <View style={styles.menuContainerList}>
        <Text style={styles.menuText}>Cerrar Sesion</Text>
        <AntDesign name="right" size={24} color="black" />
      </View>
       </TouchableOpacity>
       </View>
    </ScrollView>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     textAlign: 'left',
//   },
//   headerContainer: {
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   logo: {
//     width: 100, // Ajusta según el tamaño de tu logo
//     height: 100, // Ajusta según el tamaño de tu logo
//     resizeMode: 'contain',
//   },
//   headerTitle: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     marginVertical: 20,
//   },
//   menuContainerList: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingLeft: 20,
//     paddingBottom: 30,
//   },
//   menuButton: {
//     width: '40%', // Aproximadamente para dos botones por fila
//     aspectRatio: 1, // Para que los botones sean cuadrados
//     margin: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F0F0F0', // Un color de fondo para el botón
//     borderRadius: 10,
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   ButtonList:{
//     width: '100%',
//     height: '100%',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     backgroundColor: '#F0F0F0', // Un color de fondo para el botón
//     borderRadius: 10,
//   },
//   menuText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     textAlign: 'left',
//     marginTop: 10,
//   },
//   headerContainerNav: {
//       flexDirection: 'row',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       backgroundColor: '#3896BF', // Reemplaza con tu color de fondo
//       paddingHorizontal: 15, // Añade el padding horizontal que necesites
//       paddingTop: 60, // Este es el padding típico para el status bar en iOS, ajusta según la plataforma y diseño
//       paddingBottom: 10, // Añade el padding inferior que necesites
//     },
//     headerTitleNav: {
//       color: 'white',
//       fontSize: 20,
//       fontWeight: 'bold',
//     },
// });

export default ListConfig;
