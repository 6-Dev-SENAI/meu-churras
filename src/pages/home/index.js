import { Dimensions, ImageBackground, Text } from "react-native";
import React from "react";

import Content from "../../components/content";

import home from "../../assets/images/home.png";
import ButtonComponent from "../../components/button";

import Style from "./styles";

function Home({ navigation }) {
  const next = () => {
    navigation.navigate("People");
  };

  const height = (Dimensions.get("window").height / 100) * 42;
  const width = (Dimensions.get("window").width / 100) * 90;

  return (
    <Content>
      <ImageBackground
        source={home}
        style={{
          width: width,
          height: height,
          justifyContent: "center",
          alignItems: "center",
          marginVertical: 65,
        }}
      >
        <Text style={Style.presentation}>Bem vindo ao App do seu CHURRAS!</Text>
      </ImageBackground>
      <ButtonComponent next={next} />
    </Content>
  );
}

export default Home;
