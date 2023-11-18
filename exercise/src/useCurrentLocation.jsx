import { useState } from "react";

export function useCurrentLocation() {
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [status, setStatus] = useState();
  const [error, setError] = useState();
  function goFindMe() {
    function success(position) {
      console.log(position);
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    }
    function error() {
      console.log("error");
      setError("Error, Unable to find position");
    }
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser");
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }

  return {
    findMe: goFindMe,
    latitude,
    longitude,
    status,
    error,
  };
}
