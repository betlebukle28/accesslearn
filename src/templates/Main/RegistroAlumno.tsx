//RegistroAlumno
import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesome, Fontisto, AntDesign, Ionicons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { Table, Row } from 'react-native-table-component';
import styles from '../../css/styles';
import LocalHost from '../../controllers/UrlLocalHost';
import { use } from '../../../backend/router/router';
import { Picker } from '@react-native-picker/picker'; // SELCTBOX
// import PickerAndroid from './PickerAndroid';
// import PickerIOS from './PickerIOS';
// import PickerWindows from './PickerWindows';

declare module 'react-native-table-component';

// Definición del tipo Alumno fuera del componente
type Alumno = {
  nombre: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
};

type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
  ListConfig: undefined;
  Perfil: undefined;
  Desarrollo: undefined;
  ListAlumnos: undefined;
  RegistroAlumno: undefined;
};

type RegisterScreenNavigationProp = StackNavigationProp<RootStackParamList, 'RegistroAlumno'>;

type Props = {
  navigation: RegisterScreenNavigationProp;
};

const RegistroAlumno: React.FC<Props> = ({ navigation }) => {

    const [Nombre, setNombre] = useState('');
    const [ApellidoPaterno, setApellidoPaterno] = useState('');
    const [ApellidoMaterno, setApellidoMaterno] = useState('');
    const [TipoAprendizaje, setTipoAprendizaje] = useState('');
    const [Edad, setEdad] = useState('');
    

    const handleRegister = async () => {
        const url = LocalHost + '3000/api/registrar-alumno'; // URL de tu API
        
        // Bbjeto con los datos del usuario
        const AlumnoData = {
          Nombre: Nombre,
          ApellidoPaterno: ApellidoPaterno,
          ApellidoMaterno: ApellidoMaterno,
          TipoAprendizaje: TipoAprendizaje,
          
        };
      
        try {
          // Solicitud POST a la API
          const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(AlumnoData),
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
    <ScrollView>
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
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>Registrar Alumno</Text>
        </View>
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
        placeholder="Edad"
        value={Edad}
        onChangeText={setEdad}
      />
      <Picker
                selectedValue={TipoAprendizaje}
                style={styles.inputPicker}
                onValueChange={(itemValue, itemIndex) =>
                    setTipoAprendizaje(itemValue)
                }>
                <Picker.Item label="Seleccione la Estrategia de Aprendizaje" value="" />
                <Picker.Item label="Ritmo Lento" value="Ritmo Lento" />
                <Picker.Item label="Fatiga Rápida" value="Fatiga Rápida" />
                <Picker.Item label="Interés Limitado" value="Interés Limitado" />
                <Picker.Item label="Trabajo Independiente" value="Trabajo Independiente" />
                <Picker.Item label="Curiosidad Limitada" value="Curiosidad Limitada " />
                <Picker.Item label="Recuerdo Difícil" value="Recuerdo Difícil" />
                <Picker.Item label="Desorganización " value="Desorganización " />
                <Picker.Item label="Lentitud de Respuesta" value="Lentitud de Respuesta" />
                <Picker.Item label="Creatividad Baja" value="Creatividad Baja" />
                <Picker.Item label="Problemas de Generalización" value="Problemas de Generalización" />
                <Picker.Item label="Aprendizaje por Éxito" value="Aprendizaje por Éxito" />
                <Picker.Item label="Necesidad de Refuerzo" value="Necesidad de Refuerzo" />
                <Picker.Item label="Participación Activa" value="Participación Activa" />
                <Picker.Item label="Multitarea Difícil" value="Multitarea Difícil" />
            </Picker>
      
      
      <TouchableOpacity style={styles.buttonContainer} onPress={handleRegister}>
      <View style={[styles.button, styles.Success]}>
        <Text style={styles.buttonText}>Guardar</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('ListAlumnos')}>
      <View style={styles.buttonLineCancel}>
        <Text style={[styles.buttonTextLine, styles.TextDelete]}>Cancelar</Text>
        </View>
      </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default RegistroAlumno;
