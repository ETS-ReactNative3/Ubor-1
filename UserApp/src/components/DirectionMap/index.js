//AIzaSyA5VWIifqHFf9PuEpxXUUr72KgJa7lbQek
import React from "react";
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const GOOGLE_MAPS_APIKEY = 'AIzaSyA5VWIifqHFf9PuEpxXUUr72KgJa7lbQek';

const RouteMap = ({originProp, destinationProp}) => {

  const originLoc = {
    latitude: originProp.details.geometry.location.lat,
    longitude: originProp.details.geometry.location.lng,
  };

  const destinationLoc = {
    latitude: destinationProp.details.geometry.location.lat,
    longitude: destinationProp.details.geometry.location.lng,
  };
 


  return (
    <MapView
      style={{width: '100%', height: '100%'}}
      provider={PROVIDER_GOOGLE}
      initialRegion={{
        latitude: originProp.details.geometry.location.lat,
        longitude: originProp.details.geometry.location.lng,
        latitudeDelta: 0.68,
        longitudeDelta: 0.68,
      }}>
      <MapViewDirections
        origin={originLoc}
        destination={destinationLoc}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={5}
        strokeColor="black"
      />
      <Marker
        coordinate={originLoc}
        title={'Origin'}
      />
      <Marker
        coordinate={destinationLoc}
        title={"Destination"}
      />
    </MapView>
  );
};

RouteMap.prototype = {
  originProp: Number,
  destinationProp: Number
}

export default RouteMap;
