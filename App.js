
import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import GameIng from './assets/gameing.svg';


const App = () => {

  return (
    <SafeAreaView 
    style={{
      flex: 1, 
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',

    }}>
      <View style={{marginTop:20}}>
       <Text 
       style={{
        fontsize:30, 
        fontWeight:'bold',
        color: '#20315f',
        fontFamily: 'Inter-Bold',
        }}>
          Game App
       </Text>
       <View style={{flex:1, justifyContent:'center', alignItems:'center' }}>
       <GameIng  width={300} height={300} style={{transform:[{rotate:'-15deg'}]}} />
       </View>
       </View>
      <TouchableOpacity 
      style={{
        backgroundColor:'#AD40AF', 
        padding:20, 
        width:'90', 
        borderRadius:5, 
        flexDirection:'row', 
        justifyContent:'space-betwen',
        marginBottom:5 0,
    }}>
        <Text 
        style={{
          fontWeight:'bold', 
          fontSize:18, 
          color:'#fff',
          fontFamily:'Roboto-MediumItalic',
          }}> 
          Start 
          </Text >
        <MaterialIcons name='arrow-forward' size={22} color="#fff"  />
      </TouchableOpacity>
    </SafeAreaView>
  );




}
export default App;
