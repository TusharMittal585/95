import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
  Alert
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import BoyDetailScreen from './BoyDetailScreen' 
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { FlatList } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';
import "react-native-gesture-handler";
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator, createAppContainer } from 'react-navigation'; 


export default class Complaint extends Component {
constructor(props){
  super(props)
  this.state={
    text:''
  }
}

  render() {
    
      return (
        <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />
          <View style={styles.appTitle}>
            <View style={styles.appIcon}>
              <Image
                source={require("../assets/logo.png")}
                style={styles.iconImage}
              ></Image>
            </View>
            <View style={styles.appTitleTextContainer}>
              <Text style={styles.appTitleText}>Dowry Man</Text>
            </View>
          </View>
         <TextInput style={styles.complaint} onChangeText={(text)=>{
           this.setState({
             text:text 
           })
         }}
          value={this.state.text}
          placeholder={'Lodge a complaint'}
          multiline={true}
          numberOfLines={10} 
          placeholderTextColor='#aeea44' 
          >  

         </TextInput>
<TouchableOpacity style={styles.goButton} onPress={()=>{
this.props.navigation.navigate('BoyDetailScreen')
Alert.alert('You will get justice!') 
}}> 
<Text style={styles.buttonText}>
LODGE 
</Text>
</TouchableOpacity>

        </View>
      );
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15193c"
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
  appTitle: {
    flex: 0.07,
    flexDirection: "row"
  },
  appIcon: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center"
  },
  iconImage: {
    width: "350%",
    height: "350%",
    resizeMode: "contain"
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: "center"
  },
  appTitleText: {
    color: "white",
    fontSize: RFValue(28),
    fontFamily: "Bubblegum-Sans"
  },
  complaint:{
    marginTop:10, 
    width:'80%', 
    alignContent:'center',
    justifyContent:'center',
    alignSelf:'center',
    textAlign:'center',
    borderWidth:2, 
    backgroundColor:'white',
    borderColor:'#ad843e'  
  },
  goButton:{ 
    width:'50%',
    height:55,
    alignSelf:'center',
    padding:10,
    margin:10
  },
  buttonText:{
    textAlign:'center',
    fontSize:30,
    fontWeight:'bold',
    color:'white'
  }  
});