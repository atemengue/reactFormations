import React, { useContext } from "react";
import { Button, Input } from "react-native-elements";
import { Context as LocationContext } from "../context/LocationContext";
import Spacer from "./Spacer";

const TrackForm = () => {
  const {
    startRecording,
    stopRecording,
    changeName,
    state: { name, recording, locations }
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
      <Spacer>
        {recording ? (
          <Button title="Stop" onPress={stopRecording} />
        ) : (
          <Button title="Start Recording" onPress={startRecording} />
        )}
      </Spacer>
      <Spacer>
        {!recording && locations.length ? <Button title="Save Track" /> : null}
      </Spacer>
    </>
  );
};

export default TrackForm;
