import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PanoramaScreen from './screens/PanoramaScreen';
import EventoFormScreen from './screens/EventoFormScreen';
import RecomendacoesScreen from './screens/RecomendacoesScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Panorama" component={PanoramaScreen} />
        <Tab.Screen name="Registrar Evento" component={EventoFormScreen} />
        <Tab.Screen name="Recomendações" component={RecomendacoesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
