import React from "react";
import { Text, View } from "react-native";

import Style from "./styles";

export default function Item(props) {
  const id = props.id || 1;
  const title = props.title || "Item";
  const quantity = props.quantity || 0;
  const weight = props.weight || 0;
  const price = props.price || 0;

  return (
    <View style={Style.container}>
      <Text style={Style.text}>{id}.</Text>
      <Text style={Style.text}>
        {title} ({quantity})
      </Text>
      <Text style={Style.text}>{weight.toFixed(2)} kg</Text>
      <Text style={Style.text}>R$ {price.toFixed(2)}</Text>
    </View>
  );
}
