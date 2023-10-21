import React from 'react';
import { ImageBackground, TouchableOpacity, View, StyleSheet, Dimensions } from 'react-native';
import Logo from './assets/TelaFundoAbertura.png';
import { Text } from 'native-base';

const window = Dimensions.get('window');

export default function Abertura({ navigation }) {
  return (
    <ImageBackground source={Logo} style={{ ...styles.imagemDeFundo, width: window.width, height: window.height }}>
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.navigate('Home')}
      >
        <View style={styles.centeredView}>
          <Text style={styles.titulo}>Bem vindo a It's Poke</Text>
          <Text style={styles.subtitulo}>Toque na tela para começar seu pedido!</Text>
        </View>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imagemDeFundo: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 34,
    fontWeight: "900",
    color: "#fff",
    padding: 10,
    margin: -10,
    textShadowColor: 'black',
    textShadowOffset: { width: -10, height: 3 },
    textShadowRadius: 10,
    marginBottom: 2
  },
  subtitulo: {
    fontSize: 20,
    fontWeight: "900",
    color: "#fff",
    padding: 10,
    margin: -10,
    textShadowColor: 'black',
    textShadowOffset: { width: -10, height: 3 },
    textShadowRadius: 10,
  },
});
