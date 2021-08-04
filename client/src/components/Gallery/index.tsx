import React from 'react';
import { mockPhotoData } from '../../data/mock-photo-data';
import * as Styled from './styled';

const Gallery = () => {
  return (
    <Styled.GalleryContainer>
      <Styled.Gallery>
        {mockPhotoData.map((photo) => {
          return (
            <Styled.Image src={photo} alt=""/>
          )
        })}
      </Styled.Gallery>
    </Styled.GalleryContainer>
  )
};

export default Gallery;