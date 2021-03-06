import React, { Component } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import axios from 'axios';

class App extends Component {
  state = {
    galleryItems: [
      {
        id: 0,
        path: '',
        description: '',
        likes: 0,
      },
    ],
  };

  componentDidMount() {
    this.getGallery();
  }

  getGallery = () => {
    axios({
      method: 'GET',
      url: '/gallery',
    })
      .then((response) => {
        this.setState({
          galleryItems: response.data,
        });
      })
      .catch((err) => {
        console.log('Err:', err);
        alert('Error in getFromServer');
      });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br />
        <GalleryList
          galleryItems={this.state.galleryItems}
          getGallery={this.getGallery}
        />
        <img src="images/goat_small.jpg" />
      </div>
    );
  }
}

export default App;
