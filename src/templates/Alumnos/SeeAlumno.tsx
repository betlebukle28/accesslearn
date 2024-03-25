import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert, Image  } from 'react-native';
import { FontAwesome, Fontisto, AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Table, Row } from 'react-native-table-component';
import styles from '../../css/styles';
import LocalHost from '../../controllers/UrlLocalHost';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationProp, RouteProp } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';



// Definición del tipo Alumno fuera del componente
type Alumno = {
  _id: string;
  nombreCompleto: string;
  edad: number;
  genero: string;
  Notas: string;

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
  SeeAlumno: { alumnoId: string };
  InfoAlumno: { alumnoId: string };
};

type SeeAlumnoScreenRouteProp = RouteProp<RootStackParamList, 'SeeAlumno'>;

type Props = {
  navigation: NavigationProp<RootStackParamList, 'SeeAlumno'>;
  route: SeeAlumnoScreenRouteProp;
};

const SeeAlumno = ({ route, navigation }: Props) => {
  const { alumnoId } = route.params;
  const [alumnoData, setAlumnoData] = useState<Alumno | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAlumnoData = async () => {
      // Asumiendo que tienes una función para obtener los datos del alumno por su ID
      const url = `${LocalHost}3000/api/alumno/${alumnoId}`;
      const token = await AsyncStorage.getItem('userToken');
      console.log('URL : ', url);
      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
    
        if (!response.ok) {
          throw new Error('No se pudo obtener la información del alumno');
        }
    
        const alumnoData = await response.json();
        setAlumnoData(alumnoData);
      } catch (error) {
        console.error('Error al obtener los datos del alumno:', error);
        Alert.alert('Error', 'No se pudo obtener la información del alumno');
      }
      setIsLoading(false);
    };
    fetchAlumnoData();
  }, [alumnoId]);

  if (!alumnoData) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 50 }}>
        <Image source={require('../../images/RobotDesarrollo.png')} style={{width: 200, height: 200}} />
        <Text>Cargando...</Text>
    </View>
    );
  }
  let urlAvatar: any = alumnoData.genero === 'M'
  ? require('../../images/AvatarH.png')
  : require('../../images/AvatarM.png');

  let urlAvatarInfo: any = alumnoData.genero === 'M'
  ? require('../../images/CabezaAvatarH.png')
  : require('../../images/CabezaAvatarM.png');

  let BackColor: any = alumnoData.genero === 'M'
  ? '#F0F9F9'
  : '#F9F0F0'

    const avatarImage = urlAvatar;
    const informationIcon = urlAvatarInfo;
    const activitiesIcon = require('../../images/Actividades.png');
    const moreIcon = require('../../images/MasOpciones.png');
    
   
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
          <Text style={styles.headerTitle}>Mi progreso</Text>
        </View>
      {/* Contenedor para la sección del avatar y los botones */}
      <View style={styles.contentRow}>
        {/* Contenedor del Avatar */}
        

        {/* Contenedor de los botones */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.menuButtonAl, {backgroundColor: BackColor}]} onPress={() => navigation.navigate('InfoAlumno', {
              alumnoId: alumnoData._id, // Pasa aquí el ID del alumno
               // Puedes pasar aquí más datos si es necesario
               })}>
            <Text style={styles.menuText}>Información</Text>
            <Image source={informationIcon} style={styles.menuIcon} />
            
          </TouchableOpacity>
          <TouchableOpacity style={[styles.menuButtonAl, {backgroundColor: BackColor}]} onPress={() => navigation.navigate('Desarrollo')}>
            <Text style={[styles.menuText, {paddingBottom: 10}]}>Actividades</Text>
            <Image source={activitiesIcon} style={[styles.menuIcon, {width: '70%'},{height: '70%'}, {marginBottom: 15}]} />
            
          </TouchableOpacity>
          <TouchableOpacity style={[styles.menuButtonAl, {backgroundColor: BackColor}]} onPress={() => navigation.navigate('Desarrollo')}>
            <Text style={[styles.menuText, {paddingBottom: 10}]}>Más</Text>
            <Image source={moreIcon} style={[styles.menuIcon, {width: '70%'},{height: '70%'}, {marginBottom: 15}]} />
            
          </TouchableOpacity>
        </View>
        <View style={styles.avatarContainer}>
          <Image source={avatarImage} style={styles.avatar} />
          <Text style={styles.profileName}>{alumnoData.nombreCompleto}</Text>
          <View style={[{ width: '80%', alignItems: 'center'}]}>
          <TouchableOpacity style={[styles.buttonContainer2, {width: '100%', marginTop: 0,}]} onPress={() => navigation.navigate('ListAlumnos')}>
            <View style={[styles.buttonLineCancel]}>
              <Text style={[styles.buttonTextLine, styles.TextDelete]}>Regresar</Text>
            </View>
           </TouchableOpacity>
           </View>
        </View>
        
      </View>
    </View>
    {/* FOOTER */}
    
      </ScrollView>
      );
  };

export default SeeAlumno;
