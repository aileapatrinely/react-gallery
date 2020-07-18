import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {
  state = {};
  render() {
    //map in here
    const newGallery = this.props.galleryItems.map((item, index) => {
      return <GalleryItem item={item} />;
    });
    return <div>{newGallery}</div>;
  }
}

export default GalleryList;
