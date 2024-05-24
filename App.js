import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import { SQLiteProvider, useSQLiteContext } from 'expo-sqlite/next';
import Home from './pages/Home';
import Respiracion from './pages/Respiracion';
import Diario from "./pages/Diario"
import { constants } from './utils/constans';
import Aceptar from './pages/Aceptar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Init from './stacks/Init';
import { AntDesign } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator()
// const Tab = createBottomTabNavigator()
export default function App() {
  return (
    <SQLiteProvider databaseName="test.db">
    <Provider store={store}>
    <NavigationContainer>
    {/* <Stack.Navigator>
      <Stack.Screen name="Inicio" component={Home} options={{ headerShown: false }}/>
      <Stack.Screen name="Respiracion" component={Respiracion} />
      <Stack.Screen name="Diario" component={Diario} options={{headerTintColor: constants.verde, headerTransparent: "red"}}/>
      <Stack.Screen name="Aceptar" component={Aceptar} options={{headerTintColor: constants.verde, headerTransparent: "red"}}/>
    </Stack.Navigator> */}
    <Tab.Navigator  screenOptions={{
    tabBarStyle: { margin: 5, borderTopLeftRadius: 30 }
  }}>
      <Tab.Screen name="Inico" component={Init} options={{ headerShown: false,
                                                                     tabBarIcon: ({ color, size }) => (
                                                                      <AntDesign name="book" size={30} color="black" />
                                                                    ),
      }}/>
      <Tab.Screen name="Respira" component={Respiracion} options={{ headerShown: false,
                                                                     tabBarIcon: ({ color, size }) => (
                                                                      <AntDesign name="rest" size={30} color="black" />
                                                                    ),
      }}/>
            <Tab.Screen name="Acepta" component={Aceptar} options={{ headerShown: false,
                                                                     tabBarIcon: ({ color, size }) => (
                                                                      <AntDesign name="switcher" size={30} color="black" />
                                                                    ),
      }}/>
    </Tab.Navigator>
  </NavigationContainer>
  </Provider>
  </SQLiteProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: constants.verde
  },
  background: {
    flex: 1
  }
});
