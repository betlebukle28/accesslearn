import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
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
      fontSize: 35,
      fontWeight: 'bold',
      marginVertical: 20,
    },
    menuContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    menuContainerList: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      paddingLeft: 20,
      paddingBottom: 30,
      width: '100%',
    },
    menuButton: {
      width: '40%', // Aproximadamente para dos botones por fila
      aspectRatio: 1, // Para que los botones sean cuadrados
      margin: 10,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F0F0F0', // Un color de fondo para el botón
      borderRadius: 10, // Bordes redondeados
      // Sombra (opcional)
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    menuIcon: {
      width: '80%', // Ajusta según tus necesidades
      height: '80%', // Ajusta según tus necesidades
      resizeMode: 'contain',
    },
    menuText: {
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 10,
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
      grid: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 10, // Añade el padding horizontal que necesites
        paddingTop: 15, // Este es el padding típico para el status bar en iOS, ajusta según la plataforma y diseño
        paddingBottom: 1, // Añade el padding inferior que necesites
        width: '100%'
      },
      headerTitleNav: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
      },
      h1: {
        fontSize: 35,
        fontWeight: 'bold',
        marginVertical: 20,
      },
      h2: {
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: 20,
      },
      h3: {
        fontSize: 25,
        fontWeight: 'bold',
        marginVertical: 20,
      },
      h4: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 20,
      },
      TextCenter: {
        textAlign: 'center',
      },
      buttonContainer2: {
        width: '60%', // Ancho del contenedor del botón al 60% del ancho de la pantalla
        marginTop: 20,
      },
      buttonSmall: {
        width: '45%', // Ancho del contenedor del botón al 60% del ancho de la pantalla
        marginTop: 2,
        justifyContent: 'space-between',
      },
      button: {
        backgroundColor: '#3896BF', // Un azul atractivo para el botón de inicio de sesión
        padding: 15, // Espaciado interno para el botón
        borderRadius: 20, // Bordes redondeados para el botón
        alignItems: 'center', // Centra el texto del botón
      },
      buttonCenter: {
        //backgroundColor: '#3896BF', // Un azul atractivo para el botón de inicio de sesión
        padding: 15, // Espaciado interno para el botón
        borderRadius: 20, // Bordes redondeados para el botón
        alignItems: 'center', // Centra el texto del botón
        justifyContent: 'space-between',
        flexDirection: 'row',
      },
      buttonCenterCancel: {
        backgroundColor: '#E85A55', // Un azul atractivo para el botón de inicio de sesión
        padding: 15, // Espaciado interno para el botón
        borderRadius: 20, // Bordes redondeados para el botón
        alignItems: 'center', // Centra el texto del botón
        justifyContent: 'space-between',
        flexDirection: 'row',
      },
      Primary:{
        backgroundColor: '#3896BF', // AZUL 
      },
      Secondary:{
        backgroundColor: '#494949', // GRIS
      },
      Info:{
        backgroundColor: '#E85A55', // AZUL
      },
      Success: {
        backgroundColor: '#10B798',// VERDE
      },
      Warning: {
        backgroundColor: '#FB7E3E', // NARANJA
      },
      Delete: {
        backgroundColor: '#E85A55', // ROJO
      },
      Dark: {
        backgroundColor: '#000000', // NEGRO
      },
      Light: {
        backgroundColor: '#ffffff', // BLANCO
      },
      TextPrimary:{
        color: '#3896BF', // AZUL 
      },
      TextSecondary:{
        color: '#494949', // GRIS
      },
      TextInfo:{
        color: '#E85A55', // AZUL
      },
      TextSuccess: {
        color: '#10B798',// VERDE
      },
      TextWarning: {
        color: '#FB7E3E', // NARANJA
      },
      TextDelete: {
        color: '#E85A55', // ROJO
      },
      TextDark: {
        color: '#000000', // NEGRO
      },
      TextLight: {
        color: '#ffffff', // BLANCO
      },
      buttonText: {
        color: '#fff', // Texto blanco para que destaque en el botón azul
        fontSize: 18, // Tamaño de fuente que coincide con el de los inputs
        fontWeight: 'bold', // Texto en negrita para el botón
        textAlign: 'center',////////////////////////////////////////////
      },
      buttonTextLine: {
        color: '#3896BF', // Texto Negro para que destaque en el botón blanco
        fontSize: 16, // Tamaño de fuente que coincide con el de los inputs
        fontWeight: 'bold',
      },
      buttonLine: {
          backgroundColor: '#ffffff', // Un color de fondo claro para el botón
          padding: 15, // Espaciado interno para el botón
          borderRadius: 20, // Bordes redondeados para el botón
          alignItems: 'center', // Centra el texto del botón
          borderWidth: 2, // Ancho del borde de 2px
          borderColor: '#3896BF', // Color del borde azul
          borderStyle: 'solid', // Estilo del borde sólido
      },
      buttonLineCancel: {
        backgroundColor: '#ffffff', // Un color de fondo claro para el botón
        padding: 15, // Espaciado interno para el botón
        borderRadius: 20, // Bordes redondeados para el botón
        alignItems: 'center', // Centra el texto del botón
        borderWidth: 2, // Ancho del borde de 2px
        borderColor: '#FB7E3E', // Color del borde azul
        borderStyle: 'solid', // Estilo del borde sólido
        marginBottom: 20,
    },
      table: {
        marginTop: 20,
        textAlign: 'justify',
        width: '95%',
        
      },
      row: {
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        height: 50, 
        backgroundColor: '#F2F2F2',
        textAlign: 'justify',
      },
      rowHeader: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        height: 50, 
        backgroundColor: '#10B798',
        textAlign: 'center',
        fontSize: 10,
      },
      cell: {
        flex: 1,
        padding: 10,
      },
      input: {
        width: '100%',
        marginVertical: 10,
        padding: 15,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
      },
      TextSm: {
        width: '100%',
        marginVertical: 10,
        padding: 15,
        fontSize: 15,
      },
      errorText: {
        width: '100%',
        marginVertical: 10,
        padding: 15,
        fontSize: 15,
        color: '#E85A55',
      },
      inputPicker: {
        width: '100%',
        marginVertical: 10,
        padding: 15,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        marginBottom: 25,
      },
      radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
      },
      radioButtonSelected: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#10B798',
      },
      radioButtonUnselected: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#000',
        backgroundColor: '#fff',
      },
      radioButtonText: {
        marginLeft: 10,
      },
      text: {
        textAlign: 'center',
        color: 'black',
      
      },
      footer: {
        // Footer styling here
      },
      menu: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginBottom: 20,
      },
      profileSection: {
        alignItems: 'center',
      },
      // avatar: {
      //   width: 120,
      //   height: 120,
      //   borderRadius: 60,
      // },
      

      contentRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        width: '100%', // Asegúrate de que contentRow use todo el ancho
      },
      avatarContainer: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        flex: 1, // Ajusta esto según sea necesario
      },
      buttonContainer: {
        justifyContent: 'flex-end', // Esto alineará los botones a la derecha
        alignItems: 'center',
        flex: 1, // Ajusta esto para controlar el espacio disponible para los botones
      },
      ContainerF: {
        //justifyContent: 'flex-end', // Esto alineará los botones a la derecha
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: 20,
        width: '100%', // Asegúrate de que contentRow use todo el ancho
        flex: 1, // Ajusta esto para controlar el espacio disponible para los botones
      },
      avatar: {
        width: 150,
        height: 180,
        marginBottom: 8
      },
      profileName: {
        paddingBottom: 50,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
      },
      
      // profileName: {
      //   // ...estilos para el nombre del perfil
      // },
      menuButtonAl: {
        width: '80%', // Aproximadamente para dos botones por fila
        aspectRatio: 1, // Para que los botones sean cuadrados
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F0F0F0', // Un color de fondo para el botón
        borderRadius: 10, // Bordes redondeados
        // Sombra (opcional)
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,// Tus estilos actuales para menuButton
        marginRight: 10, // Añade margen derecho para separar los botones entre sí
      },
      footerTabsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
        backgroundColor: '#ececec', // Cambia esto según tu diseño
      },
      tabButton: {
        alignItems: 'center',
        justifyContent: 'center',
        // Agrega aquí estilos adicionales según necesites
      },
      tabButtonText: {
        color: '#007bff', // Cambia esto según tu diseño
        // Agrega aquí estilos adicionales según necesites
      },
  });

export default styles;
