import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Home from './pages/Home';
import { constants } from './utils/constans';
import Respiracion from './pages/Respiracion';
export default function App() {
  return (
    <View style={styles.container}>
      <Respiracion />
    </View>
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
