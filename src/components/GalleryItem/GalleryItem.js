import React, { Component } from 'react';
import './GalleryItem.css';

class GalleryItem extends Component {
  state = {
    toggle: true,
  };
  clickToggle() {
    this.setState({
      toggle: !this.state.toggle,
    });
  }
  render() {
    let imageRender = <img src={this.props.item.path} />;
    if (this.state.toggle === true) {
      imageRender = <p>{this.props.item.description}</p>;
    }
    return (
      <div>
        <p onClick={this.clickToggle()}></p>
        <button>Like</button>
      </div>
    );
  }
}

export default GalleryItem;
