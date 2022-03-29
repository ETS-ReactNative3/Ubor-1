import React from 'react';
import {View,Text} from 'react-native';
//import HomeMap from '../../components/HomeMap';
import styles from './styles';

const CovidMessage = (props) => {
    return (
        <View style={styles.container}>
           <Text style={styles.title}>
               Ubor App
           </Text>
           <Text style={styles.text}>
               This project uses React-Native and AWS Amplify 
           </Text>
           <Text style={styles.learnMore}>
               Learn More
           </Text>
        </View>
    );
}

export default CovidMessage