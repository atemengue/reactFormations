import React, { useContext } from "react";
import { Button, Input } from "react-native-elements";
import { Context as LocationContext } from "../context/LocationContext";
import Spacer from "./Spacer";

const TrackForm = () => {
  const {
    startRecording,
    stopRecording,
    changeName,
    state: { name, recording }
  } = useContext(LocationContext);
  return (
    <>
      <Spacer>
        <Input
          value={name}
          onChangeText={changeName}
          placeholder="Entrer name"
        />
      </Spacer>
      {recording ? (
        <Button title="StopRecording" onPress={stopRecording} />
      ) : (
        <Button title="Start Recording" onPress={startRecording} />
      )}
    </>
  );
};

export default TrackForm;
