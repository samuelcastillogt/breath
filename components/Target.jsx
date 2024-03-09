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
import { FontAwesome5 } from '@expo/vector-icons';
import { constants } from '../utils/constans';

const Target = (props) => {
    const {data, exit} = props
    const [final, setFinal] = useState(false)
    const [index, setIndex] = useState(0)
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
            data.map((item, index) => <Card style={styles.card} key={index}>

                <Text style={styles.label}>{item}</Text>
</Card>
              )
        }
      </CardStack>

      <View style={styles.footer}>

        <View style={styles.buttonContainer}>
        <TouchableOpacity style={[ styles.button, styles.orange]} onPress={() => {
            this.swiper.goBackFromLeft();
          }}>
            <FontAwesome5 name="step-backward" size={24} color="white" />
          </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.orange]} onPress={() => {
            exit([])
          }}>
            <MaterialCommunityIcons name="exit-run" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.orange]} onPress={() => {
            this.swiper.swipeLeft() ;
          }}>
            <FontAwesome5 name="step-forward" size={24} color="white" />
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
    flexShrink: 1
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
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 1
  },
  card1: {
    backgroundColor: '#FE474C',
  },
  card2: {
    backgroundColor: '#FEB12C',
  },
  label: {
    textAlign: 'center',
    fontSize: 20,
    padding: 10,
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
    backgroundColor: constants.verde,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity:0.5,
    alignItems:'center',
    justifyContent:'center',
    zIndex: 0,
  },
  buttonDisable:{
    shadowColor: 'rgba(0,0,0,0.3)',
    backgroundColor: "grey",
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