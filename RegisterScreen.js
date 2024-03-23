import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Alert } from "react-native";
const { width } = Dimensions.get("window");

export default function RegisterScreen() {
  const [name, setName] = useState(""); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const validateAndRegister = () => {
    if (!name || !email || !password) {
      Alert.alert("Error", "Por favor, rellena todos los campos.");
      return;
    }
  
    if (!email.includes('@')) {
      Alert.alert("Error", "Por favor, introduce un correo electrónico válido.");
      return;
    }
  
    // Aquí puedes añadir más validaciones según sea necesario
  
    // Llamada a la función de registro (integración con el backend)
    registerUser();
  };
  
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Registro</Text>

      <TextInput
        placeholder="Nombre completo"
        style={styles.textInput}
        accessibilityLabel="Nombre completo"
      />

      <TextInput
        placeholder="Correo electrónico"
        style={styles.textInput}
        keyboardType="email-address"
        accessibilityLabel="Correo electrónico"
      />

      <TextInput
        placeholder="Contraseña"
        style={styles.textInput}
        secureTextEntry={true}
        accessibilityLabel="Contraseña"
      />

      <TouchableOpacity style={styles.registerButton} onPress={() => {}}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f1f1f1",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#34434D",
    marginBottom: 20,
  },
  textInput: {
    padding: 10,
    paddingStart: 30,
    width: "80%",
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: "#fff",
  },
  registerButton: {
    marginTop: 20,
    backgroundColor: "#5AC8FA",
    borderRadius: 30,
    padding: 10,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
