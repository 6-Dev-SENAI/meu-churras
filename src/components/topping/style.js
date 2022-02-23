import { StyleSheet } from "react-native";

const Style = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: 400,
    height: 50,
    marginBottom: 5,
  },
  img: {
    height: 45,
    width: 45,
  },
  title: {
    color: "#FFF",
    fontSize: 15,
    width: 110,
  },
  value: {
    color: "#fff",
    fontSize: 12,
    width: 60,
  },
  internalValue: {
    color: "#fff",
    fontSize: 12,
  },
  button: {
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    height: 25,
    width: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  btnContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: 75,
  },
});

export default Style;
