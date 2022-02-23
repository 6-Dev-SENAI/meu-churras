import { SafeAreaView, Image } from "react-native";
import React from "react";

import Styles from "./styles";

import Logo from "../../assets/images/logo.png";

function Header() {
  return (
    <SafeAreaView>
      <Image source={Logo} style={Styles.img} />
    </SafeAreaView>
  );
}

export default Header;
