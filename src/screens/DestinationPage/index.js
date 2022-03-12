import React, {useState, useEffect} from 'react';
import {View, TextInput, SafeAreaView} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import PlaceRow from './PlaceRow';
import { useNavigation } from '@react-navigation/native';

import styles from './styles.js';

const DestinationSearch = (props) => {
  const navigation = useNavigation();



  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);

  useEffect(() => {
    if (originPlace && destinationPlace) {
      navigation.navigate("SearchResults",{
        originPlace,
        destinationPlace
      });
    }
  }, [originPlace, destinationPlace]);

  return (
    <SafeAreaView>
      <View style={styles.container}>

        <GooglePlacesAutocomplete
          placeholder="Where from?"
          onPress={(data, details = null) => {
            setOriginPlace({data, details});
          }}
          suppressDefaultStyles
          currentLocation= {true}
          currentLocationLabel='Current Location'
          styles={{
            textInput: styles.textInput,
            container: {
              position: 'absolute',
              top: 0,
              left: 10,
              right: 10
            },
            listView: {
              position: 'absolute',
              top: 105
            }
          }}
          fetchDetails
          query={{
            key: 'AIzaSyA5VWIifqHFf9PuEpxXUUr72KgJa7lbQek',
            language: 'en',
          }}
          renderRow = {(data) => <PlaceRow data = {data}/>}
          renderDescription = {(data) => data.description || data.vicinity}
        />

        <GooglePlacesAutocomplete
          placeholder="Where to?"
          onPress={(data, details = null) => {
            setDestinationPlace({data, details});
          }}
          suppressDefaultStyles
          styles={{
            textInput: styles.textInput,
            container: {
              position: 'absolute',
              top: 55,
              left: 10,
              right: 10
            }
            
          }}
          fetchDetails
          query={{
            key: 'AIzaSyA5VWIifqHFf9PuEpxXUUr72KgJa7lbQek',
            language: 'en',
          }}
          renderRow = {(data) => <PlaceRow data = {data}/>}
          renderDescription = {(data) => data.description || data.vicinity}
        />
        
        {/* Circle near Origin input */}
        <View style={styles.circle} />

        {/* Line between dots */}
        <View style={styles.line} />

        {/* Square near Destination input */}
        <View style={styles.square} />

      </View>
    </SafeAreaView>
  );
};

export default DestinationSearch;
