import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {
  galleryItems = [
    {
      id: 1,
      path: 'images/mylove.JPG',
      description: 'My perfect boy, Thorin.',
      likes: 0,
    },
    {
      id: 2,
      path: 'images/Tp.JPG',
      description: 'Thorin and Pippin.',
      likes: 0,
    },
    {
      id: 3,
      path: 'images/Tphome.JPG',
      description: 'Thorin and Pippin in the yard.',
      likes: 0,
    },
    {
      id: 4,
      path: 'images/rhianna.JPG',
      description: 'My sister, Rhianna, and I on my 21st birthday.',
      likes: 0,
    },
    {
      id: 5,
      path: 'images/mama.jpg',
      description: 'I love my mom.',
      likes: 0,
    },
    {
      id: 6,
      path: 'images/betterdad.JPG',
      description: 'My dad with my sister on her wedding day.',
      likes: 0,
    },
    {
      id: 7,
      path: 'images/Islasaurus.JPG',
      description: 'My niece, Isla, a little confused about wearing a mask.',
      likes: 0,
    },
    {
      id: 8,
      path: 'images/Isla.JPG',
      description: 'Isla the fashion model.',
      likes: 0,
    },
    {
      id: 9,
      path: 'images/Nicco.jpg',
      description:
        'My little brother finds it disturbing how similar we look using Snapchat filters.',
      likes: 0,
    },
    {
      id: 10,
      path: 'images/Krogmanns.JPG',
      description: 'My sister with her growing family.',
      likes: 0,
    },
  ];
  render() {
    //map in here
    const newGallery = this.galleryItems.map((item, index) => {
      return GalleryItem;
    });
    return <div>{newGallery}</div>;
  }
}

export default GalleryList;
