import React from "react";
import { StyleSheet, Text, View, TextInput, Dimensions ,TouchableOpacity} from "react-native";
import {LinearGradient} from 'expo-linear-gradient'

export default function Button (){
    return(
        <TouchableOpacity style={styles.container} >
               <LinearGradient
               //Button linear gradient
               colors={['rgba(0,0,0,0.8)', 'transparent']}
               start={{x:0,y:0}}end={{x:1,y:1}}
               style={styles.button}>
                <Text style={styles.text} >iniciar</Text>
               </LinearGradient>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{

        alignItems:'center',
        width:200,
        marginTop:'60',
    },
    button:{
        width:'80%',
        height:50,
        borderRadius:25,
        padding:10,
        alignItems:'center',
        justifyContent:'center',

    },
    text:{
        fontSize:14,
        color:'#fff',
        fontWeight:'bold'
    }
})
