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

type RegisterScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Perfil'>;
type RegisterScreenRouteProp = RouteProp<RootStackParamList, 'Perfil'>;

type Props = {
  navigation: RegisterScreenNavigationProp;
};

const Perfil: React.FC<Props> = ({ navigation }) => {
 
  return (
    
    <ScrollView>
      <View>
      <View style={styles.headerContainerNav}>
            <TouchableOpacity onPress={() => navigation.navigate('Desarrollo')}>
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
        <TouchableOpacity style={[styles.buttonContainer2, {width: '80%', marginTop: 15,}]} onPress={() => navigation.navigate('Home')}>
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


export default Perfil;
