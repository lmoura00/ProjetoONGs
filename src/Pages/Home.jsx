import React from "react";
import {Text, TouchableOpacity, Image, View, StyleSheet, ScrollView, KeyboardAvoidingView} from 'react-native'

import LottieView from 'lottie-react-native'

import {useNavigation} from '@react-navigation/native'

export function Home(){

    const navigation = useNavigation()

    return(
        <KeyboardAvoidingView style={{flex:1}}>
            <View style={styles.container}>
                <Text style={styles.titulo}>Veja o que você pode ajudar!!</Text>
                <Text style={styles.subTitle}>E ajude ainda hoje!</Text>

                <View style={{flexDirection:'row'}} >
                    <TouchableOpacity style={styles.botao} onPress={()=>navigation.navigate('Animais')}>
                    <LottieView
                        source={require('../assets/dog2.json')}
                        autoPlay={true}
                        loop={true}
                        style={{
                            width:75,
                            height:75, 
                            backgroundColor:'#f9f9f9', 
                            borderRadius:25,
                            alignSelf:'center'
                        }}
                    />
                        <Text style={styles.textoBotao}>Animais</Text>
                    </TouchableOpacity>
                
                    <TouchableOpacity style={styles.botao} onPress={()=>navigation.navigate('MeioAmbiente')}>
                    <LottieView
                        source={require('../assets/67943-tree-green.json')}
                        autoPlay={true}
                        loop={true}
                        style={{
                            width:75,
                            height:75, 
                            backgroundColor:'#f9f9f9', 
                            borderRadius:25,
                            alignSelf:'center'
                        }}
                    />
                        <Text style={styles.textoBotao}>Meio ambiente</Text>
                    </TouchableOpacity>


                </View>

                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity style={styles.botao} onPress={()=>navigation.navigate('Idosos')}>
                    <LottieView
                        source={require('../assets/120595-helping-the-needy (1).json')}
                        autoPlay={true}
                        loop={true}
                        style={{
                            width:75,
                            height:75, 
                            backgroundColor:'#f9f9f9', 
                            borderRadius:25,
                            alignSelf:'center'
                        }}
                    />
                        <Text style={styles.textoBotao}>Idosos</Text>
                    </TouchableOpacity>
                
                    <TouchableOpacity style={styles.botao} onPress={()=>navigation.navigate('CausasSociais')}>
                        <LottieView
                            source={require('../assets/73386-problem-solving-team.json')}
                            autoPlay={true}
                            loop={true}
                            style={{
                                width:65,
                                height:65, 
                                backgroundColor:'#f9f9f9', 
                                borderRadius:25,
                                alignSelf:'center'
                            }}
                        />
                        <Text style={styles.textoBotao}>Causas Sociais</Text>
                    </TouchableOpacity>


                </View>

                <TouchableOpacity style={styles.botaoTodos} onPress={()=> navigation.navigate('Todos')}>
                        <LottieView
                            source={require('../assets/85643-loading-dots.json')}
                            autoPlay={true}
                            loop={true}
                            style={{
                                width:65,
                                height:65, 
                                backgroundColor:'#f9f9f9', 
                                borderRadius:25,
                                alignSelf:'center'
                            }}
                        />
                        <Text style={styles.textoBotao}>Todos</Text>
                    </TouchableOpacity>


                


            </View>
        </KeyboardAvoidingView>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    textoBotao:{
        fontSize:18,
        alignSelf:'center',
        textAlign:'center',
    },
    titulo:{
        fontFamily:"Roboto_700Bold",
        fontSize: 25,
        textAlign:'center',
    },
    subTitle:{
        fontFamily: 'Poppins_500Medium',
        fontSize:20,
        marginBottom:20,
    },
    botao:{
        width: 120,
        height:120,
        borderRadius: 12,
        backgroundColor:'#f9f9f9',
        elevation:15,
        justifyContent:'center',
        margin:20,
        
    },
    botaoTodos:{
        width: 220,
        height:120,
        borderRadius: 12,
        backgroundColor:'#f9f9f9',
        elevation:15,
        justifyContent:'center',
        margin:20,
        
    }
})