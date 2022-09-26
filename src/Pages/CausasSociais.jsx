import React from "react";
import { View, Text, StyleSheet } from 'react-native'

export function CausasSociais(){
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>CausasSociais</Text>
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