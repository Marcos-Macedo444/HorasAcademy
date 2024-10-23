import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';

export default function HomeScreen({ navigation }) {
  const handleBackPress = () => {
    Alert.alert(
      "Deseja voltar para o login?",
      "",
      [
        { text: "Não", onPress: () => console.log("Cancel Pressed"), style: "cancel" },
        { text: "Sim", onPress: () => navigation.navigate('Login') },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      {/* Título e logo */}
      <Text style={styles.pageTitle}>Olá, Fulano</Text>
      <Image source={require('../assets/logopreta.png')} style={styles.logo} />
      
      {/* Botões de navegação */}
      <View style={styles.buttonContainer}>
        <View style={styles.whiteBackground}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Eventos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Certificados</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Horas</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Botão Voltar */}
      <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#86aaf0', // Fundo azul
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  pageTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
    alignSelf: 'flex-end', // Alinha o texto à direita
    marginTop: 20, // Aumenta a distância do título para o topo da tela
  },
  logo: {
    width: 240, // Dobra a largura da imagem
    height: 240, // Dobra a altura da imagem
    marginBottom: 30,
    resizeMode: 'contain',
  },
  buttonContainer: {
    width: '100%',
    marginBottom: 20,
    alignItems: 'center',
  },
  whiteBackground: {
    backgroundColor: '#fff', // Fundo branco
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginVertical: 8,
    width: '80%',
    alignItems: 'center',
    borderWidth: 2, // Aumenta a espessura da borda
    borderColor: '#86aaf0', // Cor da borda
  },
  button: {
    backgroundColor: '#86aaf0', // Fundo azul
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginVertical: 8,
    width: '100%', // Aumenta a largura do botão
    borderWidth: 1,
    borderColor: 'white', // Borda branca
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#000',
  },
  backButton: {
    backgroundColor: '#fff', // Fundo branco
    paddingVertical: 15,
    paddingHorizontal: 60, // Aumenta a largura do botão "Voltar"
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'black',
    marginTop: 40, // Ajusta a distância do botão "Voltar" para os outros elementos
  },
  backButtonText: {
    fontSize: 18,
    color: 'black',
  },
});
