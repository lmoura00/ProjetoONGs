import React, {useState} from "react";
import {View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity, Button} from 'react-native'
import {Poppins_400Regular, Poppins_500Medium} from '@expo-google-fonts/poppins'
import {Roboto_300Light, Roboto_700Bold, Roboto_500Medium} from '@expo-google-fonts/roboto'
import {useFonts} from 'expo-font'
import AppIntroSlider from 'react-native-app-intro-slider'
import LottieView from 'lottie-react-native'
import { Loader } from "./src/Pages/Loader";
import { LinearGradient } from "expo-linear-gradient";

import {Routes} from './src/Routes/index'
import { Home } from "./src/Pages/Home";



  const slides = [
    {
      key: '1',
      title:'Cansado de não ter ninguém para lhe levar para o campus?',
      text: 'Você já conhece o MobTimon? Ainda não!? Pois ele pode ser facilmente a solução para os seus problemas.',
      image: require('./src/assets/113604-businessman-asking-questions.json')
    },
    {
      key: '2',
      title:'Mas o que é o MobTimon?',
      text: 'O MobTimon é um aplicativo de mobilidade urbana. E o melhor de tudo... é gratuito.',
      image: require('./src/assets/89273-car-ride-lottie-animation.json'),
    },
    {
      key: '3',
      title:'E é seguro?',
      text: 'Pode ter certeza. Todos os dados dos motoristas serão conferidos antes de permitir que possam fazer corridas.',
      image: require('./src/assets/12549-document-check.json')
    },
    {
      key: '4',
      title:'Já está em funcionamento?',
      text: 'Ainda não! Mas estamos trabalhando para colocar em funcionamento o mais rápido o possível. E trabalhando para você ter a melhor experiência possível.',
      image: require('./src/assets/22992-isometric-people-working-with-technology.json')
    },
  ]



export default function App(){
   
    const [showHome, setShowHome] = useState(false);
    const [fontsLoader] = useFonts({
      Poppins_400Regular,
      Roboto_300Light,
      Roboto_700Bold,
      Poppins_500Medium,
      Roboto_500Medium
    })

    function renderSlides({item}){
      return(
        <LinearGradient colors={['#fff', '#ebebed', '#878787']} style={{flex:1}}>
          <View style={{}}>
              <LottieView
                source={item.image}
                autoPlay={true}
                loop={true}
                style={{
                  height:'70%',
                  width:'100%',
                  marginTop: 20,
                  alignSelf:'center', 
                  resizeMode:'cover'
                }}
                /> 
            <Text style={styles.title}>
              {item.title}
            </Text>

            <Text style={styles.subTitle}>
              {item.text}
            </Text>
          
          </View>
        </LinearGradient>
      )
    }

    if(!fontsLoader){
      return <Loader/>
    } else {
      if(showHome){
        return <Routes/>
      } else{
        return(
          <AppIntroSlider
            renderItem={renderSlides}
            data={slides}
            activeDotStyle={{
              backgroundColor:'#009cff',
              width:30  
            }}
            renderNextButton={()=>{}}
            renderDoneButton={()=><Text style={{ width:95, height:70,fontSize:17, textAlign:'center', paddingBottom:10, marginBottom:15, fontFamily:"Roboto_500Medium", }}>Quero saber mais!!!</Text>}
            onDone={()=>setShowHome(true)}
          />
        )    
      }

    } 

}


const styles = StyleSheet.create({
  title:{
    fontFamily:"Roboto_500Medium",
    fontSize:25,
    textAlign:'center',
    marginBottom:10,
    elevation:10,
    color:'#3c3d40',
    marginHorizontal:10
  },
  subTitle:{
    fontFamily:"Roboto_300Light",
    fontSize:18,
    textAlign:'center',
    margin:5,
    elevation:10,
    paddingHorizontal:20,
    color:'black',
    marginHorizontal:10,
  },
  container:{

  },
})

