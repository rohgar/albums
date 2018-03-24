/* This is a functional Component */

// Import a library to help create a Component
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

// Create the compnonent

const Button = (props) => {
    const { buttonStyle, textStyle } = styles;
    return (
        <TouchableOpacity onPress={props.buttonPress} style={buttonStyle} >
            <Text style={textStyle}>{props.buttonText}</Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontWeight: '700',
        fontSize: 16,
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    }
};

// Make to component available
export default Button;
