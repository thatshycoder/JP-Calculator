import { StyleSheet, View, ImageBackground, Platform } from "react-native";
import React, { useState, useEffect } from "react";
import Input from "../components/Input";
import Numbers from "../components/Numbers";
import Symbols from "../components/Symbols";

export default function Calculator() {
  const [userInput, setUserInput] = useState({
    firstInput: "",
    secondInput: "",
    operator: "",
  });

  const [result, setResult] = useState("");

  const getInput = () => {
    if (result !== "") {
      return result;
    } else {
      if (userInput.secondInput !== "") {
        return userInput.secondInput;
      } else {
        return userInput.firstInput;
      }
    }
  };

  const resetUserInput = (result) => {
    setUserInput({
      firstInput: result,
      secondInput: "",
      operator: "",
    });

    setResult("");
  };

  const eraseInput = () => {
    if (userInput.firstInput !== "") {
      setUserInput({
        firstInput: userInput.firstInput.toString().slice(0, -1),
        secondInput: userInput.secondInput,
        operator: userInput.operator,
      });
    } else {
      setUserInput({
        firstInput: userInput.secondInput,
        secondInput: userInput.secondInput.toString().slice(0, -1),
        operator: userInput.operator,
      });
    }
  };

  const formatResult = (result) => {
    return result.toLocaleString();
  };

  const calculate = () => {
    const firstInput = parseFloat(userInput.firstInput);
    const secondInput = parseFloat(userInput.secondInput);

    if (userInput.operator !== "") {
      let result;

      try {
        switch (userInput.operator) {
          case "addition":
            result = formatResult(firstInput + secondInput);
            break;
          case "substraction":
            result = formatResult(firstInput - secondInput);
            break;
          case "division":
            result = formatResult(firstInput / secondInput);
            break;
          case "multiplication":
            result = formatResult(firstInput * secondInput);
            break;
        }

        setResult(result);
      } catch (error) {
        alert(error);
      }
    }
  };

  useEffect(() => {
    // reset input whenever calculation result is updated
    if (result !== "") {
      resetUserInput(result);
    }

    // clear inputs whenever the del button is pressed
    if (userInput.operator === "deletion") {
      resetUserInput("");
    }
  });

  return (
    <ImageBackground
      source={require("../assets/jp2.png")}
      resizeMode="cover"
      style={styles.imageBg}
    >
      <View style={styles.calculatorContainer}>
        {/* TODO: Fix error undefined is not an object when handling touch */}
        <View
          style={styles.inputArea}
          onTouchStart={(e) => (this.touchX = e.nativeEvent.pageX)}
          onTouchEnd={(e) => {
            if (this.touchX - e.nativeEvent.pageX < 20) eraseInput();
          }}
        >
          <Input value={getInput()} />
        </View>
        <View style={styles.numbersContainer}>
          <Numbers
            userInput={userInput}
            setUserInput={setUserInput}
            calculate={calculate}
          />
        </View>
        <View style={styles.symbolContainer}>
          <Symbols userInput={userInput} setUserInput={setUserInput} />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBg: {
    flex: 1,
  },
  calculatorContainer: {
    flex: 1,
    backgroundColor: "#111111f8",
  },
  inputArea: {
    flex: Platform.OS !== "web" ? 3 : 1,
  },
  numbersContainer: {
    flex: Platform.OS !== "web" ? 4 : 3,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  symbolContainer: {
    flex: Platform.OS !== "web" ? 1 : 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2f265d",
  },
});
