/* This is a functional Component */

// Import a library to help create a Component
import React from 'react';
import Card from './Card';

// Create the compnonent

const AlbumDetail = (props) => (
    <Card albumsProp={'props'}>
        {props.albumProp.title}
    </Card>
);

// Make to component available
export default AlbumDetail;
