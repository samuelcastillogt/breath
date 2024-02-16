import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import CardStack, { Card } from 'react-native-card-stack-swiper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Target = (props) => {
    const {data, exit} = props
    const [final, setFinal] = useState(false)
  return (
    <View style={{ flex: 1 }}>

      <CardStack
        style={styles.content}
        renderNoMoreCards={() => {
                                setFinal(true)
                                return <Text style={{ fontWeight: '700', fontSize: 18, color: 'gray' }}>Haz terminado la leccion</Text>}}
        ref={swiper => {
          this.swiper = swiper
        }}
        onSwiped={() => console.log('onSwiped')}
        onSwipedLeft={() => console.log('onSwipedLeft')}
      >
        {
            data.map(item => <Card style={[styles.card]}><Text style={styles.label}>{item}</Text></Card>)
        }
      </CardStack>

      <View style={styles.footer}>

        <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.orange]} onPress={() => {
            exit([])
          }}>
            <MaterialCommunityIcons name="exit-run" size={24} color="black" />
          </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.orange]} onPress={() => {
            this.swiper.goBackFromLeft();
          }}>
            <Text>Anterior</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f2f2f2',
  },
  content:{
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card:{
    width: 320,
    height: 470,
    backgroundColor: 'white',
    borderRadius: 5,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity:0.5,
  },
  card1: {
    backgroundColor: '#FE474C',
  },
  card2: {
    backgroundColor: '#FEB12C',
  },
  label: {
    lineHeight: 400,
    textAlign: 'center',
    fontSize: 55,
    fontFamily: 'System',
    color: "black",
    backgroundColor: 'transparent',
  },
  footer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  buttonContainer:{
    width:220,
    flexDirection:'row',
    justifyContent: 'space-between',
  },
  button:{
    shadowColor: 'rgba(0,0,0,0.3)',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity:0.5,
    alignItems:'center',
    justifyContent:'center',
    zIndex: 0,
  },
  orange:{
    width:55,
    height:55,
    borderWidth:6,
    borderColor:'rgb(246,190,66)',
    borderRadius:55,
    marginTop:-15
  },
  green:{
    width:75,
    height:75,
    backgroundColor:'#fff',
    borderRadius:75,
    borderWidth:6,
    borderColor:'#01df8a',
  },
  red:{
    width:75,
    height:75,
    backgroundColor:'#fff',
    borderRadius:75,
    borderWidth:6,
    borderColor:'#fd267d',
  }
});

export default Target;