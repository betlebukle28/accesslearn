//RegistroAlumno
import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, Button  } from 'react-native';
import { FontAwesome, Fontisto, AntDesign, Ionicons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { Table, Row } from 'react-native-table-component';
import styles from '../../css/styles';
import LocalHost from '../../controllers/UrlLocalHost';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Picker } from '@react-native-picker/picker'; // SELCTBOX
// import PickerAndroid from './PickerAndroid';
// import PickerIOS from './PickerIOS';
// import PickerWindows from './PickerWindows';

declare module 'react-native-table-component';

// Definición del tipo Alumno fuera del componente
type Alumno = {
  nombreCompleto: string;
  edad: Number;
  genero: string;
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
  Notas: string;
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
};

type RegisterScreenNavigationProp = StackNavigationProp<RootStackParamList, 'RegistroAlumno'>;

type Props = {
  navigation: RegisterScreenNavigationProp;
};

type RadioButtonProps = {
  label: string;
  value: string;
  checked: boolean;
  onCheck: (value: string) => void;
};

const RadioButton: React.FC<RadioButtonProps> = ({ label, value, checked, onCheck }) => {
  return (
    <TouchableOpacity style={styles.radioButton} onPress={() => onCheck(value)}>
      <View style={checked ? styles.radioButtonSelected : styles.radioButtonUnselected} />
      <Text style={styles.radioButtonText}>{label}</Text>
    </TouchableOpacity>
  );
};

