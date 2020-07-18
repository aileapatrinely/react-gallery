import React, { Component } from 'react';
import './GalleryItem.css';
import Axios from 'axios';

class GalleryItem extends Component {
  state = {
    toggle: true,
  };
  clickToggle = () => {
    this.setState({
      toggle: !this.state.toggle,
    });
  };
  sendLike(id, likes) {
    axios({
      method: 'PUT',
      url: '/:id',
      data: { likes },
    })
      .then((response) => {
        res.sendStatus(201);
      })
      .catch((err) => {
        console.log('err:', err);
        alert('Error in sendLike');
      });
  }
  render() {
    let imageRender = <img src={this.props.item.path} />;
    if (this.state.toggle === true) {
      imageRender = <p>{this.props.item.description}</p>;
    }
    return (
      <div>
        <p onClick={this.clickToggle()}>{imageRender}</p>
        <button onClick={this.sendLike()}>Like</button>
      </div>
    );
  }
}

export default GalleryItem;
