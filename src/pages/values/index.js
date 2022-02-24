import { Dimensions, Image, Text, View } from "react-native";
import React from "react";
import Content from "../../components/content";
import ChurrasTitle from "../../components/title";
import Style from "./styles";

import Crianca from "../../assets/images/imagem-crianca.png";
import Mulher from "../../assets/images/imagem-mulher.png";
import Homem from "../../assets/images/imagem-homem.png";

function Values() {
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
        <ChurrasTitle text="Valor por Pessoa" />

        <View style={Style.container}>
          <Image style={Style.img} source={Crianca} />
          <Text style={Style.textStyle}>R$ 19,90</Text>
        </View>

        <View style={Style.container}>
          <Image style={Style.img} source={Mulher} />
          <Text style={Style.textStyle}>R$ 19,90</Text>
        </View>

        <View style={Style.container}>
          <Image style={Style.img} source={Homem} />
          <Text style={Style.textStyle}>R$ 19,90</Text>
        </View>
      </View>
    </Content>
  );
}

export default Values;
