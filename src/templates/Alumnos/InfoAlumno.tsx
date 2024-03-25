import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert, Image, TextInput  } from 'react-native';
import { FontAwesome, Fontisto, AntDesign, Ionicons } from '@expo/vector-icons';
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
  SePuedeSentar: string;
  Percepcionauditiva: string;
  Percepcionvisual: string;
  Discriminacion: string;
  Direccion: string;
  Coordinacion: string;
  Prension: string;
  Presion: string;
  Atencion: string;
  Asociacion: string;
  Seleccion: string;
  Clasificacion: string;
  Denominacion: string;
  Generalizacion: string;
  TipoAprendizaje: string;

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

type InfoAlumnoScreenRouteProp = RouteProp<RootStackParamList, 'InfoAlumno'>;

type Props = {
  navigation: NavigationProp<RootStackParamList, 'InfoAlumno'>;
  route: InfoAlumnoScreenRouteProp;
};

const InfoAlumno = ({ route, navigation }: Props) => {
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
          <Text style={styles.headerTitle}>Mi Información</Text>
        </View>
      {/* Contenedor para la sección del avatar y los botones */}
        <View style={[styles.avatarContainer, {alignItems: 'center'}]}>
          <Image source={avatarImage} style={[, styles.avatar ]} />
        </View>
        {/* Contenedor del Avatar */}
        {/* Contenedor de los botones */}
        <View style={styles.ContainerF}>          
            <Text style={[styles.menuText, {textAlign: 'left'}]}>Nombre Completo</Text>
            <TextInput style={styles.input} placeholder="Nombre" value={alumnoData.nombreCompleto}/>
            <Text style={[styles.menuText, {textAlign: 'left'}]}>Edad</Text>
            <TextInput style={styles.input} placeholder="Nombre" value={alumnoData.edad.toString()}/>
            <Text style={[styles.menuText, {textAlign: 'left'}]}>Genero </Text>
            <TextInput style={styles.input} placeholder="Nombre" value={alumnoData.genero}/>
            <Text style={[styles.menuText, {textAlign: 'left'}]}>Percepcion Auditiva </Text>
            <TextInput style={styles.input} placeholder="Nombre" value={alumnoData.Percepcionauditiva}/>
            <Text style={[styles.menuText, {textAlign: 'left'}]}>Percepcion Visual </Text>
            <TextInput style={styles.input} placeholder="Nombre" value={alumnoData.Percepcionvisual}/>
            <Text style={[styles.menuText, {textAlign: 'left'}]}>Discriminacion </Text>
            <TextInput style={styles.input} placeholder="Nombre" value={alumnoData.Discriminacion}/>
            <Text style={[styles.menuText, {textAlign: 'left'}]}>Direccion </Text>
            <TextInput style={styles.input} placeholder="Nombre" value={alumnoData.Direccion}/>
            <Text style={[styles.menuText, {textAlign: 'left'}]}>Coordinacion </Text>
            <TextInput style={styles.input} placeholder="Nombre" value={alumnoData.Coordinacion}/>
            <Text style={[styles.menuText, {textAlign: 'left'}]}>Prension </Text>
            <TextInput style={styles.input} placeholder="Nombre" value={alumnoData.Prension}/>
            <Text style={[styles.menuText, {textAlign: 'left'}]}>Presion </Text>
            <TextInput style={styles.input} placeholder="Nombre" value={alumnoData.Presion}/>
            <Text style={[styles.menuText, {textAlign: 'left'}]}>Atencion </Text>
            <TextInput style={styles.input} placeholder="Nombre" value={alumnoData.Atencion}/>
            <Text style={[styles.menuText, {textAlign: 'left'}]}>Asociacion </Text>
            <TextInput style={styles.input} placeholder="Nombre" value={alumnoData.Asociacion}/>
            <Text style={[styles.menuText, {textAlign: 'left'}]}>Seleccion </Text>
            <TextInput style={styles.input} placeholder="Nombre" value={alumnoData.Seleccion}/>
            <Text style={[styles.menuText, {textAlign: 'left'}]}>Clasificacion </Text>
            <TextInput style={styles.input} placeholder="Nombre" value={alumnoData.Clasificacion}/>
            <Text style={[styles.menuText, {textAlign: 'left'}]}>Denominacion </Text>
            <TextInput style={styles.input} placeholder="Nombre" value={alumnoData.Denominacion}/>
            <Text style={[styles.menuText, {textAlign: 'left'}]}>Generalizacion </Text>
            <TextInput style={styles.input} placeholder="Nombre" value={alumnoData.Generalizacion}/>
            <Text style={[styles.menuText, {textAlign: 'left'}]}>Notas </Text>
            <TextInput style={styles.input} placeholder="Nombre" value={alumnoData.Notas}/>
            <Text style={[styles.menuText, {textAlign: 'left'}]}>Tipo de Aprendizaje </Text>
            <TextInput style={styles.input} placeholder="Nombre" value={alumnoData.TipoAprendizaje}/>
            
            {/* <Text style={[styles.menuText, {paddingBottom: 10}]}>Actividades</Text>
            <Text style={[styles.menuText, {paddingBottom: 10}]}>Más</Text> */}
        </View>

        <TouchableOpacity style={[styles.buttonContainer2, {width: '80%', marginTop: 10,}]} onPress={() => navigation.navigate('InfoAlumno', {
                alumnoId: alumnoData._id, 
                })}>
                    <View style={[styles.button, styles.Success]}>
                        <Text style={styles.buttonText}>Guardar</Text>
                        </View>
                </TouchableOpacity>
        <TouchableOpacity style={[styles.buttonContainer2, {width: '80%', marginTop: 15,}]} onPress={() => navigation.navigate('SeeAlumno', { alumnoId: alumnoData._id,})}>
            <View style={styles.buttonLineCancel}>
                <Text style={[styles.buttonTextLine, styles.TextDelete]}>Cancelar</Text>
            </View>
        </TouchableOpacity>
        </View>
        <View style={styles.footer}>
            {/* Footer icons here */}
        </View>
        </ScrollView>
      );
  };

export default InfoAlumno;
