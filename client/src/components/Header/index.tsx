import React from 'react';
import * as Styled from './styled';
import Navigation from '../Navigation';
import Title from '../Title';
import Socials from '../Socials';

const Header = () => {
  return (
    <Styled.HeaderContainer>
      <Title/>
      <Navigation/>
      <Socials/>
    </Styled.HeaderContainer>
  )
};

export default Header;