import { Button, ImageBackground, Text, View, Image, TouchableOpacity, } from "react-native";
import React, { Component } from "react";

import Content from "../../components/content";
import ChurrasTitle from "../../components/title";
import ButtonComponent from "../../components/button";
import crianca from "../../assets/images/imagem-crianca.png";
import homem from "../../assets/images/imagem-homem.png";
import Mulher from "../../assets/images/imagem-mulher.png";

import Styles from "../../components/header/styles";
import Style from "./styles"

function People() {
  return (
    <Content>
      <ChurrasTitle
        style={Style.title_style}
        text="Inserir a quantidade de pessoas:"
      />

      <View style={Styles.containergeral}>

        <View style={Style.boxconteudo}>
          <Image style={Style.img} source={crianca} />
          <TouchableOpacity onPress={() => Alert.alert("Left button pressed")}>
            <Text style={Style.sinal}>-</Text>
          </TouchableOpacity>
          <Text>0</Text>
          <TouchableOpacity onPress={() => Alert.alert("Right button pressed")}>
            <Text style={Style.sinal}>+</Text>
          </TouchableOpacity>  
        </View>
        
        <View style={Style.boxconteudo}>
          <Image style={Style.img} source={Mulher} />
          <TouchableOpacity onPress={() => Alert.alert("Left button pressed")}>
            <Text style={Style.sinal}>-</Text>
          </TouchableOpacity>
          <Text>0</Text>
          <TouchableOpacity onPress={() => Alert.alert("Right button pressed")}>
            <Text style={Style.sinal}>+</Text>
          </TouchableOpacity>  
        </View>


        <View style={Style.boxconteudo}>
          <Image style={Style.img} source={homem} />
          <TouchableOpacity onPress={() => Alert.alert("")}>
            <Text style={Style.sinal}>-</Text>
          </TouchableOpacity>
          <Text>0</Text>
          <TouchableOpacity onPress={() => Alert.alert("")}>
            <Text style={Style.sinal}>+</Text>
          </TouchableOpacity>  
        </View>

      </View>

      <ButtonComponent title="Avançar" text="Food" />
    </Content>
  );
}

export default People;
