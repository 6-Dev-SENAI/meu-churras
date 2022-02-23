import { Image, SafeAreaView, View } from "react-native";
import React from "react";

import Styles from "./styles";

import BackgroundIMG from "../../assets/images/background.png";

export default function Content(props) {
  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.view}>{props.children}</View>
      <Image style={Styles.img} source={BackgroundIMG} />
    </SafeAreaView>
  );
}
