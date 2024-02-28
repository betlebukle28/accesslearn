import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput, Button  } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import * as MailComposer from 'expo-mail-composer';
import { Linking } from 'react-native';

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
  const [bugDescription, setBugDescription] = useState('');

  const submitBugReport = () => {
    if (bugDescription.length > 0) {
      const email = 'rodrigonx98@gmail.com'; // reemplaza con tu correo de soporte
      const subject = encodeURIComponent('Reporte de Bug');
      const body = encodeURIComponent(bugDescription);
      const url = `mailto:${email}?subject=${subject}&body=${body}`;
  
      Linking.openURL(url);
    } else {
      console.log('Por favor, describe el error antes de enviar el reporte.');
    }
  };

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
        <Text style={[styles.headerTitle]}>Reportar un error</Text>
        <TextInput
          style={styles.input}
          onChangeText={setBugDescription}
          value={bugDescription}
          placeholder="Describe el error aquí"
        />
        <Button title="Enviar reporte" onPress={submitBugReport} />
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
    width: '80%', // Ancho del input al 80% del ancho de la pantalla
    marginBottom: 15,
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

export default Desarrollo;