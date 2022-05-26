import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";
import BoyDetailScreen from '../screens/BoyDetailScreen'

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Home" component={TabNavigator} />
      <Stack.Screen name="BoyDetailScreen" component={BoyDetailScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;