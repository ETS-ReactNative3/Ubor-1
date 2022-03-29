import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from './styles.js';
// import UberTypeRow from '../UberTypeRow';

// import typesData from '../../assets/data/types';

/**
 * This component helps with confirmation and and non confirmation.
 * It also helps dispplay the cars.
 */
const UberTypes = (confirm) => {
//   const [selectedType, status] = confirm;
  const selectedType = confirm.selectedType;
  const status = confirm.status;
  if(status === 'not confirmed') {
    return 'not confirmed';
}
  if(status === 'confirm') {
      return 'confirm';
  } else {
    return (
        <View>
    
          <Pressable style={{
            backgroundColor: 'black',
            padding: 10,
            margin: 5,
            alignItems: 'center',
          }}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>
              Confirm Uber
            </Text>
          </Pressable>
        </View>
      );

  }

};

export default UberTypes;
