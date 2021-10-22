import React, { Component } from 'react';
import { AppRegistry, Text, View, TextInput, Switch, StyleSheet, Image} from 'react-native';
import myDB from './myDB';
 class SixthScreen extends Component 
 {
        static navigationOptions = {
    title: 'Forget Password',
     headerTintColor: '#fb5b5a', //Set Header text color
            headerStyle: {
              backgroundColor: '#465881', //Set Header color
            },
  };
  constructor(props) {
    super(props);
    this.toggleSwitch = this.toggleSwitch.bind(this);
    this.state = {
      showPassword: true,
    }
  }

  toggleSwitch() {
    this.setState({ showPassword: !this.state.showPassword });
  }

  render() {
    return (
      <View style={styles.container}>
       <View style={styles.inputView} >
        <Image
        source={require('./assets/Show_password.png')}
        style={styles.imageStyle}
        />
        <TextInput
          style={styles.inputText}
          placeholderTextColor="#003f5c"
          placeholder="Password..."
          secureTextEntry={this.state.showPassword}
          value={myDB.getData.passwordd}
        />
        <Switch
        onValueChange={this.toggleSwitch}
        value={!this.state.showPassword}
        /> 
        <Text style={styles.loginText}>Show</Text>
      </View>
      </View>
    )
  }
}

export default SixthScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
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