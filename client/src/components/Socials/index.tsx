import React from 'react';
import { socialsData } from '../../data/socials';
import { Icons } from '../Icons';
import * as Styled from './styled';

const Socials: React.FC = () => (
  <Styled.SocialsContainer>
    <Styled.SocialsList>
      {socialsData.map((social) => {
        const { ariaLabel, ...otherValues } = social.values;

        return (
          <Styled.SocialsItem>
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