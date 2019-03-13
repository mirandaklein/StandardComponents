import React, { Component } from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './card.js';
import CardItem from './CardItem.js';
import Button from './button.js';

class AlbumDetail extends Component {
    render() {
        const { title, artist, thumbnail_image, image, url } = this.props.album;
        return (
          <Card>
              <CardItem>
                <View style={styles.thumbnailContainerStyle}>
                    <Image 
                    style={styles.thumbnailStyle} 
                    source={{ uri: thumbnail_image }} 
                    />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>  
                </View>
             </CardItem>

             <CardItem>
                 <Image 
                 style={styles.albumImageStyle}
                 source={{ uri: image }}
                 />
             </CardItem>

             <CardItem>
                 <Button
                 onPress={() => Linking.openURL(url)}
                 title={title}
                 />
             </CardItem>
         </Card>
        );
    }
}


const styles = {
    textContainer: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18,
    },
    thumbnailStyle: {
        height: 50,
        width: 50,
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    albumImageStyle: {
        height: 300,
        flex: 1,
        width: null,
    }
};

export default AlbumDetail;
