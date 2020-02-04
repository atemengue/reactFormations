import React from "react";
import { Button, StyleSheet, Text } from "react-native";

const SignUpScreen = ({ navigation }) => {
  return (
    <>
      <Text style={styles.text}>SignUpScreen</Text>
      <Button
        onPress={() => navigation.navigate("Signin")}
        title="Go to sign in"
      />
      <Button
        onPress={() => navigation.navigate("mainFlow")}
        title="Go to Main Flow"
      />
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 26
  }
});

export default SignUpScreen;
