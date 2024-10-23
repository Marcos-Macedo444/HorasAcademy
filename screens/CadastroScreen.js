import React, { useState } from 'react';
import { Image, View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CadastroScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const handleCadastro = async () => {
    if (senha === confirmarSenha) {
      try {
        const usuario = { nome, email, senha };
        await AsyncStorage.setItem('usuario', JSON.stringify(usuario));
        alert('Usuário cadastrado com sucesso!');
        navigation.navigate('Login'); // Redireciona para a tela de login após o cadastro
      } catch (error) {
        console.error('Erro ao salvar usuário:', error);
        alert('Erro ao cadastrar usuário. Tente novamente.');
      }
    } else {
      alert('As senhas não correspondem!');
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

      <View style={styles.card}>
        <Text style={styles.label}>Nome:</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome completo"
          value={nome}
          onChangeText={setNome}
        />

        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Senha:</Text>
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />

        <Text style={styles.label}>Confirma senha:</Text>
        <TextInput
          style={styles.input}
          placeholder="Confirme sua senha"
          secureTextEntry
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
        />

        <TouchableOpacity style={styles.registerButton} onPress={handleCadastro}>
          <Text style={styles.registerButtonText}>CADASTRAR</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity 
        style={styles.backButton} 
        onPress={() => navigation.goBack()} // Simplificando a lógica de voltar
      >
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

// (Estilos permanecem inalterados)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#86aaf0',
  },
  logoContainer: {
    marginBottom: 30, 
    alignItems: 'center',
  },
  logo: {
    width: 120,  
    height: 120,
    resizeMode: 'contain', 
  },
  card: {
    width: '75%',
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    elevation: 5,
    alignItems: 'center',
  },
  label: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 10,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 13,
    paddingHorizontal: 10,
    marginTop: 5,
    marginBottom: 10,
    backgroundColor: 'white',
  },
  registerButton: {
    marginTop: 20,
    backgroundColor: '#80A3FF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#fff',
  },
  registerButtonText: {
    color: 'white',
    fontSize: 18,
  },
  backButton: {
    marginTop: 20,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButtonText: {
    fontSize: 18,
    color: 'black',
  },
});
