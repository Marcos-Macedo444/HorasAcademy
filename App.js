import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CadastroScreen from './screens/CadastroScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen'; // Importando a nova tela

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        
        <Stack.Screen
          name="Cadastro"
          component={CadastroScreen}
          options={{ title: 'Cadastro' }}
        />

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home', headerShown: false }} 
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
