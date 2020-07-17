import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {
  render() {
    //map in here
    const newGallery = this.props.galleryItems.map((item, id) => {
      return GalleryItem;
    });
    return <div>{newGallery}</div>;
  }
}

export default GalleryList;
