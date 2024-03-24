import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert  } from 'react-native';
import { FontAwesome, Fontisto, AntDesign, Ionicons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { Table, Row } from 'react-native-table-component';
import styles from '../../css/styles';
import LocalHost from '../../controllers/UrlLocalHost';
import AsyncStorage from '@react-native-async-storage/async-storage';

declare module 'react-native-table-component';

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
};

type RegisterScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ListAlumnos'>;

type Props = {
  navigation: RegisterScreenNavigationProp;
};

const ListAlumnos: React.FC<Props> = ({ navigation }) => {
  const [tableData, setTableData] = useState<Alumno[]>([]);

  const tableHead = ['Nombre', 'Notas', 'Accion'];
  //const widthArr = [74, 50, 74, 74, 74];

  useEffect(() => {
  cargarAlumnos();

}, []);

const cargarAlumnos = async () => {
  const url = LocalHost + '3000/api/list-alumnos';
  const token = await AsyncStorage.getItem('userToken');
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    const data = await response.json();
    console.log('Data received:', data);

    if (!response.ok) {
      throw new Error(data.message || 'Error al obtener los alumnos');
    }

    

    // Asegúrate de que la respuesta tiene la estructura esperada y contiene los alumnos
    if (data && data.result && data.result.alumnos) {
      setTableData(data.result.alumnos);
    } else {
      throw new Error('No se encontraron alumnos en la respuesta');
    }
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Ocurrió un error desconocido';
    Alert.alert('Error', errorMessage);
  }
};


  const renderRows = () => {
    return tableData.length > 0 ? tableData.map((alumno, index) => (
      <Row
        key={alumno._id}
        data={[
          alumno.nombreCompleto,
          alumno.Notas,
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>
          <TouchableOpacity  onPress={() => navigation.navigate('SeeAlumno', {
              alumnoId: alumno._id, // Pasa aquí el ID del alumno
               // Puedes pasar aquí más datos si es necesario
               })}>
            <FontAwesome name="search" size={20} color="orange" />
          </TouchableOpacity>
          <TouchableOpacity  onPress={() => eliminarAlumno(alumno._id)}>
            <FontAwesome name="trash" size={20} color="red" />
          </TouchableOpacity>
        </View>

        ]}
       // widthArr={widthArr}
        style={styles.row}
        textStyle={styles.text} // Asegúrate de que styles.text sea un objeto, no un array
      />
    )) : (
      <Text style={styles.h2}>NO HAY REGISTROS DE ALUMNOS</Text>
    );
  };
  

  const consultarAlumno = async (id: string) => {
    console.log('Consultar detalles del alumno con ID:', id);
    const url = LocalHost + '3000/api/see-alumno';
    const token = await AsyncStorage.getItem('userToken');
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
     // navigation.navigate('SeeAlumno');
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Ocurrió un error desconocido';
      Alert.alert('Error', errorMessage);
    }
  };

  const eliminarAlumno = (id: string) => {
    // Lógica para eliminar el alumno
    Alert.alert(
      "Eliminar Alumno",
      "¿Estás seguro de que quieres eliminar este alumno?",
      [
        {
          text: "Cancelar",
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log('Eliminar alumno con ID:', id) }
      ]
    );
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
          <Text style={styles.headerTitle}>Lista de niños</Text>
        </View>
        <View style={styles.grid}>
          {/* Botón de regreso */}
          <TouchableOpacity style={styles.buttonSmall} onPress={() => navigation.navigate('Home')}>
            <View style={styles.buttonCenterCancel}>
              <AntDesign name="left" size={24} color="white" />
              <Text style={styles.buttonText}>Regresar</Text>
            </View>
          </TouchableOpacity>
          {/* Botón para agregar un nuevo alumno */}
          <TouchableOpacity style={styles.buttonSmall} onPress={() => navigation.navigate('RegistroAlumno')}>
            <View style={[styles.buttonCenter, styles.Success]}>
              <Ionicons name="add-circle" size={24} color="white" />
              <Text style={styles.buttonText}>Agregar Niño</Text>
            </View>
          </TouchableOpacity>
        </View>
        {/* Tabla de alumnos */}
        <Table style={styles.table} borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
          <Row data={tableHead} style={styles.rowHeader} textStyle={styles.text}/>
          {renderRows()}
        </Table>
      </View>
    </ScrollView>
  );
};

export default ListAlumnos;
