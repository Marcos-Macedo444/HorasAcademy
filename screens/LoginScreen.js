import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async () => {
    try {
      const usuarioArmazenado = await AsyncStorage.getItem('usuario');
      const usuarioJson = usuarioArmazenado ? JSON.parse(usuarioArmazenado) : null;

      if (usuarioJson && usuarioJson.email === usuario && usuarioJson.senha === senha) {
        console.log('Login bem-sucedido');
        navigation.navigate('Home'); // Redireciona para a tela Home após o login bem-sucedido
      } else {
        alert('Usuário ou senha incorretos');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      alert('Erro ao fazer login. Tente novamente.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/logobranca.png')}
          style={styles.logo}
        />
      </View>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Usuário (Email)"
          placeholderTextColor="#555"
          value={usuario}
          onChangeText={setUsuario}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          placeholderTextColor="#555"
          value={senha}
          onChangeText={setSenha}
        />

        <TouchableOpacity onPress={() => console.log('Forgot Password')} style={styles.forgotPassword}>
          <Text style={styles.forgotText}>Esqueceu sua senha?</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.loginButton} 
          onPress={handleLogin}
        >
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
          <Text style={styles.signUpText}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#80A3FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  formContainer: {
    width: '70%',
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    borderRadius: 10,
    padding: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
    borderWidth: 3,
    borderColor: '#fff',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 11,
    borderWidth: 2,
    marginBottom: 15,
    paddingLeft: 10,
    height: 40,
    fontSize: 16,
    borderColor: '#000',
  },
  forgotPassword: {
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  forgotText: {
    color: '#333',
  },
  loginButton: {
    backgroundColor: '#80A3FF',
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
  },
  loginText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signUpText: {
    color: '#000',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default LoginScreen;
