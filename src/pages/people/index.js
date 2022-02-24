import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  Dimensions,
} from "react-native";
import React, { useState } from "react";

import Content from "../../components/content";
import ChurrasTitle from "../../components/title";
import ButtonComponent from "../../components/button";
import crianca from "../../assets/images/imagem-crianca.png";
import homem from "../../assets/images/imagem-homem.png";
import Mulher from "../../assets/images/imagem-mulher.png";

import Style from "./styles";

function People({ navigation }) {
  const [kid, setKid] = useState(0);
  const [men, setMen] = useState(0);
  const [women, setWomen] = useState(0);

  async function downItem(value, fn) {
    if (value == 0) {
      Alert.alert("Limite mínimo de 0 já selecionado!");
    } else {
      fn(value - 1);
    }
  }

  async function upItem(value, fn) {
    fn(value + 1);
  }

  const next = () => {
    if (women === 0 && men === 0) {
      if (kid !== 0) {
        Alert.alert("Por favor, chame um adulto para continuar!");
      } else {
        Alert.alert("Por favor, selecione pelo menos uma pessoa ao churrasco!");
      }
    } else {
      navigation.navigate("Food", {
        people: {
          men,
          women,
          kid,
        },
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
          style={Style.title_style}
          text="Inserir a quantidade de pessoas:"
        />

        <View style={Style.boxconteudo}>
          <Image style={Style.img} source={homem} />
          <TouchableOpacity onPress={() => downItem(men, setMen)}>
            <Text style={Style.sinal}>-</Text>
          </TouchableOpacity>
          <Text style={Style.text}>{men}</Text>
          <TouchableOpacity onPress={() => upItem(men, setMen)}>
            <Text style={Style.sinal}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={Style.boxconteudo}>
          <Image style={Style.img} source={Mulher} />
          <TouchableOpacity onPress={() => downItem(women, setWomen)}>
            <Text style={Style.sinal}>-</Text>
          </TouchableOpacity>
          <Text style={Style.text}>{women}</Text>
          <TouchableOpacity onPress={() => upItem(women, setWomen)}>
            <Text style={Style.sinal}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={Style.boxconteudo}>
          <Image style={Style.img} source={crianca} />
          <TouchableOpacity onPress={() => downItem(kid, setKid)}>
            <Text style={Style.sinal}>-</Text>
          </TouchableOpacity>
          <Text style={Style.text}>{kid}</Text>
          <TouchableOpacity onPress={() => upItem(kid, setKid)}>
            <Text style={Style.sinal}>+</Text>
          </TouchableOpacity>
        </View>

        <ButtonComponent title="Avançar" next={next} />
      </View>
    </Content>
  );
}

export default People;
