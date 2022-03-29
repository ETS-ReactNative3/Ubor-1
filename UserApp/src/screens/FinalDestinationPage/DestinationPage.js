import React, { useState } from "react";
import {View, TextInput, SafeAreaView} from 'react-native';
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: '100%',
  },
  textInput: {
    padding: 10,
    backgroundColor: '#eee',
    marginVertical: 5,
    marginLeft: 20,
  },

  separator: {
    backgroundColor: '#efefef',
    height: 1,
  },
  listView: {
    position: 'absolute',
      top: 105,
  },
  autocompleteContainer: {
    position: 'absolute',
    top: 0,
    left: 10,
    right: 10,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  iconContainer: {
    backgroundColor: '#a2a2a2',
    padding: 5,
    borderRadius: 50,
    marginRight: 15,
  },
  locationText: {

  },

  circle: {
    width: 5,
    height: 5,
    backgroundColor: 'black',
    position: 'absolute',
    top: 20,
    left: 15,
    borderRadius: 5,
  },
  line: {
    width: 1,
    height: 50,
    backgroundColor: '#c4c4c4',
    position: 'absolute',
    top: 28,
    left: 17,
  },
  square: {
    width: 5,
    height: 5,
    backgroundColor: 'black',
    position: 'absolute',
    top: 80,
    left: 15,
  },
});
export function submitDest(a)
{ 
  if(a == "invalid")
  {
    return "Invalid address";
  }
  const getDest = "enter dest";
  const dest = `<form action="/action">
  <label for="curr">Current Location:</label><br>
  <input type="text" id="currDest" value="CurrentLocation"><br><br>
  <label for="dest">Destination:</label><br>
  <input type="text" id="destLocation" value="Empty"><br><br>
  <input type="submit" value="Submit">
  </form>`; 
  const isValid = "true";
  <SafeAreaView>
      <View style={styles.container}>

      <label>
        Current Location:
        <input type="text"  />
      </label>
      <label>
        Destination Location:
        <input type="text"  />
      </label>
      <button>Submit</button>
        {/* Circle near Origin input */}
        <View style={styles.circle} />
        
        {/* Line between dots */}
        <View style={styles.line} />

        {/* Square near Destination input */}
        <View style={styles.square} />

      </View>
    </SafeAreaView>
  if(isValid){ return "success"}
  else {return "Invalid address"}
}


