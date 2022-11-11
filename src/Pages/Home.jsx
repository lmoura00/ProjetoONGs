import React from "react";
import {Text, TouchableOpacity, Image, View, StyleSheet, ScrollView, KeyboardAvoidingView} from 'react-native'

import LottieView from 'lottie-react-native'
import { LinearGradient } from "expo-linear-gradient";
import {useNavigation} from '@react-navigation/native'

export function Home(){

    const navigation = useNavigation()

    return(
        <KeyboardAvoidingView style={{flex:1}}>
            <View style={styles.container}>
                <Text style={styles.titulo}>Conheça mais sobre o projeto!!!</Text>

                <View style={{flexDirection:'row'}} >
                        <TouchableOpacity style={styles.botao} onPress={()=>navigation.navigate('Instagram')}>
                    <LinearGradient colors={['#fff', '#ebebed', '#cfd0d1']} style={styles.gradiente}  >
                        <LottieView
                            source={require('../assets/69057-instagram.json')}
                            autoPlay={true}
                            loop={true}
                            style={{
                                width:75,
                                height:75,  
                                borderRadius:25,
                                alignSelf:'center'
                            }}
                        />
                            <Text style={styles.textoBotao}>Instagram</Text>
                    </LinearGradient>
                        </TouchableOpacity>
                
                    <TouchableOpacity style={styles.botao} onPress={()=>navigation.navigate('PlayStore')}>
                    <LinearGradient colors={['#fff', '#ebebed', '#cfd0d1']} style={styles.gradiente}  >
                    <LottieView
                        source={require('../assets/4529-playstore.json')}
                        autoPlay={true}
                        loop={true}
                        style={{
                            width:75,
                            height:75, 
                            borderRadius:25,
                            alignSelf:'center'
                        }}
                    />
                        <Text style={styles.textoBotao}>Play Store</Text>
                        </LinearGradient>
                    </TouchableOpacity>


                </View>


                <TouchableOpacity style={styles.botaoTodos} onPress={()=> navigation.navigate('Contato')}>
                <LinearGradient colors={['#fff', '#ebebed', '#cfd0d1']} style={styles.botaoTodosGradiente} >
                        <LottieView
                            source={require('../assets/74498-call-center-support-lottie-animation.json')}
                            autoPlay={true}
                            loop={true}
                            style={{
                                width:65,
                                height:65, 
                                borderRadius:25,
                                alignSelf:'center'
                            }}
                        />
                        <Text style={styles.textoBotao}>Contato</Text>
                    </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botaoTodos} onPress={()=> navigation.navigate('Todos')}>
                    <LinearGradient colors={['#fff', '#ebebed', '#cfd0d1']} style={styles.botaoTodosGradiente} >
                        <LottieView
                            source={require('../assets/75746-about-us.json')}
                            autoPlay={true}
                            loop={true}
                            style={{
                                width:65,
                                height:65,  
                                borderRadius:25,
                                alignSelf:'center'
                            }}
                        />
                        <Text style={styles.textoBotao}>Sobre a gente</Text>
                    </LinearGradient>
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
        shadowColor:'grey'
        
    },
    gradiente:{
        width: 120,
        height:120,
        borderRadius: 12,
        justifyContent:'center',
 
        
    },
    botaoTodos:{
        width: 220,
        height:120,
        borderRadius: 12,
        backgroundColor:'#f9f9f9',
        elevation:15,
        justifyContent:'center',
        margin:20,
        
    },
    botaoTodosGradiente:{
        width: 220,
        height:120,
        borderRadius: 12,
        justifyContent:'center',        
    }
})