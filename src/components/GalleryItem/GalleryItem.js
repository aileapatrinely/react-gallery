import React, { Component } from 'react';

class GalleryItem extends Component {
  showDescription = () => {
    console.log('Description here');
  };
  render() {
    const newGalleryItem = this.props.gimmeDemPics.map((item, index) => {
      return (
        <li key={this.props.item.id}>
          <img onClick={this.showDescription()} src={this.props.item.path} />
          <button onClick={this.clickLike()}>Like</button>
        </li>
      );
    });
    return <div>{newGalleryItem}</div>;
  }
}

export default GalleryItem;
