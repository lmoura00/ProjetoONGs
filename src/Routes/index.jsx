import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { Animais } from '../Pages/Animais'
import { CausasSociais } from '../Pages/CausasSociais'
import { Home } from '../Pages/Home'
import { Idosos } from '../Pages/Idosos'
import { MeioAmbiente } from '../Pages/MeioAmbiente'
import { Todos } from '../Pages/Todos'

export function Routes(){

    const {Navigator, Screen} = createNativeStackNavigator()

    return(
        <NavigationContainer>
            <Navigator>
                <Screen name='Home' component={Home} options={{headerShown:false, headerStyle:{backgroundColor:'#f9f9f9'}}}/>
                <Screen name='Animais' component={Animais} options={{headerStyle:{backgroundColor:'#f9f9f9',},headerTitle:'ANIMAIS' , headerTitleStyle:{fontFamily:'Poppins_500Medium', color:'#009cff'}, headerTitleAlign:'center'}}/>
                <Screen name='MeioAmbiente' component={MeioAmbiente} options={{headerStyle:{backgroundColor:'#f9f9f9',},headerTitle:'MEIO AMBIENTE' , headerTitleStyle:{fontFamily:'Poppins_500Medium', color:'#009cff'}, headerTitleAlign:'center'}}/>
                <Screen name='Idosos' component={Idosos} options={{headerStyle:{backgroundColor:'#f9f9f9',},headerTitle:'IDOSOS' , headerTitleStyle:{fontFamily:'Poppins_500Medium', color:'#009cff'}, headerTitleAlign:'center'}}/>
                <Screen name='CausasSociais' component={CausasSociais} options={{headerStyle:{backgroundColor:'#f9f9f9',},headerTitle:'CAUSAS SOCIAIS' , headerTitleStyle:{fontFamily:'Poppins_500Medium', color:'#009cff'}, headerTitleAlign:'center'}}/>
                <Screen name='Todos' component={Todos} options={{headerStyle:{backgroundColor:'#f9f9f9',},headerTitle:'TODOS' , headerTitleStyle:{fontFamily:'Poppins_500Medium', color:'#009cff'}, headerTitleAlign:'center'}}/>
            </Navigator>
        </NavigationContainer>
    )
}