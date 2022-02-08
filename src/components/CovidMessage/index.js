import React from 'react';
import {View,Text} from 'react-native';
//import HomeMap from '../../components/HomeMap';
import styles from './styles';

const CovidMessage = (props) => {
    return (
        <View style={styles.container}>
           <Text style={styles.title}>
               Travel only if neccessary
           </Text>
           <Text style={styles.text}>
               Covid BS.
               Flatten the curve and shit.
           </Text>
           <Text style={styles.learnMore}>
               Learn More
           </Text>
        </View>
    );
}

export default CovidMessage