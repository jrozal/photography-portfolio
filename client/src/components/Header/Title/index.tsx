import React from 'react';
import * as Styled from './styled';
import logo from '../../Icons/logo.png';

const Title = () => (
  <Styled.HeadingContainer>
    <Styled.Heading>
      <Styled.IMG src={logo} alt="Justin Rozal Photography"></Styled.IMG>
    </Styled.Heading>
  </Styled.HeadingContainer>
);

export default Title;