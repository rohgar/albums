/* This is a functional Component */

// Import a library to help create a Component
import React from 'react';
import { View } from 'react-native';

// Create the compnonent

const CardSection = (props) => (
    <View style={styles.containerStyle} >
        {props.children}
    </View>
);

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#ffffff',
        borderColor: '#dddddd',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        position: 'relative'
    }
};

// Make to component available
export default CardSection;
