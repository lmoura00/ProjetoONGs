import React, {useState} from "react";
import {View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native'
import {Poppins_400Regular, Poppins_500Medium} from '@expo-google-fonts/poppins'
import {Roboto_300Light, Roboto_700Bold, Roboto_500Medium} from '@expo-google-fonts/roboto'
import {useFonts} from 'expo-font'
import AppIntroSlider from 'react-native-app-intro-slider'
import LottieView from 'lottie-react-native'
import { Loader } from "./src/Pages/Loader";

import {Routes} from './src/Routes/index'
import { Home } from "./src/Pages/Home";



  const slides = [
    {
      key: '1',
      title:'Você já ajudou alguém hoje?',
      text: 'Já parou para pensar em como você poderia ajudar alguém hoje?',
      image: require('./src/assets/dog1.json')
    },
    {
      key: '2',
      title:'Quer conhecer mais sobre os projetos que existem?',
      text: 'Você sabe quais as ongs que existem em Teresina e região?',
      image: require('./src/assets/74268-cute-tiger.json'),
      image2: require('./src/assets/64705-elephant.json')
    },
    {
      key: '3',
      title:'Vamos ajudar o nosso planeta?',
      text: 'A sua ajuda, por menor que seja, ajuda e muito no dia a dia.',
      image: require('./src/assets/pet-hug.json')
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
        <View style={{flex:1,}}>
            <LottieView
              source={item.image}
              autoPlay={true}
              loop={true}
              style={{
                height:'70%',
                width:'100%',
                marginTop: 20,
                alignSelf:'center', 
                backgroundColor:'#fff',
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
            renderDoneButton={()=><Text style={{fontSize:15, marginTop:12, fontFamily:"Roboto_300Light"}}>Vamos ajudar!!!</Text>}
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
    color:'#009cff'
  },
  subTitle:{
    fontFamily:"Poppins_500Medium",
    fontSize:18,
    textAlign:'center',
    margin:5,
    elevation:10,
    paddingHorizontal:20,
    color:'#b5b5b5'
  },
  container:{

  },
})

