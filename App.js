import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';



export default class App extends Component {

  displayAlert1(){
alert('Jackie Robinson was a great baseball player!')
  }

  displayAlert2(){
alert('Stop touching me! I already told you')
  }

  displayAlert3(){
alert('Did you know that there are more cows in the world than people?')
  }
   
  displayAlert4(){
alert(' What do you call a bear with no teeth... A gummy bear!')
   }
  render() {
    return (
      <View style={{marginTop: 100}}>
        
     <Button title = "Jackie Robinson" color ="yellow" onPress={this.displayAlert1}/>
     <Button title = "Don't Touch Me!" color = "red" onPress={this.displayAlert2}/>
     <Button title = "Fun Fact" color = "green" onPress={this.displayAlert3}/>
     <Button title = "Bad Joke Button" color = "#EC5766" onPress={this.displayAlert4}/>

    
     
      </View>
    );
  }
}