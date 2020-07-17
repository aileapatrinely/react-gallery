import React, { Component } from 'react';

class GalleryItem extends Component {
  showDescription = () => {
    console.log('Description here');
  };
  render() {
    return (
      <div>
        <li key={index}>
          <img onClick={this.showDescription} src={item.path} />
          <button>Like</button>
        </li>
      </div>
    );
  }
}

export default GalleryItem;