const RegistroAlumno: React.FC<Props> = ({ navigation }) => {

 
  const [isDisabled, setIsDisabled] = useState<boolean>(false); // Nuevo estado para manejar la habilitación

 

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
    // setSePuedeSentar(false);
    const handleRadioChange = (value: string) => {
      setSelectedValue(value);
      setIsDisabled(value === 'No');
      if (value === 'No')
      {
        setSePuedeSentar(false);
      }
      else if ( value === 'Si')
      {
        setSePuedeSentar(true);
      }
    };

    const handleRegister = async () => {
        const url = LocalHost + '3000/api/registrar-alumno'; // URL de tu API
        const token = await AsyncStorage.getItem('userToken');
        // Bbjeto con los datos del usuario
        const AlumnoData = {
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
          console.log(token);
          const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(AlumnoData),
          });
          // console.log(token);

          const json = await response.json();
          
          if (response.status === 200) {
            console.log('Usuario registrado con éxito:', json);
            Alert.alert("Usuario registrado con éxito: ", json.nombreCompleto);
            // Navegar a la pantalla de Login
            navigation.navigate('ListAlumnos');
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
          <Text style={styles.headerTitle}>Registrar Alumno</Text>
        </View>
      <TextInput
        style={styles.input}
        placeholder="Nombre Completo"
        value={nombreCompleto}
        onChangeText={setnombreCompleto}
      />
      <TextInput
        style={styles.input}
        placeholder="Edad"
        value={edad}
        onChangeText={setedad}
      />
      <TextInput
        style={styles.input}
        placeholder="Genero"
        value={genero}
        onChangeText={setgenero}
      />
      <Text style={[styles.h4, styles.TextSm]}>Se puede Sentar? </Text>
      <View style={styles.input}>

      {['Si', 'No'].map(option => (
        <RadioButton
          key={option}
          label={option}
          value={option}
          checked={selectedValue === option}
          onCheck={handleRadioChange}
        />
      ))}
    </View>
    {isDisabled && (
        <Text style={styles.errorText}>
          Error con el seguimiento de registro:
          Este aplicación usa el Método Troncoso, por lo que es indispensable que el Alumno pueda sentarse
        </Text>
      )}
      <Text style={[styles.h4, styles.TextSm]}>Percepcion Auditiva</Text>
      <TextInput
        style={styles.input}
        placeholder="Porcentaje de Percepcion Auditiva"
        value={Percepcionauditiva}
        onChangeText={setPercepcionauditiva}
        editable={!isDisabled} // Deshabilitar condicionalmente
      />
      <Text style={[styles.h4, styles.TextSm]}>Percepcion Visual</Text>
      <TextInput
        style={styles.input}
        placeholder="Porcentaje de Percepcion Visual"
        value={Percepcionvisual}
        onChangeText={setPercepcionvisual}
        editable={!isDisabled} // Deshabilitar condicionalmente
        
      />
      <Text style={[styles.h4, styles.TextSm]}>Discriminación</Text>
      <TextInput
        style={styles.input}
        placeholder="Porcentaje de Discriminación"
        value={Discriminacion}
        onChangeText={setDiscriminacion}
        editable={!isDisabled} // Deshabilitar condicionalmente
        
      />
      <Text style={[styles.h4, styles.TextSm]}>Direccion</Text>
      <TextInput
        style={styles.input}
        placeholder="Porcentaje de Direccion"
        value={Direccion}
        onChangeText={setDireccion}
        editable={!isDisabled} // Deshabilitar condicionalmente
        
      />
      <Text style={[styles.h4, styles.TextSm]}>Coordinación</Text>
      <TextInput
        style={styles.input}
        placeholder="Porcentaje de Coordinación"
        value={Coordinacion}
        onChangeText={setCoordinacion}
        editable={!isDisabled} // Deshabilitar condicionalmente
        
      />
      <Text style={[styles.h4, styles.TextSm]}>Prension</Text>
      <TextInput
        style={styles.input}
        placeholder="Porcentaje de Prension"
        value={Prension}
        onChangeText={setPrension}
        editable={!isDisabled} // Deshabilitar condicionalmente
        
      />
      <Text style={[styles.h4, styles.TextSm]}>Presion</Text>
      <TextInput
        style={styles.input}
        placeholder="Porcentaje de Presion"
        value={Presion}
        onChangeText={setPresion}
        editable={!isDisabled} // Deshabilitar condicionalmente
        
      />
      <Text style={[styles.h4, styles.TextSm]}>Atención</Text>
      <TextInput
        style={styles.input}
        placeholder="Porcentaje de Atención"
        value={Atencion}
        onChangeText={setAtencion}
        editable={!isDisabled} // Deshabilitar condicionalmente
        
      />
      <Text style={[styles.h4, styles.TextSm]}>Asosiación</Text>
      <TextInput
        style={styles.input}
        placeholder="Porcentaje de Asosciación"
        value={Asociacion}
        onChangeText={setAsociacion}
        editable={!isDisabled} // Deshabilitar condicionalmente
        
      />
      <Text style={[styles.h4, styles.TextSm]}>Seleccion</Text>
      <TextInput
        style={styles.input}
        placeholder="Porcentaje de Seleccion"
        value={Seleccion}
        onChangeText={setSeleccion}
        editable={!isDisabled} // Deshabilitar condicionalmente
        
      />
      <Text style={[styles.h4, styles.TextSm]}>Clasificacion</Text>
      <TextInput
        style={styles.input}
        placeholder="Porcentaje de Clasificacion"
        value={Clasificacion}
        onChangeText={setClasificacion}
        editable={!isDisabled} // Deshabilitar condicionalmente
        
      />
      <Text style={[styles.h4, styles.TextSm]}>Demoninación</Text>
      <TextInput
        style={styles.input}
        placeholder="Porcentaje de Denominación"
        value={Denominacion}
        onChangeText={setDenominacion}
        editable={!isDisabled} // Deshabilitar condicionalmente
        
      />
      <Text style={[styles.h4, styles.TextSm]}>Generalización</Text>
      <TextInput
        style={styles.input}
        placeholder="Porcentaje de Generalización"
        value={Generalizacion}
        onChangeText={setGeneralizacion}
        editable={!isDisabled} // Deshabilitar condicionalmente
        
      />
      <Text style={[styles.h4, styles.TextSm]}>Notas (OPCIONAL)</Text>
      <TextInput
        style={styles.input}
        placeholder="Notas (OPCIONAL)"
        value={Notas}
        onChangeText={setNotas}
        editable={!isDisabled} // Deshabilitar condicionalmente
        
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
      <TouchableOpacity style={styles.buttonContainer2} onPress={handleRegister}>
      <View style={[styles.button, styles.Success]}>
        <Text style={styles.buttonText}>Guardar</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContainer2} onPress={() => navigation.navigate('ListAlumnos')}>
      <View style={styles.buttonLineCancel}>
        <Text style={[styles.buttonTextLine, styles.TextDelete]}>Cancelar</Text>
        </View>
      </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default RegistroAlumno;
