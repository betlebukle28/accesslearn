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

type PerfilScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Perfil'>;

type Props = {
  navigation: PerfilScreenNavigationProp;
};

const Perfil: React.FC<Props> = ({ navigation }) => {

  let urlPerfil = require('../../images/Perfil.png');

  const PerfilImage = urlPerfil;
 
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
        <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>Perfil</Text>
        </View>
      {/* Contenedor para la sección del avatar y los botones */}
        <View style={[styles.avatarContainer, {alignItems: 'center', width: "100%"}]}>
          <Image source={PerfilImage} style={[{ width: "26%",height: 102, marginTop: 10, marginBottom: 25} ]} />
        </View>
        {/* Contenedor del Avatar */}
        {/* Contenedor de los botones */}
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
      <View style={styles.menuContainerList}>
        <Text style={styles.menuText}>Configuracion de Perfil</Text>
        <AntDesign name="right" size={24} color="black" />
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
      <View style={styles.menuContainerList}>
        <Text style={styles.menuText}>Cambiar Contraseña</Text>
        <AntDesign name="right" size={24} color="black" />
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
      <View style={styles.menuContainerList}>
        <Text style={styles.menuText}>Notificaciones</Text>
        <AntDesign name="right" size={24} color="black" />
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
      <View style={styles.menuContainerList}>
        <Text style={styles.menuText}>Estadisticas de Alumnos</Text>
        <AntDesign name="right" size={24} color="black" />
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
      <View style={styles.menuContainerList}>
        <Text style={styles.menuText}>Privacidad</Text>
        <AntDesign name="right" size={24} color="black" />
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
      <View style={styles.menuContainerList}>
        <Text style={styles.menuText}>Reportes</Text>
        <AntDesign name="right" size={24} color="black" />
      </View>
      </TouchableOpacity>
      </View>
      {/* <View style={styles.headerContainer}>
        <Text style={[styles.headerTitle]}>Pagina en Desarrollo</Text>
        <Image source={require('../../images/RobotDesarrollo.png')} style={styles.logoH4} />
      </View>

      

      <View style={styles.headerContainer}>
        <Text style={[styles.menuText]}>Esta Pagina esta en desarrollo</Text>
        <Text style={[styles.menuText]}>Favor de reintertar mas tarde</Text>
      </View>
      <View>
      <View style={[{ alignItems: 'center'}]}>
        <TouchableOpacity style={[styles.buttonContainer2, {width: '80%', marginTop: 20}]} onPress={() => navigation.navigate('Home')}>
            <View style={[styles.buttonLineCancel]}>
              <Text style={[styles.buttonTextLine, styles.TextDelete]}>Regresar</Text>
            </View>
           </TouchableOpacity>
      </View>
      </View> */}
      </View>
    </ScrollView>
  );
};


export default Perfil;
