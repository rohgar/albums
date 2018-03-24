/* This is a Class Based Component */

// Import a library to help create a Component
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

// Create the compnonent

class AlbumList extends Component {
    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(response => console.log(response));
    }

    render() {
        return (
            <View>
                <Text>Test</Text>
            </View>
        );
    }
}

// Make to component available
export default AlbumList;
