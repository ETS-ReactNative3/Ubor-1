import { StyleSheet } from "react-native";

const styles = StyleSheet.create(
    {
        inputBox: {
            backgroundColor: '#d9d9d9',
            margin: 10,
            padding: 12,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        inputText: {
            fontSize: 18,
            color: '#434343',
            fontWeight: '600',
        },
        timeContainer: {
            flexDirection: 'row',
            width: 100,
            justifyContent: 'space-between',
            backgroundColor: 'white',
            padding: 12,
            borderRadius: 60
        },
        row: {
            flexDirection: 'row',
            padding: 22,
            alignItems: 'center',
            borderBottomWidth: 1,
            borderColor: 'grey'
        },
        iconContainer: {
            backgroundColor: 'grey',
            padding: 5,
            borderRadius: 25,
        },
        destinationText: {
            marginLeft: 10,
            fontWeight: '600',
            fontSize: 16,
        }
        
    }
);

export default styles;
