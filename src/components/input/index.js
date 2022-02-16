import { SafeAreaView, Image, TextInput } from "react-native";
import React, {Component} from 'react';

import styles from "./styles"

function  TextoInput() {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);
    return (
        <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Insira os dados"
        keyboardType="numeric"
      />
    );
  }
  
  export default TextoInput;
  