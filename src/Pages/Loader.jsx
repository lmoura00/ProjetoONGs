import React from 'react'
import {View, ActivityIndicator, StyleSheet} from 'react-native'

export function Loader(){
    <View style={StyleSheet.container}>
        <ActivityIndicator size={'large'} color='grey'/>
    </View>
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})