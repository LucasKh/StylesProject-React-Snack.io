import React, { Component } from 'react';
import { View,Text,Button, StyleSheet, Image } from 'react-native';
import myDB from './myDB';
class FifthScreen extends Component 
{
       static navigationOptions = {
    title: 'Report',
     headerTintColor: '#1a991c', //Set Header text color
            headerStyle: {
              backgroundColor: '#465881', //Set Header color
            },
  };
      state = {
        name: myDB.getData.emaill,
        level: myDB.getData.value,
        totalCredits: myDB.getData.noOfCredits,
        price: myDB.getData.creditPrice,
        others: myDB.getData.others,
        total: (myDB.getData.creditPrice *  myDB.getData.noOfCredits) + (myDB.getData.others),
    }

    
    render() {  
        return (  

      <View style={styles.container}>
      <View style={styles.hairline} />
      <Text style={styles.report}>Report</Text>
      <View style={styles.hairline} />

      <Image style={{width:'100%',height: 300 }}
      source={require('./assets/Green-Check.png')}
      resizeMode="contain"/>
  
      <Text style={styles.text}> Name: {this.state.name}</Text>
      <Text style={styles.text}> Current Level: {this.state.level}</Text>
      <Text style={styles.text}> Total Credits: {this.state.totalCredits} </Text>
      <Text style={styles.text}> Credit Price: {this.state.price} $</Text>
      <Text style={styles.text}> Others: {this.state.others} $</Text>
      <Text style={styles.text}> Total: {this.state.total}$</Text>

      </View>                   

    );  
    }  

}
export default FifthScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hairline: {
  backgroundColor: '#A2A2A2',
  height: 2,
  width: 165,
},

 report: {
  fontFamily: 'AvenirNext-Bold',
  fontSize: 50,
  paddingHorizontal: 5,
  color: '#A2A2A2',
  
},
text:{
    color:"white",
    fontSize:20,
    alignItems:"start",
  },

});