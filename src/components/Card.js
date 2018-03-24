/* This is a functional Component */

// Import a library to help create a Component
import React from 'react';
import { View } from 'react-native';

// Create the compnonent

const Card = (props) => (
    <View style={styles.containerStyle} >
        {props.children}
    </View>
);

const styles = {
    containerStyle: {
        borderWidth: 2,
        borderRadius: 2,
        borderColor: '#ccc',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    }
};

// Make to component available
export default Card;
