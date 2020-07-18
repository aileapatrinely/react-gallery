import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {
  showDescription = () => {};
  render() {
    //map in here
    const newGallery = this.props.getGallery.map((item, index) => {
      return <GalleryItem galleryItem={this.state.galleryItem} />;
    });
    return <div>{newGallery}</div>;
  }
}

export default GalleryList;
