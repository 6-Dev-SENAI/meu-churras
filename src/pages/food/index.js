import { Text, Image, View, Dimensions, Alert } from "react-native";
import React, { useState } from "react";

import Content from "../../components/content";
import ButtonComponent from "../../components/button";
import ChurrasTitle from "../../components/title";
import Styles from "./styles";
import boi from "../../assets/images/BOI.png";
import galinha from "../../assets/images/galinha.png";
import porco from "../../assets/images/porco.png";

import CheckBox from "@react-native-community/checkbox";

import TotalFood from "./service";

function Food({ route, navigation }) {
  const [bovino, setBovino] = useState(false);
  const [suino, setSuino] = useState(false);
  const [ave, setAve] = useState(false);

  const people = route.params.people;

  const next = () => {
    if (!bovino && !suino && !ave)
      Alert.alert(
        "Por favor, selecione pelo menos um tipo de carne ao churrasco!"
      );
    else {
      let food = {
        cow: {
          name: "Carne Bovina",
          values: bovino
            ? TotalFood("cow", people)
            : {
                weight: 0,
                price: 0,
              },
          unity: "kg",
        },
        pig: {
          name: "Linguiça Suína",
          values: suino
            ? TotalFood("pig", people)
            : {
                weight: 0,
                price: 0,
              },
          unity: "kg",
        },
        chick: {
          name: "Coxinha de Frango",
          values: ave
            ? TotalFood("chick", people)
            : {
                weight: 0,
                price: 0,
              },
          unity: "kg",
        },
      };

      let paying = people.men + people.women;

      navigation.navigate("Topings", {
        paying,
        food,
      });
    }
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
