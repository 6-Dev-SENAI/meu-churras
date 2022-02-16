import { ImageBackground, Text } from "react-native";
import React, {Component} from 'react';

import Content from "../../components/content";
import ButtonComponent from "../../components/button";
import ChurrasTitle from "../../components/title"


import Style from "./styles";

function Food() {
  return (
    <Content>
      <ChurrasTitle style ={Style.title_style} text='Inserira o tipo e a quantidade de carne:'>
         
         </ChurrasTitle>
   
         <ButtonComponent  title="Avançar"/>
    </Content>
  );
}

export default Food;
