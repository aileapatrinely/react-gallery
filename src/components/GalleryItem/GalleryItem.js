import React, { Component } from 'react';
import './GalleryItem.css';
import axios from 'axios';

class GalleryItem extends Component {
  state = {
    toggle: false,
  };
  clickToggle = () => {
    this.setState({
      toggle: !this.state.toggle,
    });
  };

  sendLike = () => (event) => {
    axios({
      method: 'PUT',
      url: 'gallery/like/' + this.props.item.id,
    })
      .then((response) => {
        // response.sendStatus(201);
        this.props.getGallery();
      })
      .catch((err) => {
        console.log('err:', err);
        alert('Error in sendLike');
      });
  };
  render() {
    let imageRender = (
      <img src={this.props.item.path} alt={this.props.item.description} />
    );
    if (this.state.toggle === true) {
      imageRender = <p>{this.props.item.description}</p>;
    }
    return (
      <div className="divdisplay">
        <div onClick={this.clickToggle}>{imageRender}</div>
        <button onClick={this.sendLike(this.props.item.id)}>Like</button>
        <p>{this.props.item.likes} likes</p>
      </div>
    );
  }
}

export default GalleryItem;
