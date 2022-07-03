import { StyleSheet, View, Text, Dimensions, Platform } from "react-native";
import React from "react";

export default function Input(props) {
 
  return (
    <View>
      <Text style={styles.input}>{props.value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    paddingTop: Platform.OS !== "web" ? Dimensions.get('screen').height / 4 : "3.8%",
    paddingBottom: 20,
    paddingRight: 20,
    paddingLeft: 20,
    borderBottomColor: "#fff",
    fontSize: 60,
    textAlign: "right",
    color: '#fffc'
  },
});
