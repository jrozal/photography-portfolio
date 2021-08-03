import React from 'react';
import Socials from '../Socials';
import * as Styled from './styled';

const Footer: React.FC = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <Styled.FooterContiner>
      <Socials/>
      <Styled.Footer>
        <div>All photos subject to Copyright © {year} Justin Rozal</div>
        <div>
          <Styled.Link
            href="https://justinrozal.dev"
            target="_blank"
            rel="noopener noreferrer">
            Coded by Justin
          </Styled.Link>
        </div>
      </Styled.Footer>
    </Styled.FooterContiner>
  )
};

export default Footer;