import { Dimensions, FlatList, Text, View } from "react-native";
import React from "react";

import Content from "../../components/content";
import ChurrasTitle from "../../components/title";
import ButtonComponent from "../../components/button";

import Style from "./styles";
import Item from "../../components/item";

function Payment({ route, navigation }) {
  const height = (Dimensions.get("window").height / 100) * 69;

  const { paying, food, topings } = route.params;

  const foods = Object.keys(food).map((item) => food[item]);
  const toping = Object.keys(topings).map((item) => topings[item]);

  const data = foods.concat(toping);

  return (
    <Content>
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",

          height: height,
        }}
      >
        <ChurrasTitle text="Lista e valores:" />

        <FlatList
          data={data}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <Item
              title={item.name}
              weight={item.values.weight}
              price={item.values.price}
              unity={item.unity}
            />
          )}
        />

        <ButtonComponent title="Confirmar pedido" text="Values" />
      </View>
    </Content>
  );
}

export default Payment;
