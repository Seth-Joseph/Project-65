import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';
import {createAppContainer,createSwitchNavigator,} from 'react-navigation';


import Logoscreen from './screens/Logoscreen';
import Searchscreen from './screens/Searchscreen';

export default class App extends React.Component {
    render(){
  return (
    <View>
     <AppContainer/>
    </View>
  );
}}

const switchnavigatar= createSwitchNavigator({
  Loki:{screen:Logoscreen},
  Sylvie:{screen:Searchscreen},
  
})
const AppContainer = createAppContainer(switchnavigatar)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
