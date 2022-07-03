import {
  StyleSheet,
  Text,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";

export default function Numbers(props) {
  const inputs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, ".", "="];

  const handleInput = (input) => {
    if (input === "=") {
      return props.calculate();
    }

    storeInput(input);
  };

  const storeInput = (input) => {
    // store user second input
    if (props.userInput.firstInput !== "" && props.userInput.operator !== "") {
      return props.setUserInput({
        firstInput: props.userInput.firstInput,
        secondInput:
          props.userInput.secondInput < 10000000
            ? props.userInput.secondInput + input
            : props.userInput.secondInput,
        operator: props.userInput.operator,
      });
    } else {
      // store user first input
      props.setUserInput({
        firstInput:
          props.userInput.firstInput < 10000000
            ? props.userInput.firstInput + input
            : props.userInput.firstInput,
        secondInput: props.userInput.secondInput,
        operator: props.userInput.operator,
      });
    }

    // check if input is a decimal point and store correctly
    if (props.userInput.firstInput !== "" && input == ".") {
      let firstInput = props.userInput.firstInput.toString();

      return props.setUserInput({
        firstInput:
          props.userInput.firstInput + (firstInput.includes(".") ? "" : "."),
        secondInput: "",
        operator: props.userInput.operator,
      });
    }
  };

  return inputs.map((input, index) => {
    return (
      <TouchableOpacity
        key={index}
        style={styles.inputButton}
        onPress={() => {
          handleInput(input);
        }}
      >
        <ImageBackground resizeMode="cover" style={styles.bodyBackgroundImage}>
          <Text style={styles.inputButtonText}>{input}</Text>
        </ImageBackground>
      </TouchableOpacity>
    );
  });
}

const styles = StyleSheet.create({
  bodyBackgroundImage: {
    borderRadius: "50%",
  },
  inputButton: {
    width: Dimensions.get("window").width / 4 - 4,
    height: Dimensions.get("window").height / 9 - 4,
    justifyContent: "center",
    alignItems: "center",
    /*backgroundColor: "#222222eb",*/
    flexGrow: 1,
    margin: 5,
  },
  inputButtonText: {
    fontSize: 40,
    color: "#e4e4e4",
    textShadowColor:  '#2f265d',
    textShadowOffset: { width: 3, height: 1 },
    textShadowRadius: 0,
  },
});
