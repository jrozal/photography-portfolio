import React from 'react';
import { navigationData } from '../../data/navigation';
import * as Styled from './styled';

const Navigation = () => (
  <Styled.MenuContainer>
    <Styled.Menu>
      {navigationData.map((item) => (
        <Styled.Item>{item}</Styled.Item>
      ))}
    </Styled.Menu>
  </Styled.MenuContainer>
);

export default Navigation;