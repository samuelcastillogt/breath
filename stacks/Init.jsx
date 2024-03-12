import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator()
import Home from '../pages/Home';
import Respiracion from '../pages/Respiracion';
import Diario from '../pages/Diario';
import Aceptar from '../pages/Aceptar';
import { constants } from '../utils/constans';
import Sintomas from '../pages/Sintomas';
const Init = ()=>{
    return(
        <Stack.Navigator>
        <Stack.Screen name="Inicio" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="Sintomas" component={Sintomas} />
        <Stack.Screen name="Diario" component={Diario} options={{headerTintColor: constants.verde, headerTransparent: "red"}}/>
        <Stack.Screen name="Aceptar" component={Aceptar} options={{headerTintColor: constants.verde, headerTransparent: "red"}}/>
      </Stack.Navigator>
    )
}
export default Init