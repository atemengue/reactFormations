import React, { useContext } from "react";
import { Text } from "react-native-elements";
import { SafeAreaView, withNavigationFocus } from "react-navigation";
import Map from "../components/Map";
import TrackForm from "../components/TrackForm";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/UseLocation";
import "../_mockLocation";

const TrackCreateScreen = ({ isFocused }) => {
  const { addLocation, state } = useContext(LocationContext);

  const [err] = useLocation(isFocused, location => {
    addLocation(location, state.recording);
  });
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h2>Create a Track</Text>
      <Map />
      {err ? <Text>Please enable location services</Text> : null}
      <TrackForm />
    </SafeAreaView>
  );
};

export default withNavigationFocus(TrackCreateScreen);
