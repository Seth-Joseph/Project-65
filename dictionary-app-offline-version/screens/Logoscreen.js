import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,Image } from 'react-native';
import {} from 'react-navigation';


import Searchscreen from './Searchscreen';

export default class Logoscreen extends React.Component {
    render(){
  return (
    <View style={styles.container}>
       <Image source={require('../assets/search.png')} style={styles.b} />   
       <Text style={styles.t}>Word Finder</Text>
       <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Sylvie')}> Search word</TouchableOpacity>
       <Text style={styles.s}></Text>
    </View>
  );
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top',
    backgroundColor: '#FFC91B',
  },
  b: {
    width: 150,
    height: 150,
    marginLeft: 90,
    marginTop:40,
  },
  t:{
    fontSize:24,
    fontStyle:'italic',
    marginTop:50,
    marginLeft:100
  },
  button: {
    padding: 10,
    borderColor: '#71E2EF',
    borderWidth: 1,
    color: '#273B7A',
    borderRadius: 20,
    width: 250,
    textAlign: 'center',
    marginLeft: 40,
    marginTop: 0,
    backgroundColor: '#71E2EF',
    fontFamily: 'sans-serif',
    marginTop:100,
    fontWeight:'bold'
  },
  s:{
    fontSize:24,
    fontStyle:'italic',
    marginTop:250,
    marginLeft:100
  },
});
