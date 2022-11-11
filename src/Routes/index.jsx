import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { Instagram } from '../Pages/Instagram'
import { CausasSociais } from '../Pages/CausasSociais'
import { Home } from '../Pages/Home'
import { Contato } from '../Pages/Contato'
import { PlayStore } from '../Pages/PlayStore'
import { Todos } from '../Pages/Todos'

export function Routes(){

    const {Navigator, Screen} = createNativeStackNavigator()

    return(
        <NavigationContainer>
            <Navigator>
                <Screen name='Home' component={Home} options={{headerShown:false, headerStyle:{backgroundColor:'#f9f9f9'}}}/>
                <Screen name='instagram' component={Instagram} options={{headerStyle:{backgroundColor:'#f9f9f9',},headerTitle:'INSTAGRAM' , headerTitleStyle:{fontFamily:'Poppins_500Medium', color:'#009cff'}, headerTitleAlign:'center'}}/>
                <Screen name='PlayStore' component={PlayStore} options={{headerStyle:{backgroundColor:'#f9f9f9',},headerTitle:'PLAY STORE' , headerTitleStyle:{fontFamily:'Poppins_500Medium', color:'#009cff'}, headerTitleAlign:'center'}}/>
                <Screen name='Contato' component={Contato} options={{headerStyle:{backgroundColor:'#f9f9f9',},headerTitle:'Contato' , headerTitleStyle:{fontFamily:'Poppins_500Medium', color:'#009cff'}, headerTitleAlign:'center'}}/>
                <Screen name='CausasSociais' component={CausasSociais} options={{headerStyle:{backgroundColor:'#f9f9f9',},headerTitle:'CAUSAS SOCIAIS' , headerTitleStyle:{fontFamily:'Poppins_500Medium', color:'#009cff'}, headerTitleAlign:'center'}}/>
                <Screen name='Todos' component={Todos} options={{headerStyle:{backgroundColor:'#f9f9f9',},headerTitle:'TODOS' , headerTitleStyle:{fontFamily:'Poppins_500Medium', color:'#009cff'}, headerTitleAlign:'center'}}/>
            </Navigator>
        </NavigationContainer>
    )
}