import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CadastroScreen from './screens/CadastroScreen';

import LoginScreen from './screens/LoginScreen'; // Caminho correto para LoginScreen
import UserList from './src/components/UserList'; // Caminho correto para UserList

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        
        {/* Tela de Login */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: 'Login',
            headerShown: false
          }}
        />

        {/* Tela de Cadastro */}
        <Stack.Screen
          name="Cadastro"
          component={CadastroScreen}
          options={{ title: 'Cadastro' }}
        />
        
        {/* Tela de Lista de Usuários */}
        <Stack.Screen
          name="UserList"
          component={UserList}
          options={{ title: 'Usuários' }} // Título da tela
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
