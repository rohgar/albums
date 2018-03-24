/* This is a Functional Component */

// Import a library to help create a Component
import React from 'react';
import { Text, View } from 'react-native';

// Create the compnonent

const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 70,
        paddingTop: 15,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.4,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 22
    }
};

// Make to component available
export default Header;
