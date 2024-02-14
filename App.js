import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { store } from './redux/store'
import { Provider } from 'react-redux'

import Home from './pages/Home';
import Respiracion from './pages/Respiracion';
import Diario from "./pages/Diario"
import { constants } from './utils/constans';

const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
      <Stack.Screen name="Respiracion" component={Respiracion} />
      <Stack.Screen name="Diario" component={Diario} options={{headerTintColor: constants.verde, headerTransparent: "red"}}/>
    </Stack.Navigator>
  </NavigationContainer>
  </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: constants.verde
  },
  background: {
    flex: 1
  }
});
