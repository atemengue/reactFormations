import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { Context as AuthContext } from "../context/AuthContext";

const SignInScreen = ({ navigation }) => {
  const { state, signin } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign In for Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign In"
        onSubmit={signin}
      />

      <NavLink text="Dont have a account? Sign Up instead" routeName="Signup" />
    </View>
  );
};

SignInScreen.navigationOptions = () => {
  return {
    headerShown: false
  };
};

const styles = StyleSheet.create({
  text: {
    fontSize: 26
  },
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 250
  }
});

export default SignInScreen;
