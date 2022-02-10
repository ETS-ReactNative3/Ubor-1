import React from "react";
import {View, TextInput, Text, SafeAreaView} from 'react-native';
import style from "./styles";
import { useState } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const DestinationSearch = (props) => {
    const {fromText,setFromText} = useState('');
    const {destinationText, setDestinationText} = useState('');
    return(
        <SafeAreaView>
        <View style={style.container}>
            <TextInput value={fromText} onChangeText={setFromText} style={style.textInput} placeholder="From"/>
            <TextInput value={destinationText} onChangeText={setDestinationText} style={style.textInput} placeholder="Where To"/> 
            <GooglePlacesAutocomplete
            placeholder='Search'
            onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
            }}
            query={{
                key: 'AIzaSyA5VWIifqHFf9PuEpxXUUr72KgJa7lbQek',
                language: 'en',
        }}
    />
        </View>
        </SafeAreaView>
    );
}


export default DestinationSearch;