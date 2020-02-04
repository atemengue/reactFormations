import React from "react";
import { Button, StyleSheet, Text } from "react-native";

const SignInScreen = ({ navigation }) => {
  return (
    <>
      <Text style={styles.text}>SignInScreen</Text>

      <Button
        onPress={() => navigation.navigate("Signup")}
        title="Go to sign Up"
      />
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 26
  }
});

export default SignInScreen;
