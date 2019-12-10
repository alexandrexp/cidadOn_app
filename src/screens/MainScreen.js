import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity
} from "react-native";

import fundo from "../images/17981.png";
import logo from "../images/logobranco.png";

export default function MainScreen({ navigation }) {
  handleNavigation = screen => {
    if (screen !== "SigninScreen" && screen !== "SignupScreen") return;

    navigation.navigate(screen);
  };

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
          <TouchableOpacity
            style={styles.button1}
            onPress={() => handleNavigation("SignupScreen")}
          >
            <Text style={styles.buttonText}>Quero me cadastrar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button2}
            onPress={() => handleNavigation("SigninScreen")}
          >
            <Text style={styles.buttonText}>Já sou cadastrado</Text>
          </TouchableOpacity>
          <Text style={styles.label}>esqueci a senha</Text>
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
    // textDecorationLine: "underline"
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    paddingHorizontal: 20,
    fontSize: 16,
    color: "#444",
    height: 44,
    marginBottom: 20,
    borderRadius: 2
  },
  button1: {
    height: 42,
    backgroundColor: "rgb(68, 69, 63)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
    marginBottom: 20
  },
  button2: {
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
