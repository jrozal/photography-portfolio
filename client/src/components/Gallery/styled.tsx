import styled from 'styled-components';

export const GalleryContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Gallery = styled.div`
  max-width: 1400px;
  column-count: 3;
  column-gap: 0.25rem;

  @media only screen and (max-width: 520px) {
    column-count: 2;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;