import React, { Component } from 'react';
import { View,Text,Button } from 'react-native';

import { createStackNavigator } from 'react-navigation-stack';  
import { createAppContainer } from "react-navigation";

import FirstScreen from "./WelcomePage";
import SecondScreen from "./SignUp";
import ThirdScreen from "./RegisterG";
import FourthScreen from "./RegisterUg";
import FifthScreen from "./Report";
import SixthScreen from "./ForgetPassword";

  const AppNavigator = createStackNavigator(  
    {  
       WelcomePage: FirstScreen,
       SignUp: SecondScreen,
       RegisterG: ThirdScreen,
       RegisterUg: FourthScreen,
       Report: FifthScreen,
       ForgetPassword: SixthScreen
    },  
    {  
        initialRouteName: "WelcomePage"  
    }  
); 

const AppContainer = createAppContainer(AppNavigator)

class App extends React.Component {  

     constructor(props)
   {  
      super(props);

   } 
    render() {  
        return <AppContainer />;  
    }  
} 
export default App; 