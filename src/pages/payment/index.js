import { ImageBackground, Text } from "react-native";
import React, {Component} from 'react';

import Content from "../../components/content";
import ChurrasTitle from "../../components/title"
import ButtonComponent from "../../components/button";




import Style from "./styles";

function Payment() {
  return (
    <Content>
      <ChurrasTitle style ={Style.title_style} text='Lista e valores:'>
         
         </ChurrasTitle>
   
         <ButtonComponent  title="Confirmar pedido"/>
     
    </Content>
  );
}

export default Payment;
