import { ImageBackground, Text } from "react-native";
import React, {Component} from 'react';

import Content from "../../components/content";
import ChurrasTitle from "../../components/title"
import ButtonComponent from "../../components/button";
import OthersButton from "../../components/OthersButton";




import Style from "./styles";

function Payment() {
  return (
    <Content>
      <ChurrasTitle style ={Style.title_style} text='Lista e valores:'>
         
         </ChurrasTitle>
         <OthersButton text="Topings"/>
         <ButtonComponent  title="Confirmar pedido" text="Values"/>
     
    </Content>
  );
}

export default Payment;
