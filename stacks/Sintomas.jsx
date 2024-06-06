import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator()
import Home from '../pages/Home';
import Respiracion from '../pages/Respiracion';
import Diario from '../pages/Diario';
import Aceptar from '../pages/Aceptar';
import { constants } from '../utils/constans';
import Sintomas from '../pages/Sintomas';
import Web from '../pages/Web';
const SintomasPage = ()=>{
    return(
        <Stack.Navigator>
        <Stack.Screen name="Sintomas" component={Sintomas} options={{headerTintColor: "green"}}/>
        <Stack.Screen name="Web" component={Web} options={{headerTintColor: constants.verde}}/>
      </Stack.Navigator>
    )
}
export default SintomasPage