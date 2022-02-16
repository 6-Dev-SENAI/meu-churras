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
    height: 28,
    width: 150,
    left: 10,
    top: 75
  },
  containergeral:{
    display:"flex",
    flexDirection:"column",
    height: 1000, 
    width: 1000
  },
  boxconteudo:{
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: 300,
    height: 50
  },
  img:{
    width: 50,
    height: 50
  },
  sinal:{
    padding: 1,
    borderRadius:15,
    backgroundColor:"#CACACA",
    width:20,
    textAlign:"center",
    fontWeight:"bold"
  }

});

export default Style;
