import { StyleSheet } from "react-native";

const Style = StyleSheet.create({
  containergeral: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",

    height: 580,
  },
  boxconteudo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 200,
    height: 80,
  },
  img: {
    width: 50,
    height: 50,
  },
  sinal: {
    padding: 3,
    borderRadius: 15,
    backgroundColor: "#CACACA",
    width: 25,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default Style;
