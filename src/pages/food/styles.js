import { StyleSheet } from "react-native";

const Style = StyleSheet.create({
  geral: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",

    height: 580,
  },
  organize: {
    flexDirection: "row",
    width: 300,
    height: 75,
    alignItems: "center",
    justifyContent: "space-between",
  },
  texto: {
    justifyContent: "center",
    alignItems: "center",
    width: 120,
    flexDirection: "column",
  },
  input: {
    height: 20,
    margin: 12,
    width: 40,
    left: 0,
    backgroundColor: "#ffff",
    flexDirection: "column",
  },
});

export default Style;
