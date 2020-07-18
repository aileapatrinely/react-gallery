import React, { Component } from 'react';

class GalleryItem extends Component {
  showDescription = () => {
    console.log('Description here');
  };
  render() {
    const galleryItem = this.props.galleryItem.map((item, index) => {
      return (
        <li key={this.props.id}>
          <img onClick={this.showDescription()} src={this.props.item.path} />
          <button onClick={this.clickLike()}>Like</button>
        </li>
      );
    });
    return (
      <div>
        <ul>{galleryItem}</ul>
      </div>
    );
  }
}

export default GalleryItem;
