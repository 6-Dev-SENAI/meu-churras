import React from "react";
import { Text, View } from "react-native";

import Style from "./styles";

export default function Item(props) {
  const title = props.title || "Item";
  const weight = props.weight || 0;
  const price = props.price || 1;
  const unity = props.unity || null;

  if (weight == 0) return null;
  else {
    return (
      <View style={Style.container}>
        <Text style={Style.title}>{title}</Text>
        <Text style={Style.value}>
          {weight} ({unity})
        </Text>
        <Text style={Style.price}>R$ {price}</Text>
      </View>
    );
  }
}
