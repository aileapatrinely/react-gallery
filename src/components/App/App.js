import React, { Component } from 'react';
import './App.css';
import GalleryItem from '../GalleryItem/GalleryItem';
import GalleryList from '../GalleryList/GalleryList';
import axios from 'axios';

class App extends Component {
  state = {
    galleryItems: [],
  };

  componentDidMount() {
    this.getGallery();
  }

  getGallery() {
    axios({
      method: 'GET',
      url: '/gallery',
    })
      .then((response) => {
        this.setState({
          ...this.state.galleryItems,
          galleryItems: response.data,
        });
      })
      .catch((err) => {
        console.log('Err:', err);
        alert('Error in getFromServer');
      });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br />
        <p>
          <GalleryList gallery={this.state.galleryItems} />
        </p>
        <img src="images/goat_small.jpg" />
      </div>
    );
  }
}

export default App;
