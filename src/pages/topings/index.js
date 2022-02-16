import { ImageBackground, Text } from "react-native";
import React, {Component} from 'react';

import Content from "../../components/content";
import ChurrasTitle from "../../components/title";
import ButtonComponent from "../../components/button";



import Style from "./styles";

function Topings() {
  return (
    <Content>
     <ChurrasTitle style ={Style.title_style} text='Adicionais:'>
         
         </ChurrasTitle>
   
         <ButtonComponent  title="Add ao pedido"/>
      
    </Content>
  );
}

export default Topings;
