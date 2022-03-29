import React, { useEffect, useState } from "react";
import { Image } from "react-native";

import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {API, graphqlOperation} from 'aws-amplify';
import {listDrivers} from '../../graphql/queries';
// import cars from '../../assets/data/cars';

/**
 *  This component is the main map on the first screen, and it helps set cars on the map.
 * The graphql call helps to list the drivers on to the map 
 * depending on their location. The initial part helps render
 * the cars onto the map and it also fetches images of the
 * car types and displays it. 
 * 
 */ 
const HomeMap = (props) => {
	const [cars,setCars] = useState([]);
  useEffect(()=>{
    const fetchCars = async () =>{
      try{
        const response = await API.graphql(
          graphqlOperation(
            listDrivers
          )
          
        )
        // console.log(response.data.listDrivers)
        setCars(response.data.listDrivers.items)
        //  console.log(response['data']['listCarLocat  ions']['items']);
      }
      catch (e){
        console.error(e);
      }
    }; 
    fetchCars();
  },[])

  const getImage = (type) => {
    if (type === 'UberX') {
      return require('../../assets/images/top-UberX.png');
    }
  };

  return (
    <MapView
      style={{width: '100%', height: '100%'}}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      initialRegion={{
        latitude: 37.422131,
        longitude: -122.084801,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
      }}>
      {cars.map((car) => (
        // console.log("53, Cars are ",car.Latitude),
        <Marker
          key={car.id}
          coordinate={{latitude: car?.Latitude, longitude: car?.Longitude}}
        >
          <Image
            style={{width: 70, height: 70, resizeMode: 'contain'}}
            source={getImage('UberX')}
          />
        </Marker>
      ))}
    </MapView>
  );
};

export default HomeMap;