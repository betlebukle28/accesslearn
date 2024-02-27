import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome, Fontisto, AntDesign, Ionicons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { Table, Row } from 'react-native-table-component';
import styles from '../../css/styles';

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

type RegisterScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ListAlumnos'>;

type Props = {
  navigation: RegisterScreenNavigationProp;
};

const ListAlumnos: React.FC<Props> = ({ navigation }) => {
  const [tableData, setTableData] = useState<Alumno[]>([]);

  const tableHead = ['Nombre', 'Apellido Paterno', 'Apellido Materno', 'Edad', ''];
  const widthArr = [90, 90, 90, 90];

  const renderRows = () => {
    return tableData.length > 0 ? tableData.map((rowData, index) => (
      <Row
        key={index}
        data={[rowData.nombre, rowData.apellidoPaterno, rowData.apellidoMaterno, ' ']}
        widthArr={widthArr}
        style={styles.row}
        textStyle={{ textAlign: 'center' }}
      />
    )) : (
      <Text style={[styles.h2, styles.TextCenter, styles.TextSecondary]}>NO HAY REGISTROS DE ALUMNOS</Text>
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
          <Row data={tableHead} style={styles.rowHeader} textStyle={{ textAlign: 'center', fontSize: 14 }} />
          {renderRows()}
        </Table>
      </View>
    </ScrollView>
  );
};

export default ListAlumnos;
