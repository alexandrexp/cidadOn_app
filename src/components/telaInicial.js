import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TextInput, TouchableOpacity } from 'react-native';

import fundo from '../images/17981.png';
import logo from '../images/logobranco.png';

export default function TelaInicial() {
  return (
    <View style={styles.container}>
      <ImageBackground source={fundo} style={{ width: '100%', height: '100%' }}>
        <View style={styles.logo}>
          <Image source={logo} style={{ width: 200, height: 120, marginTop: 80 }} />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    alignItems: 'center',
    marginTop: 160,
  },
});
