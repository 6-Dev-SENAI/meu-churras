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

  let subtotal = 0;

  data.forEach((item) => {
    subtotal += parseFloat(item.values.price);
  });

  const next = () => {
    const totalByPerson = subtotal / paying.totalPaying;
    const totalMen = totalByPerson * paying.men;
    const totalWomen = totalByPerson * paying.women;

    navigation.navigate("Values", {
      totalByPerson: totalByPerson.toFixed(2),
      totalMen: totalMen.toFixed(2),
      totalWomen: totalWomen.toFixed(2),
    });
  };

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
        <ChurrasTitle text="Lista de valores:" />

        <FlatList
          data={data}
          keyExtractor={(item, index) => `${item.name}/${index}`}
          renderItem={({ item }) => (
            <Item
              title={item.name}
              weight={item.values.weight}
              price={item.values.price}
              unity={item.unity}
            />
          )}
        />

        <View style={Style.subtotalContainer}>
          <View style={Style.line}></View>
          <Text style={Style.subtotal}>Subtotal: R$ </Text>
          <Text style={Style.value}>{subtotal.toFixed(2)}</Text>
        </View>

        <ButtonComponent title="Confirmar pedido" next={next} />
      </View>
    </Content>
  );
}

export default Payment;
