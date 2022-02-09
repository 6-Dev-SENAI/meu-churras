import { Alert, TouchableOpacity, Text, View } from "react-native";
import { StyleSheet } from "react-native";


export default function ButtonComponent(props) {

    const title = props.title || "Churrascar"
    
  return (
    <TouchableOpacity onPress={() => Alert.alert(title)} style={style.botao}>
        <Text style={style.text}>
            {title}
        </Text>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
    botao: {
        height: 30,
        width: 145,
        backgroundColor: "#800000"
    },
    text:{

        
        height: 30,
        width: 145,
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "#ffffff",
        fontSize: 20,
        padding: 0,
        margin: 0
    }
})


