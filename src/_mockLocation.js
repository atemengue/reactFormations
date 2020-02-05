import * as Location from "expo-location";

const tenMetersWithDegrees = 0.0001;

const getLocation = increment => {
  return {
    timestamp: 10000000,
    coords: {
      speed: 0,
      heading: 0,
      accurary: 5,
      altitudeAccuracy: 5,
      altitude: 5,
      latitude: 3.86667 + increment * tenMetersWithDegrees,
      longitude: 11.51667 + increment * tenMetersWithDegrees
    }
  };
};

let counter = 0;
setInterval(() => {
  Location.EventEmitter.emit("Expo.locationChanged", {
    watchId: Location._getCurrentWatchId(),
    location: getLocation(counter)
  });

  counter++;
}, 1000);
