import { SafeAreaView, View, StyleSheet, Image } from "react-native";

import Logo from "../../Assets/img/logo.png";

function Header() {
  return (
    <SafeAreaView style={styles.header}>
      <Image source={Logo} style={{ width: 200, height: 48 }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "rgba(128, 0, 0, 0.75)",
    alignItems: "center",
    justifyContent: "flex-end",
    height: 90,
    margin: 0,
    width: 500,
    paddingBottom: 10,
    position: "absolute",
    top: 0 ,
  },
});

export default Header;
