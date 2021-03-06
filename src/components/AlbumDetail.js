/* This is a functional Component */

// Import a library to help create a Component
import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

// Create the compnonent

const AlbumDetail = (props) => {
    const { title, artist, thumbnail_image, image, url } = props.albumProp;
    const { headerContentStyle,
            headerTextStyle,
            thumbnailStyle,
            thumbnailContainerStyle,
            imageStyle } = styles;
    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image style={imageStyle} source={{ uri: image }} />
            </CardSection>

            <CardSection>
                <Button
                buttonText={'Buy'}
                buttonPress={() => Linking.openURL(url)}
                />
            </CardSection>

        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
		fontSize: 18
	},
    thumbnailStyle: {
		height: 50,
		width: 50
	},
    thumbnailContainerStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10
	},
	imageStyle: {
		height: 300,
		flex: 1,
		width: null
	}
};

// Make to component available
export default AlbumDetail;
