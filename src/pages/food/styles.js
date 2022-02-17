import { StyleSheet } from "react-native";

const Style = StyleSheet.create({
  presentation: {
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
    width: 250,
  },

  backimg: {
    width: 300,
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
  },
  title_style: {
    height: 8,
    width: 180,
    left: 10,
    top: 75,
  },

  geral: {
    paddingLeft: 20,
    width: 900,
    height: 500,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },

  organize: {
    display: "flex",
    flexDirection: "row",
    width: 300,
    height: 75,
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  texto: {
    justifyContent: "center",
    alignItems: "center",
    width: 120,
    flexDirection: "column",
  },

  inputBox: {
    alignItems: "flex-end",
  },
});

export default Style;
