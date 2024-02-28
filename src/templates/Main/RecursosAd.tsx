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
    RecursosAd: undefined;
    Desarrollo: undefined;
  };

type RegisterScreenNavigationProp = StackNavigationProp<RootStackParamList, 'RecursosAd'>;
type RegisterScreenRouteProp = RouteProp<RootStackParamList, 'RecursosAd'>;

type Props = {
  navigation: RegisterScreenNavigationProp;
};

const RecursosAd: React.FC<Props> = ({ navigation }) => {
 
  return (
    
    <ScrollView>
    <View style={styles.headerContainerNav}>
      <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
      <FontAwesome name="user-circle" size={28} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
      <Text style={styles.headerTitleNav }>A C C E S S L E A R N</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ListConfig')}>
      <Fontisto name="nav-icon-list-a" size={28} color="white" />
      </TouchableOpacity>
    </View>
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={[styles.headerTitle]}>Recursos Adicionales</Text>
        {/* <Image source={require('../../images/RobotDesarrollo.png')} style={styles.logoH4} /> */}
      </View>

      

      <View style={styles.menuContainer}>
        {/* Ejemplo de botón de menú */}
        <TouchableOpacity style={[styles.menuButton, {backgroundColor:"#F0F0F0"}]} onPress={() => navigation.navigate('Desarrollo')}>
        <Image source={require('../../../src/images/ContenidoDescargableN.png')} style={styles.menuIcon} />
        <Text style={[styles.menuText, {color: "#000000"}]}>Imprimibles</Text>          
        </TouchableOpacity>

        <TouchableOpacity style={[styles.menuButton, {backgroundColor:"#F0F0F0"}]}>
          <Image source={require('../../../src/images/Consejos.png')} style={styles.menuIcon} />
        <Text style={[styles.menuText, {color: "#ffffff"}]}>Consejos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.menuButton, {backgroundColor:"#43943A"}]}>
        <Text style={[styles.menuText, {color: "#ffffff"}]}>Personalización de actividades</Text>
          <Image source={require('../../../src/images/PersActividades.png')} style={styles.menuIcon} />
          
        </TouchableOpacity>

        
        
        {/* Repite este bloque para los otros botones */}
        {/* ... */}
      
        </View>
        </View>
    </ScrollView>
  );
};

export default RecursosAd;
