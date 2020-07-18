import React, { Component } from 'react';
import './GalleryItem.css';

class GalleryItem extends Component {
  addClass = (event) => {};
  render() {
    return (
      <div>
        <p>
          <img onClick={this.addClass()} src={this.props.item.path} />
        </p>
        <button>Like</button>
      </div>
    );
  }
}

export default GalleryItem;
