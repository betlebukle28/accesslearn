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
  edad: string;
  genero: string;
  Notas: string;
  SePuedeSentar: boolean;
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

  const [selectedValue, setSelectedValue] = useState<string>('');

    const [nombreCompleto, setnombreCompleto] = useState('');
    const [edad, setedad] = useState('');
    const [genero, setgenero] = useState('');
    const [SePuedeSentar, setSePuedeSentar] = useState<boolean>(true);
    const [Percepcionauditiva, setPercepcionauditiva] = useState('');
    const [Percepcionvisual, setPercepcionvisual] = useState('');
    const [Discriminacion, setDiscriminacion] = useState('');
    const [Direccion, setDireccion] = useState('');
    const [Coordinacion, setCoordinacion] = useState('');
    const [Prension, setPrension] = useState('');
    const [Presion, setPresion] = useState('');
    const [Atencion, setAtencion] = useState('');
    const [Asociacion, setAsociacion] = useState('');
    const [Seleccion, setSeleccion] = useState('');
    const [Clasificacion, setClasificacion] = useState('');
    const [Denominacion, setDenominacion] = useState('');
    const [Generalizacion, setGeneralizacion] = useState('');
    const [Notas, setNotas] = useState('');
    const [TipoAprendizaje, setTipoAprendizaje] = useState('');

    
    const handleUpdate = async () => {
      console.log('Alumno ID: ', alumnoId);
      const url = `${LocalHost}3000/api/alumno/actualizar/${alumnoId}`; // URL de tu API
      console.log('url: ', url);
      const token = await AsyncStorage.getItem('userToken');
      console.log('Token: ', token);
      // Bbjeto con los datos del usuario
      const AlumnoUpdateData = {
        nombreCompleto: nombreCompleto,
        edad: edad,
        genero: genero,
        SePuedeSentar: SePuedeSentar,
        Percepcionauditiva: Percepcionauditiva,
        Percepcionvisual: Percepcionvisual,
        Discriminacion: Discriminacion,
        Direccion: Direccion,
        Coordinacion: Coordinacion,
        Prension: Prension,
        Presion: Presion,
        Atencion: Atencion,
        Asociacion: Asociacion,
        Seleccion: Seleccion,
        Clasificacion: Clasificacion,
        Denominacion: Denominacion,
        Generalizacion: Generalizacion,
        Notas: Notas,
        TipoAprendizaje: TipoAprendizaje
      };
    
      try {
        // Solicitud POST a la API
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify(AlumnoUpdateData),
        });
        // console.log(token);
        console.log('antes del JSON: ');
        const json = await response.json();
        console.log('JSON: ', json);
        if (response.status === 200) {
          console.log('Alumno Actualizado con éxito:', json);
          Alert.alert("Alumno Actualizado con éxito: ", json.nombreCompleto);
          
          navigation.navigate('SeeAlumno', {
              alumnoId: alumnoId, // Pasa aquí el ID del alumno
               // Puedes pasar aquí más datos si es necesario
               });
       
          
        } else {
          console.log('Error al actualizar:', json);
          Alert.alert('Error','Error al actualizar el alumno');
          
        }
      } catch (error) {
        console.error('Error de solicitud:', error);
      }
    };

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
        setnombreCompleto(alumnoData.nombreCompleto);
        setedad(alumnoData.edad);
        setgenero(alumnoData.genero);
        setSePuedeSentar(alumnoData.SePuedeSentar);
        setPercepcionauditiva(alumnoData.Percepcionauditiva);
        setPercepcionvisual(alumnoData.Percepcionvisual);
        setDiscriminacion(alumnoData.Discriminacion);
        setDireccion(alumnoData.Direccion);
        setCoordinacion(alumnoData.Coordinacion);
        setPrension(alumnoData.Prension);
        setPresion(alumnoData.Presion);
        setAtencion(alumnoData.Atencion);
        setAsociacion(alumnoData.Asociacion);
        setSeleccion(alumnoData.Seleccion);
        setClasificacion(alumnoData.Clasificacion);
        setDenominacion(alumnoData.Denominacion);
        setGeneralizacion(alumnoData.Generalizacion);
        setNotas(alumnoData.Notas);
        setTipoAprendizaje(alumnoData.TipoAprendizaje);
      } catch (error) {
        console.error('Error al obtener los datos del alumno:', error);
        Alert.alert('Error', 'No se pudo obtener la información del alumno');
      }
      setIsLoading(false);
      if (alumnoData) {
        setnombreCompleto(alumnoData.nombreCompleto);
        setedad(alumnoData.edad);
        setgenero(alumnoData.genero);
        setSePuedeSentar(alumnoData.SePuedeSentar);
        setPercepcionauditiva(alumnoData.Percepcionauditiva);
        setPercepcionvisual(alumnoData.Percepcionvisual);
        setDiscriminacion(alumnoData.Discriminacion);
        setDireccion(alumnoData.Direccion);
        setCoordinacion(alumnoData.Coordinacion);
        setPrension(alumnoData.Prension);
        setPresion(alumnoData.Presion);
        setAtencion(alumnoData.Atencion);
        setAsociacion(alumnoData.Asociacion);
        setSeleccion(alumnoData.Seleccion);
        setClasificacion(alumnoData.Clasificacion);
        setDenominacion(alumnoData.Denominacion);
        setGeneralizacion(alumnoData.Generalizacion);
        setNotas(alumnoData.Notas);
        setTipoAprendizaje(alumnoData.TipoAprendizaje);
      }
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
            <TextInput style={styles.input} placeholder="Nombre" value={nombreCompleto} onChangeText={text => setnombreCompleto(text)}/>
            <Text style={[styles.menuText, {textAlign: 'left'}]}>Edad</Text>
            <TextInput style={styles.input} placeholder="Edad" value={edad} onChangeText={text => setedad(text)}/>
            <Text style={[styles.menuText, {textAlign: 'left'}]}>Genero </Text>
            <TextInput style={styles.input} placeholder="Genero" value={genero} onChangeText={text => setgenero(text)}/>
            <Text style={[styles.menuText, {textAlign: 'left'}]}>Percepcion Auditiva </Text>
            <TextInput style={styles.input} placeholder="Percepcion Auditiva" value={Percepcionauditiva} onChangeText={text => setPercepcionauditiva(text)}/>
            <Text style={[styles.menuText, {textAlign: 'left'}]}>Percepcion Visual </Text>
            <TextInput style={styles.input} placeholder="Percepcion Visual" value={Percepcionvisual} onChangeText={text => setPercepcionvisual(text)}/>
            <Text style={[styles.menuText, {textAlign: 'left'}]}>Discriminacion </Text>
            <TextInput style={styles.input} placeholder="Discriminacion" value={Discriminacion} onChangeText={text => setDiscriminacion(text)}/>
            <Text style={[styles.menuText, {textAlign: 'left'}]}>Direccion </Text>
            <TextInput style={styles.input} placeholder="Direccion" value={Direccion} onChangeText={text => setDireccion(text)}/>
            <Text style={[styles.menuText, {textAlign: 'left'}]}>Coordinacion </Text>
            <TextInput style={styles.input} placeholder="Coordinacion" value={Coordinacion} onChangeText={text => setCoordinacion(text)}/>
            <Text style={[styles.menuText, {textAlign: 'left'}]}>Prension </Text>
            <TextInput style={styles.input} placeholder="Prension" value={Prension} onChangeText={text => setPrension(text)}/>
            <Text style={[styles.menuText, {textAlign: 'left'}]}>Presion </Text>
            <TextInput style={styles.input} placeholder="Presion" value={Presion} onChangeText={text => setPresion(text)}/>
            <Text style={[styles.menuText, {textAlign: 'left'}]}>Atencion </Text>
            <TextInput style={styles.input} placeholder="Atencion" value={Atencion} onChangeText={text => setAtencion(text)}/>
            <Text style={[styles.menuText, {textAlign: 'left'}]}>Asociacion </Text>
            <TextInput style={styles.input} placeholder="Asociacion" value={Asociacion} onChangeText={text => setAsociacion(text)}/>
            <Text style={[styles.menuText, {textAlign: 'left'}]}>Seleccion </Text>
            <TextInput style={styles.input} placeholder="Seleccion" value={Seleccion} onChangeText={text => setSeleccion(text)}/>
            <Text style={[styles.menuText, {textAlign: 'left'}]}>Clasificacion </Text>
            <TextInput style={styles.input} placeholder="Clasificacion" value={Clasificacion} onChangeText={text => setClasificacion(text)}/>
            <Text style={[styles.menuText, {textAlign: 'left'}]}>Denominacion </Text>
            <TextInput style={styles.input} placeholder="Denominacion" value={Denominacion} onChangeText={text => setDenominacion(text)}/>
            <Text style={[styles.menuText, {textAlign: 'left'}]}>Generalizacion </Text>
            <TextInput style={styles.input} placeholder="Generalizacion" value={Generalizacion} onChangeText={text => setGeneralizacion(text)}/>
            <Text style={[styles.menuText, {textAlign: 'left'}]}>Notas </Text>
            <TextInput style={styles.input} placeholder="Notas" value={Notas} onChangeText={text => setNotas(text)}/>
            <Text style={[styles.menuText, {textAlign: 'left'}]}>Tipo de Aprendizaje </Text>
            <TextInput style={styles.input} placeholder="Tipo de Aprendizaje" value={TipoAprendizaje} onChangeText={text => setTipoAprendizaje(text)}/>
            
            {/* <Text style={[styles.menuText, {paddingBottom: 10}]}>Actividades</Text>
            <Text style={[styles.menuText, {paddingBottom: 10}]}>Más</Text> */}
        </View>

        <TouchableOpacity style={[styles.buttonContainer2, {width: '80%', marginTop: 10,}]} onPress={() => handleUpdate()}>
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
