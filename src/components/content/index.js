import { Image, SafeAreaView, View } from "react-native";

import Header from "../header";

import Styles from "./styles";

import BackgroundIMG from "../../Assets/background.png";

export default function Content(props) {
  return (
    <SafeAreaView style={Styles.container}>
      <Header />
      <View style={{justifyContent: "center", alignItems: "center"}}>{props.children}</View>
      <Image style={Styles.img} source={BackgroundIMG} />
    </SafeAreaView>
  );
}
