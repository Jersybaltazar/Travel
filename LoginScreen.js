import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TextInput, Dimensions } from "react-native";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
import Button from "./button";

const { width, height } = Dimensions.get("window");

export default function LoginScreen() {
  function SvgTop() {
    return (
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={375}
        height={589}
        fill="none"
      >
        <Path
          fill="#5AC8FA"
          fillOpacity={0.4}
          fillRule="evenodd"
          d="M359 0h16v589h-16V0ZM0 0h16v589H0V0Z"
          clipRule="evenodd"
        />
      </Svg>
    );
  }

  return (
    <View style={styles.maincontainer}>
      <View style={styles.containerSvg}>

      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Hola</Text>
        <Text style={styles.subTitle}>Inicia Sesion en tu cuenta</Text>
        <TextInput
          placeholder="jersybaltazar@gmail.com"
          style={styles.textInput}
        />
        <TextInput placeholder="contraseña" style={styles.textInput} />
        <Text style={styles.forgotpassword}>Olvidaste tu contraseña?</Text>

        <Button  />
        <Text style={styles.forgotpassword}>No tienes una cuenta ?</Text>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  maincontainer:{
    backgroundColor: '#f1f1f1',
    flex:1,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  containerSvg:{
    width:width,
    justifyContent: 'flex-start',
    alignItems:'center'
  },
  title: {
    fontSize: 80,
    color: "#34434D",
    fontWeight: "bold",
  },
  subTitle: {
    color: "grey",
    fontSize:20,
  },
  textInput:{
    padding:10,
    paddingStart:30,
    width:'80%',
    height:'50',
    marginTop:20,
    borderRadius:30,
    backgroundColor:'#fff',
  },
  forgotpassword:{
    fontSize:14,
    color:'gray',
    marginTop:20
  },
  button:{

  },
});
