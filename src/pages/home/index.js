import { ImageBackground, Text } from "react-native";
import React, {Component} from 'react';

import Content from "../../components/content";

import home from "../../assets/images/home.png";
import ButtonComponent from "../../components/button";

import Style from "./styles";

function Home() {
  return (
    <Content>
      <ImageBackground source={home} style={Style.backimg}>
        <Text style={Style.presentation}>Bem vindo ao App do seu CHURRAS!</Text>
      </ImageBackground>
      <ButtonComponent />
    </Content>
  );
}

export default Home;
