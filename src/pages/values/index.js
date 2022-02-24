import { Alert, Dimensions, Image, Text, View } from "react-native";
import React from "react";
import Content from "../../components/content";
import ChurrasTitle from "../../components/title";
import Style from "./styles";

import Crianca from "../../assets/images/imagem-crianca.png";
import Mulher from "../../assets/images/imagem-mulher.png";
import Homem from "../../assets/images/imagem-homem.png";
import ButtonComponent from "../../components/button";

function Values({ route, navigation }) {
  const height = (Dimensions.get("window").height / 100) * 69;

  const { totalByPerson, totalMen, totalWomen } = route.params;

  const next = () => {
    Alert.alert("Nosso ciclo se encerra, te aguardo pro próximo churrasco!!");
    navigation.navigate("Home");
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
        <ChurrasTitle text="Valor por grupo" />

        <View style={Style.container}>
          <Image style={Style.img} source={Homem} />
          <Text style={Style.textStyle}>R$ {totalMen}</Text>
        </View>

        <View style={Style.container}>
          <Image style={Style.img} source={Mulher} />
          <Text style={Style.textStyle}>R$ {totalWomen}</Text>
        </View>

        <View style={Style.container}>
          <Text style={Style.byPerson}>Por pessoa: </Text>
          <Text style={Style.textStyle}>R$ {totalByPerson}</Text>
        </View>

        <ButtonComponent title="Churrasco feito!" next={next} />
      </View>
    </Content>
  );
}

export default Values;
