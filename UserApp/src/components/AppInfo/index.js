import React from 'react';
import {View,Text} from 'react-native';
//import HomeMap from '../../components/HomeMap';
import styles from './styles';

/** 
 * This component is responsible for the main display style.
 * It helps keep a style on that page so it is clear and a clean UI.
 * It also displays the app info.
 * The styles are contains within styles.js in this directory, and it provides things like 
 * a container, title, text and more css elements.
*/

const AppInfo = (props) => {
    return (
        <View style={styles.container}>
           <Text style={styles.title}>
               Ubor App
           </Text>
           <Text style={styles.text}>
               This project uses React-Native and AWS Amplify 
           </Text>
        </View>
    );
}

export default AppInfo