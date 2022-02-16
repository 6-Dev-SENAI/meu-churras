import { SafeAreaView, Image } from "react-native";
import React, {Component} from 'react';

import Styles from "./styles";

import Logo from "../../assets/images/logo.png";

function Header() {
  return (
    <SafeAreaView style={Styles.header}>
      <Image source={Logo} style={Styles.img} />
    </SafeAreaView>
  );
}

export default Header;
