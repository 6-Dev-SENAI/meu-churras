import { TouchableOpacity, Text } from "react-native";
import React from "react";

import Style from "./styles";

export default function ButtonComponent(props) {
  const title = props.title || "Churrascar";

  return (
    <TouchableOpacity onPress={() => props.next()} style={Style.button}>
      <Text style={Style.text}>{title}</Text>
    </TouchableOpacity>
  );
}
