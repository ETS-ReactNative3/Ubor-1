import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from './styles.js';
import UberTypeRow from '../CarTypeRowRender';

import typesData from '../../assets/data/types';

/**
 * This component involves selecting the uber type that you want. 
 * There are a few types, and the user picks the type, and that gets selected here
 * and then the type sets for that user. There is also text saying confirm uber.
 * It uses the UberTypeRow component to map the cars.
 */
const UberTypes = ({typeState,onSubmit}) => {
  const [selectedType,setselectedType] = typeState;
 
  
  return (
    <View>
      {typesData.map((type,key) => (
        <UberTypeRow type={type} key={key}
        isSelected={type.id=== selectedType}
        onPress={()=> setselectedType(type.id)} />
      ))}

      <Pressable onPress={onSubmit} style={{
        backgroundColor: 'black',
        padding: 12,
        margin: 5,
        alignItems: 'center',
      }}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>
          Confirm Uber
        </Text>
      </Pressable>
    </View>
  );
};

export default UberTypes;
