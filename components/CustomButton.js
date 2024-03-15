// components/CustomButton.js

import React from "react";
import { TouchableOpacity, Text, Image, StyleSheet } from "react-native";

const CustomButton = ({ onPress, text, imageSource }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      {imageSource && <Image source={imageSource} style={styles.image} />}
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#007bff",
    borderRadius: 5,
    marginVertical: 5,
  },
  text: {
    fontSize: 18,
    color: "#fff",
    marginLeft: 10,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },
});

export default CustomButton;
