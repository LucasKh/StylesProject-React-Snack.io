import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Image} from 'react-native';

import myDB from './myDB'; 

class FirstScreen extends Component
{
  
     static navigationOptions = {
    title: 'MyApp',
     headerTintColor: '#fb5b5a', //Set Header text color
            headerStyle: {
              backgroundColor: '#465881', //Set Header color
            },
  };

  
  state={
    email:"",
    password:"",
  }

   handleEmail= (etxt) => 
  {
    this.setState({ email: etxt });
  };
     handlePassword= (etxt) => 
  {
    this.setState({ password: etxt });
  };

  signUp = () =>
  {
    this.props.navigation.navigate('SignUp');
  }
  signIn = () =>
  {
    if(this.state.email == myDB.getData.emaill && this.state.password == myDB.getData.passwordd)
    {
      this.props.navigation.navigate('Report');
    }
    else{
      Alert.alert('Warning!', 'No user exists!');
    }
  }
  goToForgotPassword = () => 
  {
    this.props.navigation.navigate('ForgetPassword');
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Welcome</Text>

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
            secureTextEntry 
            style={styles.inputText}
            placeholder="Password..." 
            placeholderTextColor="#003f5c"
            value={this.state.password}
            onChangeText={this.handlePassword}/>
        </View>


        <TouchableOpacity
        onPress={() => this.goToForgotPassword()}>
        <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>



        <TouchableOpacity style={styles.loginBtn}
        onPress={() => this.signIn()}>
        <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={() => this.signUp()}>
        <Text style={styles.loginText}>Signup</Text>
        </TouchableOpacity>

  
      </View>
    );
  }
}

export default FirstScreen;

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
    padding:20,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  inputText:{
    height:50,
    color:"white"
  },
  forgot:{
    color:"white",
    fontSize:11
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
