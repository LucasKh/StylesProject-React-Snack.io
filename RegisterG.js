import React, { Component } from 'react';
import { View,Text,Button, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import myDB from './myDB'; 
class ThirdScreen extends Component 
{
       static navigationOptions = {
    title: 'Register G',
     headerTintColor: '#fb5b5a', //Set Header text color
            headerStyle: {
              backgroundColor: '#465881', //Set Header color
            },
  };
    state = {
    price: '',
    other: ''
  }
    handlePrice= (ptxt) => 
  {
    this.setState({ price: parseInt(ptxt) });
  };
      handleOthers= (otxt) => 
  {
    this.setState({ other: parseInt(otxt) });
  };
  
  calculateFees=()=>
  {
  if(this.state.price != '' && this.state.other != '')
    {
      myDB.getData.creditPrice =  this.state.price;
      myDB.getData.others = this.state.other;
      this.props.navigation.navigate('Report');
    }
  }
  render(){
    return(
  <View style={styles.container}>
  <Text style={styles.logo}>Tuition Fees</Text>

  <View style={styles.inputView} >
  <TextInput  
  style={styles.inputText}
  placeholder="Credit Price..." 
  placeholderTextColor="#003f5c"
  value={this.state.price}
  onChangeText={this.handlePrice}/>
  </View>


  <View style={styles.inputView} >
  <TextInput  
  style={styles.inputText}
  placeholder="Others..." 
  placeholderTextColor="#003f5c"
  value={this.state.others}
  onChangeText={this.handleOthers}/>
  </View>

<TouchableOpacity style={styles.loginBtn}
onPress={() => this.calculateFees()}>
<Text style={styles.loginText}>Calculate Fees</Text>
</TouchableOpacity>


  </View>
      );
}  

}
export default ThirdScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white"
  }
});