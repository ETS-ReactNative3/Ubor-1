import React from "react";
import { View, Image, Text,Pressable } from "react-native";
import styles from './styles.js';

import Ionicons from "react-native-vector-icons/Ionicons";

/**
 * This component is the actual car option display component which
 * gets mapped in confirmuber.js. It fetches the images of the uber
 * car types and gives it styling and elements which get mapped and displayed
 * on another component.
 */
const UberTypeRow = (props) => {
  const {type,onPress,isSelected} = props;

  const getImage = () => {
    if (type.type === 'UberX') {
      return require('../../assets/images/UberX.jpeg');
    }
  }

  return (
    <Pressable onPress={onPress} 
    style={[styles.container, {backgroundColor: isSelected ? 'grey' : 'white' }]}

    >

      <Image
        style={styles.image}
        source={getImage()}
      />

      <View style={styles.middleContainer}>
        <Text style={styles.type}>
          {'Ubor Car'}{' '}
          <Ionicons name={'person'} size={16} />
          3
        </Text>
        
      </View>
      <View style={styles.rightContainer}>
       
        <Text style={styles.price}> ${type.price}</Text>
      </View>
    </Pressable>
  );
};

export default UberTypeRow;
