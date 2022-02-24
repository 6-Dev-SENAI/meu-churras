import { StyleSheet } from "react-native";

const Style = StyleSheet.create({
  subtotalContainer: {
    width: 310,
    height: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  line: {
    width: 180,

    borderBottomWidth: 1,
    borderBottomColor: "#fff",
    borderStyle: "dashed",
    borderRadius: 1,
  },
  subtotal: {
    fontWeight: "bold",
    color: "#fff",
    width: 75,
    marginLeft: 5,
  },
  value: {
    width: 50,
    textAlign: "left",

    fontWeight: "bold",
    color: "#fff",
  },
});

export default Style;
