import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput  } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import styles from '../../css/styles';

type RootStackParamList = {
    Login: undefined;
    Register: undefined;
    Home: undefined;
    ListConfig: undefined;
    Perfil: undefined;
    Desarrollo: undefined;
  };

type RegisterScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Desarrollo'>;
type RegisterScreenRouteProp = RouteProp<RootStackParamList, 'Desarrollo'>;

type Props = {
  navigation: RegisterScreenNavigationProp;
};

const Desarrollo: React.FC<Props> = ({ navigation }) => {
 
  return (
    
    <ScrollView>
      <View>
      <View style={styles.headerContainerNav}>
            <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
            <FontAwesome name="user-circle" size={28} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text style={styles.headerTitleNav}>A C C E S S L E A R N</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('ListConfig')}>
            <Fontisto name="nav-icon-list-a" size={28} color="white" />
            </TouchableOpacity>
        </View>
      <View style={styles.headerContainer}>
        <Text style={[styles.headerTitle]}>Pagina en Desarrollo</Text>
        <Image source={require('../../images/RobotDesarrollo.png')} style={styles.logoH4} />
      </View>

      

      <View style={styles.headerContainer}>
        <Text style={[styles.menuText]}>Esta Pagina esta en desarrollo</Text>
        <Text style={[styles.menuText]}>Favor de reintertar mas tarde</Text>
      </View>
      <View>
      <View style={[{ alignItems: 'center'}]}>
        <TouchableOpacity style={[styles.buttonContainer2, {width: '80%', marginTop: 20,}]} onPress={() => navigation.navigate('Home')}>
            <View style={[styles.buttonLineCancel]}>
              <Text style={[styles.buttonTextLine, styles.TextDelete]}>Regresar</Text>
            </View>
           </TouchableOpacity>
      </View>
      </View>
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
//   logoH4: {
//     width: 300, // Ajusta según tus necesidades
//     height: 300, // Ajusta según tus necesidades
//     marginBottom: 20,
//   },
//   headerTitle: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     marginVertical: 0,
//   },
//   input: {
//     backgroundColor: '#eee', // Fondo claro para los campos de texto
//     padding: 15, // Espaciado interno para el texto
//     borderRadius: 8, // Bordes redondeados para el input
//     fontSize: 16, // Tamaño de fuente legible
//   },
//   inputContainer: {
//     width: '80%', // Ancho del contenedor del input al 80% del ancho de la pantalla
//     marginBottom: 15,
//     paddingLeft: 20,
//   },
//   menuContainer: {
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

export default Desarrollo;
