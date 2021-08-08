import React from 'react';
import MobileNavigation from './MobileNavigation';
import MobileTitle from './MobileTitle';
import * as Styled from './styled';

const HeaderMobile = () => (
  <Styled.HeaderMobileContainer>
    <MobileTitle/>
    <MobileNavigation/>
  </Styled.HeaderMobileContainer>
);

export default HeaderMobile;