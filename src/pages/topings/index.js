import React from "react";

import Content from "../../components/content";
import ChurrasTitle from "../../components/title";
import ButtonComponent from "../../components/button";
import Topping from "../../components/topping";

import Style from "./styles";

import { ScrollView, View } from "react-native";

import Imgs from "./img";

function Topings() {
  return (
    <Content>
      <View style={Style.container}>
        <ChurrasTitle text="Adicionais:" />

        <ScrollView style={Style.scrollContainer} horizontal={false}>
          <Topping img={Imgs[0]} title="Guaraná" price={5.79} unity="2L" />
          <Topping img={Imgs[1]} title="Coca-Cola" price={8.49} unity="2L" />
          <Topping img={Imgs[2]} title="Suco" price={7.79} unity="1L" />
          <Topping img={Imgs[3]} title="Corona" price={7.99} unity="1un" />
          <Topping img={Imgs[4]} title="Heineken" price={5.39} unity="1un" />
          <Topping img={Imgs[5]} title="Energético" price={6.59} unity="1un" />
          <Topping img={Imgs[6]} title="Pão de Alho" price={9.29} unity="1pct" />
          <Topping img={Imgs[7]} title="Sal Grosso" price={3.39} unity="1pct" />
          <Topping img={Imgs[8]} title="Carvão" price={13.9} unity="2kg" />
          <Topping img={Imgs[9]} title="Petiscos" price={22.96} unity="1pct" />
          <Topping img={Imgs[10]} title="Acendedor" price={12.6} unity="1pct" />
          <Topping img={Imgs[11]} title="Gelo" price={11.0} unity="1pct" />
        </ScrollView>

        <View style={Style.btnContainer}>
          <ButtonComponent title="Add ao pedido" />
        </View>
      </View>
    </Content>
  );
}

export default Topings;
