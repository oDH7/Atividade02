// App.js

import React from "react";
import { View, StyleSheet } from "react-native";
import CustomButton from "./components/CustomButton";

const App = () => {
  const handleLoginPress = () => {
    console.log("Log In button pressed");
  };

  const handleSignInPress = () => {
    console.log("Sign In button pressed");
  };

  const handleImagePress = () => {
    console.log("Image button pressed");
  };

  return (
    <View style={styles.container}>
      <CustomButton onPress={handleLoginPress} text="Log In" />
      <CustomButton onPress={handleSignInPress} text="Sign In" />
      <CustomButton
        onPress={handleImagePress}
        imageSource={require("./assets1/images.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});

export default App;
