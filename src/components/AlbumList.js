// Import libraries for making a component
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail.js';

//  Make a component
class AlbumList extends Component {
state = {
    albums: []
};
//componentWillMount() {
 //   axios.get('https://rallycoding.herokuapp.com/api/music_albums')
 //   .then(response => this.setState({ albums: response.data }));
 //   }

    async componentWillMount() {
       const response = await axios.get('https://rallycoding.herokuapp.com/api/music_albums');
        this.setState({ albums: response.data });
        }

renderAlbums() {
    return this.state.albums.map(album => 
    <AlbumDetail key={album.title} album={album} />)
    ;
}


    render() {
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

export default AlbumList;
