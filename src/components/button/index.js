import { Alert, TouchableOpacity, Text } from "react-native";
import React, {Component} from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Style from "./styles";
import { Button } from "react-native-web";

export default function ButtonComponent(props) {
  const title = props.title || "Churrascar";
  const text = props.text ;
  const navigation = useNavigation();

  

  return (
    <TouchableOpacity onPress={() => navigation.navigate(text)} style={Style.button}>
      <Text style={Style.text}>{title}</Text>
    </TouchableOpacity>
  );
}
