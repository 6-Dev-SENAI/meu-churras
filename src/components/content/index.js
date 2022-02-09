import { Image, SafeAreaView, View } from "react-native";

import Styles from "./styles";

import BackgroundIMG from "../../assets/background.png";

export default function Content(props) {
  return (
    <SafeAreaView style={Styles.container}>
      <View>{props.children}</View>
      <Image style={Styles.img} source={BackgroundIMG} />
    </SafeAreaView>
  );
}
