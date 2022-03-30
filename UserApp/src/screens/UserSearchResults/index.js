import React,{useState,useEffect} from 'react';
import {View, Dimensions} from 'react-native';
import RouteMap from "../../components/DirectionMap";
import {API,graphqlOperation} from 'aws-amplify';
import {createCustomerLocationDestination} from '../../graphql/mutations'
import UberTypes from "../../components/CarType";
import { useRoute } from '@react-navigation/native';
import { Auth } from 'aws-amplify';
const SearchResults = (props) => {
  const typeState = useState();
  const route = useRoute();
  const {originPlace, destinationPlace} = route.params
  const onSubmit = async () => {
    const type = typeState;
    if(!type){
      return;
    }else{
      const date = new Date();
      const UserInfo2 = await Auth.currentUserInfo();
      // console.log(use)
      try{
        var input = {
          Customer_id: UserInfo2.attributes.sub,
          Name: UserInfo2.attributes['custom:fname'],
          latitude_rider: originPlace.details.geometry.location.lat,
          longitude_rider: originPlace.details.geometry.location.lng,
          latitude_desination: destinationPlace.details.geometry.location.lat,
          longitude_destination: destinationPlace.details.geometry.location.lng,
          carID:"",
          isAssigned: false,
        }
        const response = await API.graphql(
          graphqlOperation( createCustomerLocationDestination,{
            input: input
          })
        )
        console.log(response)
      }catch(e){
        // console.error(e.data.errors.locations);
      }
    }
  }

  return (
    <View style={{display: 'flex', justifyContent: 'space-between'}}>
      <View style={{height: Dimensions.get('window').height - 215}}>
        <RouteMap originProp={originPlace} destinationProp={destinationPlace} />
      </View>

      <View style={{height: 500}}>
        <UberTypes typeState={typeState} onSubmit={onSubmit} />
      </View>
    </View>
  );
};

export default SearchResults;
