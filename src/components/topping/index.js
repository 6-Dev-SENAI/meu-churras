import React, { useState } from "react";

import { Alert, Image, Text, TouchableOpacity, View } from "react-native";

import Style from "./style";

export default function Topping(props) {
  const img = props.img;
  const title = props.title || "Item";
  const price = props.price || 0;
  const unity = props.unity || null;

  const state = props.state;

  const [quantity, setQuantity] = useState(0);
  const [priceDisplay, setPriceDisplay] = useState(price * quantity);

  const handleUpQuantity = () => {
    let newQuantity = quantity + 1;
    let newPrice = newQuantity * price;

    setQuantity(newQuantity);
    setPriceDisplay(newPrice);
    state.setState(newPrice);
  };

  const handleDownQuantity = () => {
    if (quantity == 0) {
      Alert.alert("Limite mínimo de 0 já selecionado!");
    } else {
      let newQuantity = quantity - 1;
      let newPrice = newQuantity * price;

      setQuantity(newQuantity);
      setPriceDisplay(newPrice);
      state.setState(newPrice);
    }
  };

  return (
    <View style={Style.container}>
      <Image style={Style.img} source={img} />
      <Text style={Style.title}>
        {title} {unity}
      </Text>
      <View style={Style.btnContainer}>
        <TouchableOpacity
          style={Style.button}
          onPress={() => handleDownQuantity()}
        >
          <Text>-</Text>
        </TouchableOpacity>
        <Text style={Style.internalValue}>{quantity}</Text>
        <TouchableOpacity
          style={Style.button}
          onPress={() => handleUpQuantity()}
        >
          <Text>+</Text>
        </TouchableOpacity>
      </View>
      <Text style={Style.value}>R$ {priceDisplay.toFixed(2)}</Text>
    </View>
  );
}
