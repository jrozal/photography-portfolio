import React from 'react';
import * as Styled from './styled';
import logo from '../../Icons/mobile-logo.png';

const MobileTitle = () => (
  <header>
    <Styled.Heading>
      <Styled.IMG src={logo} alt="Justin Rozal Photography"></Styled.IMG>
    </Styled.Heading>
  </header>
);

export default MobileTitle;