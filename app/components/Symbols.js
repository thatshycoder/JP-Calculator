import { Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function Symbols(props) {

  const mathOperations = {
    addition: "+",
    substraction: "-",
    division: "/",
    multiplication: "*",
    deletion: "DEL",
  };

  const handleOperatorInput = (operator) => {
    props.setUserInput({
      firstInput: props.userInput.firstInput,
      secondInput: props.userInput.secondInput,
      operator: operator,
    });
  };

  return Object.keys(mathOperations).map((operator, index) => {
    return (
      <TouchableOpacity
        key={index}
        onPress={() => handleOperatorInput(operator)}
        style={styles.symbolButton}
      >
        <Text style={styles.symbolButtonText}>{mathOperations[operator]}</Text>
      </TouchableOpacity>
    );
  });
}

const styles = StyleSheet.create({
  symbolButton: {
    width: Dimensions.get("window").width / 6,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
  },
  symbolButtonText: {
    fontSize: 24,
    fontWeight: "700",
    color: "#ffffff",
  },
});
