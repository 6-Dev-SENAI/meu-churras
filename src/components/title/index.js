import { Text } from "react-native";
import React from "react";

import Styles from "./styles";

const ChurrasTitle = (props) => {
  return <Text style={Styles.title_style}>{props.text}</Text>;
};

export default ChurrasTitle;
