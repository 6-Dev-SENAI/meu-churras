import { Text } from "react-native";

import Styles from "./styles";

const ChurrasTitle = (props) => {
  return <Text style={Styles.title_style}>{props.text}</Text>;
};

export default ChurrasTitle;
