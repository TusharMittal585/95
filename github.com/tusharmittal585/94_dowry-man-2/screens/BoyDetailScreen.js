import React, { Component } from 'react';
import { Text, View,StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
  Alert
   } from 'react-native';
  import { RFValue } from "react-native-responsive-fontsize";
  import firebase from 'firebase'
  import Profile from './Profile' 
  import Complaint from './ComplaintScreen' 

export default class BoyDetailScreen extends Component {
  constructor(props){
    super(props)
    this.state={
      boy_name:'',
      boy_age:'',
      boy_number:'',
      family_details:'',
      boy_address:''
    }
  } async addDetails() {
    if (
      this.state.boy_name &&
      this.state.boy_age &&
      this.state.boy_number &&
      this.state.family_details &&
      this.state.boy_address
    ) {
      let Data = {
        
        name: this.state.boy_name,
       age: this.state.boy_age,
        number: this.state.boy_number,
        moral: this.state.moral,
        created_on: new Date(),
        family_details:this.state.family_details,
        address:this.state.boy_address
      };
      await firebase
        .database()
        .ref(
          "/accuse/" +
            Math.random()
              .toString(36)
              .slice(2)
        )
        .set(Data)
        .then(function(snapshot) {});
      this.props.navigation.navigate("ComplaintScreen");
    } else {
      Alert.alert(
        "Error",
        "All fields are required!",
        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: false }
      );
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
          <TextInput style={styles.inputFont} 
          onChangeText={boy_name=>this.setState({
            boy_name
          })}
          placeholder={'Enter the boy name'}
          placeholderTextColor='white'
          />
          <TextInput style={styles.inputFont} 
          onChangeText={boy_age=>this.setState({
            boy_age
          })}
          placeholder={'Enter the boy age'}
          placeholderTextColor='white'
          />
          <TextInput style={styles.inputFont} 
          onChangeText={boy_number=>this.setState({
            boy_number
          })}
          placeholder={'Enter the boy number'}
           placeholderTextColor='white'
          />
           <TextInput style={styles.inputFont} 
          onChangeText={boy_address=>this.setState({
            boy_address
          })}
          placeholder={'Enter the boy address'}
           placeholderTextColor='white'
          multiline={true}
          numberOfLines={4}
          />
           <TextInput style={styles.inputFont} 
          onChangeText={family_details=>this.setState({
            family_details 
          })}
          placeholder={'Enter the boy family details'}
           placeholderTextColor='white'
          multiline={true}
          numberOfLines={4}  
          />
        <View style={styles.submitButton}>
        <Button
                  onPress={() => this.addDetails()}
                  title="Submit"
                  color="#841584"
                />
        </View>

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
    width: "100%",
    height: "100%",
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
 inputFont:{
   height:RFValue(40),
   borderColor:'white',
   borderWidth:RFValue(1),
   borderRadius:RFValue(10),
   paddingLeft:RFValue(10),
   color:'white',
   fontFamily:'Arial'
 },
 submitButton:{ 
    width:'50%',
    height:55,
    alignSelf:'center',
    padding:10,
    margin:10,
    borderRadius:RFValue(10),
    borderColor:'#ae242c' 
  }, 
  
});