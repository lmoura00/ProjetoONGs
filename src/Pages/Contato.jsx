import React from "react";
import { View, Text, StyleSheet } from 'react-native'

export function Contato(){
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Contato</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    titulo:{
        fontSize:15
    },
})