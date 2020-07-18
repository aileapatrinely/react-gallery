import React, { Component } from 'react';

class GalleryItem extends Component {
  showDescription = () => {
    console.log('Description here');
  };
  render() {
    return (
      <div>
        <li key={this.props.id}>
          <img onClick={this.showDescription()} src={this.props.item.path} />
          <button onClick={this.clickLike()}>Like</button>
        </li>
      </div>
    );
  }
}

export default GalleryItem;
