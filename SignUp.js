import React, { Component } from 'react';
import { View,Text,Button, TextInput, Alert, StyleSheet, CheckBox, TouchableOpacity, Image, Switch} from 'react-native';

import {RadioButton} from 'react-native-paper';
import myDB from './myDB';

class SecondScreen extends Component 
{
       static navigationOptions = {
    title: 'Sign Up',
     headerTintColor: '#fb5b5a', //Set Header text color
            headerStyle: {
              backgroundColor: '#465881', //Set Header color
            },
  };
     constructor(props) {
    super(props);
    this.toggleSwitch = this.toggleSwitch.bind(this);
   }

    state = {
    email: '',
    password: '', 
    noOfCredits: '',
    value: '',
    showPassword: true,
  };

  handleEmail= (etxt) => 
  {
    this.setState({ email: etxt });
  };
    handlePassword= (etxt) => 
  {
    this.setState({ password: etxt });
  };
  handleCredits = (ptext) =>
  {
    this.setState({noOfCredits: ptext});
  };
    register = () => {
    if (this.state.email != '' && this.state.email != '' && this.state.noOfCredits != '' )
     {
       if(this.state.value == "Graduate")
       {
         if(this.state.noOfCredits < 6)
         {
          Alert.alert('Warning!', 'You are not allowed');
         }else{
            myDB.getData.emaill =  this.state.email;
            myDB.getData.passwordd =  this.state.password;
            myDB.getData.noOfCredits = this.state.noOfCredits;
            myDB.getData.value = this.state.value;
            this.props.navigation.navigate('RegisterG');
         }
       }else if (this.state.value == "UnderGraduate")
       {
          if(this.state.noOfCredits < 12)
          {
            Alert.alert('Warning!', 'You are not allowed');
          }else{
            myDB.getData.emaill =  this.state.email;
            myDB.getData.passwordd =  this.state.password;
            myDB.getData.noOfCredits = this.state.noOfCredits;
            myDB.getData.value = this.state.value;
            this.props.navigation.navigate('RegisterUg');
          }
       }       
    } 
    else
     {
      Alert.alert('Warning!', 'Please fill out all required fields');
     }
  };
      toggleSwitch() {
    this.setState({ showPassword: !this.state.showPassword });
  }

  


  render() {  
    return (  
            <View style={styles.container}>
        <Text style={styles.logo}>Register Please</Text>

        <View style={styles.inputView} >
       <Image
        source={require('./assets/Email_icon.png')}
        style={styles.imageStyle}
        />
          <TextInput  
            style={styles.inputText}
            placeholder="Email..." 
            placeholderTextColor="#003f5c"
            value={this.state.email}
            onChangeText={this.handleEmail}/>
        </View>

        <View style={styles.inputView} >
        <Image
        source={require('./assets/Password_icon.png')}
        style={styles.imageStyle}
        />
          <TextInput  
            secureTextEntry = {this.state.showPassword}
            style={styles.inputText}
            placeholder="Password..." 
            placeholderTextColor="#003f5c"
            value={this.state.password}
            onChangeText={this.handlePassword}/>
        </View>

            <Switch
          onValueChange={this.toggleSwitch}
          value={!this.state.showPassword}
        /> 
        <Text style={styles.loginText}>Show Password</Text>

          <View style={styles.inputView} >
        <Image
        source={require('./assets/Number_icon.png')}
        style={styles.imageStyle}
        />
          <TextInput  
            style={styles.inputText}
            placeholder="Number of credits..." 
            placeholderTextColor="#003f5c"
            value={this.state.noOfCredits}
            onChangeText={this.handleCredits}/>
        </View>
               
        <RadioButton.Group  
        onValueChange={newValue => this.setState({value:newValue})} value={this.state.value}>
        <View style={{flexDirection: 'row',marginRight: '10px'}}>                 
        <RadioButton value="Graduate"></RadioButton>
        <View style={{alignContent:'center', alignItems:'center ', borderColor: '#FF5722', borderBottomColor: 'black',height:'30px',width:'100px',  marginRight: '100px' }}>
        <Text style={{marginTop:'10px'}}>Graduate</Text>
        </View>
        </View>
        <View style={{flexDirection: 'row',marginRight: '10px', marginBottom: '100px'}}>                     
        <RadioButton value="UnderGraduate"></RadioButton>
        <View style={{alignContent:'center', alignItems:'center ', borderColor: '#FF5722', borderBottomColor: 'black',height:'30px',width:'100px', marginRight: '100px' }}>
        <Text style={{marginTop:'10px'}}>UnderGraduate</Text>
        </View>
        </View>
        </RadioButton.Group>
              

        <TouchableOpacity style={styles.loginBtn}
        onPress={() => this.register()}>
        <Text style={styles.loginText}>SignUp</Text>
        </TouchableOpacity>

        </View>  
    );  
  }  

}
export default SecondScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:40,
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
    padding:20,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
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
    justifyContent:"center",//we do have flex_end
    marginBottom:100,
  },
  loginText:{
    color:"white"
  },
   imageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
});
