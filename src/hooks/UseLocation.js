import {
  Accuracy,
  requestPermissionsAsync,
  watchPositionAsync
} from "expo-location";
import { useEffect, useState } from "react";

export default (shouldTrack, callback) => {
  const [err, setErr] = useState(null);
  const [subscriber, setSubscriber] = useState(null);

  const startWatching = async () => {
    try {
      await requestPermissionsAsync();
      const sub = await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10
        },
        callback
      );
      setSubscriber(sub);
    } catch (e) {
      setErr(e);
    }
  };

  useEffect(() => {
    if (shouldTrack) {
      startWatching();
    } else {
      sub.remove();
      setSubscriber(null);

      return () => {
        if (subscriber) {
          subscriber.remove();
        }
      };
    }
  }, [shouldTrack]);

  return [err];
};
