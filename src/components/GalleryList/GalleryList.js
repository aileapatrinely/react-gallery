import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {
  render() {
    //map in here
    const newGallery = this.props.getGallery.map((item) => {
      return (
        <li key={this.props.id}>
          <img onClick={this.showDescription()} src={this.props.item.path} />
          <button>Like</button>
        </li>
      );
    });
    return <div>{newGallery}</div>;
  }
}

export default GalleryList;
