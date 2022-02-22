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
  paddingBottom:10,
    
  },
  containergeral:{
    display:"flex",
    flexDirection:"column",
    height: 600, 
    width: 400
  },
  boxconteudo:{
    flexDirection: "row",
    justifyContent: "space-between",
    width: 200,
    height: 150, 
  
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
