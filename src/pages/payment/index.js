import { Dimensions, FlatList, Text, View } from "react-native";
import React from "react";

import Content from "../../components/content";
import ChurrasTitle from "../../components/title";
import ButtonComponent from "../../components/button";

import Style from "./styles";
import Item from "../../components/item";

function Payment() {
  const height = (Dimensions.get("window").height / 100) * 69;

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
          data={[
            { key: "Devin" },
            { key: "Dan" },
            { key: "Dominic" },
            { key: "Jackson" },
            { key: "James" },
            { key: "Joel" },
            { key: "John" },
            { key: "Jillian" },
            { key: "Jimmy" },
            { key: "Julie" },
            { key: "Julie" },
            { key: "Julie" },
            { key: "Julie" },
            { key: "Julie" },
            { key: "Julie" },
          ]}
          renderItem={({ item }) => <Item />}
        />

        <ButtonComponent title="Confirmar pedido" text="Values" />
      </View>
    </Content>
  );
}

export default Payment;
