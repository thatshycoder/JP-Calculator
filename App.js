import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Calculator from "./app/screens/Calculator";

export default function App() {
  return (
    <View style={styles.body}>
      <Calculator />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#000",
    flex: 1,
  },
});
