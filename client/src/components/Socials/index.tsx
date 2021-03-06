import React from 'react';
import { socialsData } from '../../data/socials';
import { Icons } from '../Icons';
import * as Styled from './styled';

const Socials = () => (
  <Styled.SocialsContainer>
    <Styled.SocialsList>
      {socialsData.map((social, i) => {
        const { ariaLabel, ...otherValues } = social.values;
        return (
          <Styled.SocialsItem key={i}>
            <a aria-label={ariaLabel} {...otherValues}>
              <Styled.SVG>
                {Icons[`${social.name}` as 'GitHub' | 'LinkedIn' | 'Instagram']}
              </Styled.SVG>
            </a>
          </Styled.SocialsItem>
        )
      })}
    </Styled.SocialsList>
  </Styled.SocialsContainer>
);

export default Socials;