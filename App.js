import Home from "./src/pages/home";
import React from "react";

import Payment from "./src/pages/payment";
import People from "./src/pages/people";
import Topings from "./src/pages/topings";
import Values from "./src/pages/values";
import Food from "./src/pages/food";

import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="People" component={People} />
      <Stack.Screen name="Topings" component={Topings} />
      <Stack.Screen name="Values" component={Values} />
      <Stack.Screen name="Food" component={Food} />
      
      
    </Stack.Navigator>
  );
}

export default function App() {
  return(
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  )
}
