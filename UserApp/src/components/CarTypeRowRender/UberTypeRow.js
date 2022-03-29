import React from "react";
import { View, Image, Text,Pressable } from "react-native";
import { StyleSheet } from 'react-native';

/**
 * This component is helps with the actual car option display component in the index.js
 * It also helps display the prices and helps with some stying components to the main component.
 */
const UberTypeRow = (props) => {
  const {type} = props;
    <Pressable  
    style={[styles.container, {backgroundColor:'#efefef'}]}
    >

      <View style={styles.middleContainer}>
        <Text style={styles.type}>
          {type.type}{' '}
          <div name={'person'} size={16} />
          3
        </Text>
        <Text style={styles.time}>
          8:03PM drop off
        </Text>
      </View>
      <View style={styles.rightContainer}>
        <div name={'pricetag'} size={18} color={'#42d742'} />
        <Text style={styles.price}>est. ${type.price}</Text>
      </View>
    </Pressable>

        if(props.type == "UberX" && props.id == 0)
        {
            return "$22.00";
        }
        if(props.type == "UberX" && props.id == 1)
        {
            return "$27.00";
        }
        if(props.type == "UberX" && props.id == 2)
        {
            return "$36.00";
        }
};

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 20,
    },
    image: {
      height: 40,
      width: 80,
      resizeMode: 'contain',
    },
    middleContainer: {
      flex: 1,
      marginHorizontal: 10,
    },
    type: {
      fontWeight: 'bold',
      fontSize: 18,
      marginBottom: 5,
    },
    time: {
      color: '#5d5d5d',
    },
    rightContainer: {
      width: 100,
      justifyContent: 'flex-end',
      flexDirection: 'row',
    },
    price: {
      fontWeight: 'bold',
      fontSize: 18,
      marginLeft: 5,
    },
  });
  
export default UberTypeRow;
