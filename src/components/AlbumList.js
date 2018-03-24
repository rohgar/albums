/* This is a Class Based Component */

// Import a library to help create a Component
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

// Create the compnonent

class AlbumList extends Component {
    state = { albums: [] }; // initialize the state

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => this.setState({ albums: response.data })); // update the state
    }

    /* internal methods */

    renderAlbums() {
        // return this.state.albums.map(album => <Text key={album.title}>{album.title}</Text>);
        return this.state.albums.map(album =>
            <AlbumDetail key={album.title} albumProp={album} />
        );
    }

    /* internal methods end */

    render() {
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }

}

// Make to component available
export default AlbumList;
