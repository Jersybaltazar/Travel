import React from "react";
import {createMaterialBottomTabNavigator  } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";

//pantallas
import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";


const Tab = createMaterialBottomTabNavigator ();

function MyTabs(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Iniciar Sesión" component={LoginScreen} />
            <Tab.Screen name="Registrarse" component={RegisterScreen} />
        </Tab.Navigator>
    )
}


export default function Navigations(){
    return (
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    );
}