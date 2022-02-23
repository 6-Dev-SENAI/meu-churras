import { ImageBackground, Text, TextInput, Image, View } from "react-native";
import React from "react";

import Content from "../../components/content";
import ButtonComponent from "../../components/button";
import ChurrasTitle from "../../components/title";
import Styles from "./styles";
import TextoInput from "../../components/input";
import boi from "../../assets/images/BOI.png";
import galinha from "../../assets/images/galinha.png";
import porco from "../../assets/images/porco.png";
import ButtonAdd from "../../components/buttonAdd";

function Food() {
  return (
    <Content>
      <ChurrasTitle
        style={Styles.title_style}
        text="Insira o tipo e a quantidade de carne:"
      ></ChurrasTitle>

      <View style={Styles.geral}>
        <View style={Styles.inputBox}>
          <View style={Styles.organize}>
            <Image source={boi} />
            <Text style={Styles.texto}>Carne Bovina </Text>
            <TextoInput />
            <Text>kg</Text>
          </View>

          <ButtonAdd />
        </View>
        <View style={Styles.inputBox}>
          <View style={Styles.organize}>
            <Image source={galinha} />
            <Text style={Styles.texto}>Aves </Text>
            <TextoInput />
            <Text>kg</Text>
          </View>

          <ButtonAdd />
        </View>
        <View style={Styles.inputBox}>
          <View style={Styles.organize}>
            <Image source={porco} />
            <Text style={Styles.texto}>Carne Suína </Text>
            <TextoInput />
            <Text>kg</Text>
          </View>

          <ButtonAdd />
        </View>
      </View>

      <ButtonComponent title="Avançar" text="Payment" />
    </Content>
  );
}

export default Food;
