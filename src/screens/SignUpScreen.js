import React, { useContext, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { NavigationEvents } from "react-navigation";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { Context as AuthContext } from "../context/AuthContext";

const SignUpScreen = () => {
  const { state, signup, clearErrorMessage, tryLocalSignin } = useContext(
    AuthContext
  );

  useEffect(() => {
    tryLocalSignin();
  }, []);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <AuthForm
        headerText="Sign Up for Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign Up"
        // onSubmit={({ email, password}) => signup({ email, password})}
        onSubmit={signup}
      />
      <NavLink
        text="Already have a account? Sign in instead"
        routeName="Signin"
      />
    </View>
  );
};

SignUpScreen.navigationOptions = () => {
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

export default SignUpScreen;
