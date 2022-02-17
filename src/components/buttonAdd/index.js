import { Alert, TouchableOpacity, Text } from "react-native";
import React, {Component} from 'react';

import Style from "./styles";

export default function ButtonAdd() {
  

  return (
    <TouchableOpacity onPress={() => Alert.alert(title)} style={Style.button}>
      <Text style={Style.text}>Adicionar</Text>
    </TouchableOpacity>
  );
}
