import Home from "./src/pages/home";
import React from "react";

import Payment from "./src/pages/payment";
import People from "./src/pages/people";
import Topings from "./src/pages/topings";
import Values from "./src/pages/values";
import Food from "./src/pages/food";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Header from "./src/components/header";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "rgba(128, 0, 0, 0.75)",
        },
        headerTitleAlign: "center",
        headerTitle: (props) => <Header {...props} />,
      }}
      initialRouteName="Home"
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="People" component={People} />
      <Stack.Screen name="Food" component={Food} />
      <Stack.Screen name="Values" component={Values} />
      <Stack.Screen name="Topings" component={Topings} />
      <Stack.Screen name="Payment" component={Payment} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
