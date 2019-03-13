import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './src/components/header.js';
import AlbumList from './src/components/AlbumList.js';

export default class App extends Component {
  render() {
    return (
      <View style={styles.viewStyle}>
         <Header 
            headerText={'Albums'} 
         />
         <AlbumList />
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
};
