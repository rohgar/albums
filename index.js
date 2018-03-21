// Import a library to help create a Component
import React from 'react';
import { Text, AppRegistry } from 'react-native';

// Create the compnonent

// const App = () => {
//     return (
//         <Text>Some Text</Text>
//     );
// };
const App = () =>
(
    <Text>Some Text</Text>
);


// Render it to the device
AppRegistry.registerComponent('albums', () => App);
