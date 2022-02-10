import {
  SafeAreaView,
  View,
  Image,
  StyleSheet,
  ImageBackground,
  Text,
} from "react-native";
import Content from "../../components/content";

import home from "../../Assets/img/home.png";
import ButtonComponent from "../../components/button";

function Home() {
  return (
    <Content>
      <ImageBackground source={home} style={style.backimg}>
        <Text style={style.presentation}>Bem vindo ao App do seu CHURRAS!</Text>
      </ImageBackground>
      <ButtonComponent/>
    </Content>
  );
}

export default Home;

const style = StyleSheet.create({
  presentation: {
    fontSize: 35,
    fontWeight: "bold",
    textAlign:"center",
    width:250,


  },

  backimg: {
    width: 300,
    height: 300,
    justifyContent: "center",
    alignItems:"center",
    margin:"auto",

  },
});
