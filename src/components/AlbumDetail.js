/* This is a functional Component */

// Import a library to help create a Component
import React from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

// Create the compnonent

const AlbumDetail = (props) => (
    <Card albumsProp={'props'}>
        <CardSection>
            <Text>{props.albumProp.title}</Text>
        </CardSection>
    </Card>
);

// Make to component available
export default AlbumDetail;
