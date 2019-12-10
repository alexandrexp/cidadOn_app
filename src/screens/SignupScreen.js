import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity
} from "react-native";

import fundo from "../images/17981.png";
import logo from "../images/logobranco.png";

export default function SignupScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground source={fundo} style={{ width: "100%", height: "100%" }}>
        <View style={styles.logo}>
          <Image
            source={logo}
            style={{ width: 200, height: 120, marginTop: 80 }}
          />
        </View>
        <View style={styles.form}>
          <Text style={styles.labelGreen}>Cadastro</Text>
          <TextInput
            style={styles.input}
            placeholder="CPF"
            placeholderTextColor="white"
            autoCapitalize="characters"
            autoCorrect={false}
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="white"
            autoCapitalize="characters"
            autoCorrect={false}
          />
          <Text style={styles.label}>esqueci a senha</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  form: {
    alignSelf: "stretch",
    paddingHorizontal: 30,
    marginTop: 60
  },
  label: {
    fontWeight: "100",
    alignSelf: "center",
    color: "#FFF",
    marginBottom: 8
  },
  labelGreen: {
    fontWeight: "bold",
    color: "rgb(0, 184, 108)",
    marginBottom: 8,
    fontSize: 18,
    textAlign: "center"
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    paddingHorizontal: 20,
    fontSize: 16,
    color: "#FFF",
    height: 44,
    marginBottom: 20,
    borderRadius: 2
  },
  button: {
    height: 42,
    backgroundColor: "rgb(0, 184, 108)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
    marginBottom: 20
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16
  },
  logo: {
    alignItems: "center"
  }
});
