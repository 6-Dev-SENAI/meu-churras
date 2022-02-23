import { Text, Image, View, Dimensions } from "react-native";
import React, { useState } from "react";

import Content from "../../components/content";
import ButtonComponent from "../../components/button";
import ChurrasTitle from "../../components/title";
import Styles from "./styles";
import boi from "../../assets/images/BOI.png";
import galinha from "../../assets/images/galinha.png";
import porco from "../../assets/images/porco.png";

import CheckBox from "@react-native-community/checkbox";

function Food({ route, navigation }) {
  const [bovino, setBovino] = useState(false);
  const [suino, setSuino] = useState(false);
  const [ave, setAve] = useState(false);

  const { children, women, men } = route.params;

  const next = () => {
    navigation.navigate("Topings", {
      children,
      women,
      men,
      food: {
        bovino,
        suino,
        ave,
      },
    });
  };

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
        <ChurrasTitle
          style={Styles.title_style}
          text="Insira o tipo e a quantidade de carne:"
        ></ChurrasTitle>

        <View style={Styles.organize}>
          <Image
            source={boi}
            style={{
              height: 50,
              width: 60,
            }}
          />
          <Text style={Styles.texto}>Carne Bovina </Text>
          <CheckBox
            disabled={false}
            value={bovino}
            onValueChange={(newValue) => setBovino(newValue)}
            tintColors={{ true: "#800000", false: "#b3b3b3" }}
          />
        </View>

        <View style={Styles.organize}>
          <Image
            source={galinha}
            style={{
              height: 55,
              width: 55,
            }}
          />
          <Text style={Styles.texto}>Aves </Text>
          <CheckBox
            disabled={false}
            value={ave}
            onValueChange={(newValue) => setAve(newValue)}
            tintColors={{ true: "#800000", false: "#b3b3b3" }}
          />
        </View>

        <View style={Styles.organize}>
          <Image
            source={porco}
            style={{
              height: 50,
              width: 75,
            }}
          />
          <Text style={Styles.texto}>Carne Suína </Text>
          <CheckBox
            disabled={false}
            value={suino}
            onValueChange={(newValue) => setSuino(newValue)}
            tintColors={{ true: "#800000", false: "#b3b3b3" }}
          />
        </View>
        <ButtonComponent title="Avançar" next={next} />
      </View>
    </Content>
  );
}

export default Food;
