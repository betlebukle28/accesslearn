import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import HomeScreen from './Home'; // Asume que tienes un componente para la pantalla de inicio
import ProfileScreen from './ListAlumnos'; // Asume que tienes un componente para la pantalla de perfil
import NotificationsScreen from '../Perfil/Perfil'; // Asume que tienes un componente para la pantalla de notificaciones

const Tab = createBottomTabNavigator();

const MyTabs = () => {
    //let iconName: React.ComponentProps<typeof Ionicons>['name'];
    let iconName: any;
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
            

          if (route.name === 'Home') {
            iconName = focused ? 'ios-home' : 'ios-home-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'ios-person' : 'ios-person-outline';
          } else if (route.name === 'Notifications') {
            iconName = focused ? 'ios-notifications' : 'ios-notifications-outline';
          }

          // Puedes devolver cualquier componente que desees aquí.
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
    </Tab.Navigator>
  );
};

export default MyTabs;
