import { ImageBackground, Text } from "react-native";
import React, { Component } from 'react';


import Content from "../../components/content";
import ChurrasTitle from "../../components/title";
import ButtonComponent from "../../components/button";




import Style from "./styles";

function People() {
  return (
    <Content>
      
      <ChurrasTitle style ={Style.title_style} text='Inserir a quantidade de pessoas:'>
         
      </ChurrasTitle>

      <ButtonComponent  title="Avançar"/>

      
    </Content>
  );
}

export default People;
