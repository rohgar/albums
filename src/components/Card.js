/* This is a functional Component */

// Import a library to help create a Component
import React from 'react';
import { Text, View } from 'react-native';

// Create the compnonent

const Card = (props) => (
    <View style={styles.containerStyle}>
        <Text>{props.children}</Text>
    </View>
);

const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#dddddd',
        borderBottomWidth: 0,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    }
};

// Make to component available
export default Card;
