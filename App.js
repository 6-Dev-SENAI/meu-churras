import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ButtonComponent from "./src/components/button";

export default function App() {
  return (
    <View style={styles.container}>
      <ButtonComponent title='Churrascar'  />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
