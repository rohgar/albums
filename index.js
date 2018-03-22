// Import a library to help create a Component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

// Create the compnonent
const App = () => {
    return <Header headerText={'Albums!'} />;
};

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
