import { Alert, TouchableOpacity, Text } from "react-native";

import Style from "./styles";

export default function ButtonComponent(props) {
  const title = props.title || "Churrascar";

  return (
    <TouchableOpacity onPress={() => Alert.alert(title)} style={Style.button}>
      <Text style={Style.text}>{title}</Text>
    </TouchableOpacity>
  );
}
