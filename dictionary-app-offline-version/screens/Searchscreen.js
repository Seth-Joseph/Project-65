import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
import * as Speech from 'expo-speech'

import dictionary from '../database'

export default class Searchscreen extends Component{
  constructor() {
    super();
    this.state = {
      text: '',
      isSearchPressed: false,
      isLoading: false,
      word  : "Loading...",
      lexicalCategory :'',
      definition : ""
    };
  }
  sound = () => { 
  Speech.speak(this.state.text)
  };

  getWord=(text)=>{
    var text = text.toLowerCase();
    try{

          var word = dictionary[text]["word"]
          var definition=dictionary[text]["definition"]
          var lexicalCategory=dictionary[text]["lexicalCategory"]
          this.setState({

              "word": word,
              "definition": definition,
              "lexicalCategory": lexicalCategory 

          })

    }
    catch(err){
      alert("Sorry the word that you entered is not in our database\n              Try searching the word 'externally'")
      this.setState({
        'text':'',
        'isSearchPressed':false
      })
    }
  }

  render(){
    return(
      <View style={{}}>
       <View style={styles.head}>
        <Text style={styles.text}>Search Your word</Text>
       </View>
        <View style={styles.inputBoxContainer}>
        
          <TextInput
            style={styles.inputBox}
             placeholder = 'Enter your word'
             keyboardType = 'default'
            onChangeText={text => {
              this.setState({
                text: text,
                isSearchPressed: false,
                word  : "Loading...",
                lexicalCategory :'',
                examples : [],
                definition : ""
              });
            }}
            value={this.state.text}
          />

          <TouchableOpacity
            style={styles.searchButton}
            onPress={() => {
              this.setState({ isSearchPressed: true });
              this.getWord(this.state.text)
            }}>
            <Text style={styles.searchText}>Search</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.outputContainer}>
          <Text style={{fontSize:20}}>
            {
              this.state.isSearchPressed && this.state.word === "Loading..."
              ? this.state.word
              : ""
            }
          </Text>
            {
              this.state.word !== "Loading..." ?
              (
                <View style={{justifyContent:'center', marginLeft:10 }}>
                  <View style={styles.detailsContainer}>
                    <Text style={styles.detailsTitle}>
                      Word :{" "}
                    </Text>
                    <Text style={{fontSize:18 }}>
                      {this.state.word}
                    </Text>
                  </View>
                  <View style={styles.detailsContainer}>
                    <Text style={styles.detailsTitle}>
                      Type :{" "}
                    </Text>
                    <Text style={{fontSize:18}}>
                      {this.state.lexicalCategory}
                    </Text>
                  </View>
                  <View style={{flexDirection:'row',flexWrap: 'wrap'}}>
                    <Text style={styles.detailsTitle}>
                      Definition :{" "}
                    </Text>
                    <Text style={{ fontSize:18}}>
                      {this.state.definition}
                    </Text>
                  </View>
                  <TouchableOpacity style={styles.hear}
                    onPress = {()=>{
                     this.sound()
                      }}
                        >
                   <Text  style={styles.text}>🔊 {this.state.text}</Text>
                    </TouchableOpacity>
                </View>
              )
              :null
            }
            
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({

  inputBoxContainer: {
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  inputBox: {
     padding: 10,
    marginTop: 10,
    borderBottomColor: '#273B7A',
    borderTopColor: '#273B7A',
    borderLeftColor: '#273B7A',
    borderRightColor: '#273B7A',
    borderWidth: 2,
    color: 'black',
    width: 250,
    marginLeft: 20,
    fontWeight:"bold",
    borderRadius:5
  },
  searchButton: {
     padding: 10,
    borderColor: '#71E2EF',
    borderWidth: 1,
    color: '#273B7A',
    borderRadius: 10,
    width: 200,
    textAlign: 'center',
    marginLeft: 20,
    marginTop: 20,
    backgroundColor: '#71E2EF',
    fontFamily: 'sans-serif',
    fontWeight:'bold'
  },
  searchText:{
    fontSize: 20,
    fontWeight: 'bold'
  },
  outputContainer:{
    flex:1,
    alignItems:'center'
  },
  detailsContainer:{
    flexDirection:'row',
    alignItems:'center'
  },
  detailsTitle:{
      fontStyle:'italic',
    fontSize:24,
    color:"#273B7A",
    fontFamily:"sans-serif",
    marginLeft:20,
    marginTop:10
  },
    head:{
    backgroundColor:"#FFC91B",
    flex:1,
    paddingLeft:80,
    paddingTop:20,
    paddingBottom:20
  },
  text:{
    color:'#273B7A',
    fontWeight:'bold',
    fontFamily:'monospace',
    fontSize:24
  },
  hear:{
    padding: 10,
    borderColor: '#FFC91B',
    borderWidth: 1,
    color: '#273B7A',
    borderRadius: 20,
    width: 200,
    textAlign: 'center',
    marginLeft: 60,
    marginTop: 30,
    backgroundColor: '#FFC91B',
    fontFamily: 'sans-serif',
    fontWeight:'bold'
  },
});
