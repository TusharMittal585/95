import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import DrawerNavigator from "./navigation/DrawerNavigator";
import firebase from 'firebase'
import {firebaseConfig} from './config' 
import StackNavigator from "react-navigation"
import ComplainScreen from "./screens/ComplaintScreen" 
import BoyDetailScreen from "./screens/BoyDetailScreen"
import LoginScreen from './screens/LoginScreen' 

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig) 
}else{
  firebase.app() 
} 
const AppSwitchNavigator = createSwitchNavigator({
LoginScreen:LoginScreen,
ComplainScreen:ComplainScreen,
BoyDetailScreen:BoyDetailScreen 
});

 
const AppNavigator = createAppContainer(AppSwitchNavigator);

export default function App() {
  return <AppNavigator />;
}