import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

//pantallas
import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const HomeStackNavigator = createNativeStackNavigator();
function MyStack() {
  return (
    <HomeStackNavigator.Navigator>
      <HomeStackNavigator.Screen
        name="Inicio"
        component={LoginScreen}
        options={{ title: "Iniciar Sesión" }}
      />
       <HomeStackNavigator.Screen
        name="Inicio"
        component={LoginScreen}
        options={{ title: "Iniciar Sesión" }}
      />
    </HomeStackNavigator.Navigator>
  );
}

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTinitColor: "read",
      }}
    >
      <Tab.Screen
        name="Iniciar Sesión"
        component={MyStack}
        options={{
          tabBarLabel: "red",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="Iniciar Sesión"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen name="Registrarse" component={RegisterScreen} />
    </Tab.Navigator>
  );
}

export default function Navigations() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
