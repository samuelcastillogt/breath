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
    const [last, setLast] = useState(false)
    const [count, setCount]= useState(1)
  return (
    <View style={{ flex: 1 }}>

      <CardStack
        style={styles.content}
        renderNoMoreCards={() => {
                                return <Text style={{ fontWeight: '700', fontSize: 18, color: 'gray' }}>Haz terminado la leccion</Text>}}
        ref={swiper => {
          this.swiper = swiper
        }}
      >
        {
            data.map((item, index) => <Card style={styles.card} key={item}>

                <Text style={styles.label}>{item}</Text>
                <Text style={styles.counter}>{index + 1}/{data.length}</Text>
</Card>
              )
        }
      </CardStack>

      <View style={styles.footer}>

        <View style={styles.buttonContainer}>
          {
            count != 1 &&         <TouchableOpacity style={[ styles.button, styles.orange]} onPress={() => {
            setCount(count-1)
            this.swiper.goBackFromLeft();
          }}>
            <FontAwesome5 name="step-backward" size={24} color="white" />
          </TouchableOpacity>
          }

        <TouchableOpacity style={[styles.button, styles.orange, {backgroundColor:"orange"}]} onPress={() => {
            exit([])
          }}>
            <MaterialCommunityIcons name="exit-run" size={24} color="white" />
          </TouchableOpacity>
          {
            count != data.length + 1 &&  <TouchableOpacity style={[styles.button, styles.orange]} onPress={() => {
            this.swiper.swipeLeft() ;
            setCount(count+1)
          }}>
            <FontAwesome5 name="step-forward" size={24} color="white" />
          </TouchableOpacity>
          }

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
  },
  counter:{
    color: constants.verde, 
    position: "absolute", 
    top: 10, 
    right: 10, 
    fontSize: 20, 
    fontWeight: "bold"
  }
});

export default Target;