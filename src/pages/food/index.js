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

function Food() {
  return (
    <Content>
      <ChurrasTitle
        style={Styles.title_style}
        text="Insira o tipo e a quantidade de carne:"
      ></ChurrasTitle>

      <View style={Styles.geral}>
        
        <View style={Styles.organize}>
            <Image source={boi} />
            <Text>Carne Bovina</Text>
            <TextoInput />
        </View>


        <View style={Styles.organize}>
            <Image source={galinha} />
            <Text>Aves</Text>
            <TextoInput />
        </View>

        
        <View style={Styles.organize}>
            <Image source={porco} />
            <Text>Carne suina</Text>
            <TextoInput />
            <Text>kg</Text>
        </View>


      </View>

      <ButtonComponent title="Avançar" />
    </Content>
  );
}

export default Food;
