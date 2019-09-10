import React from 'react';
import Container from './container';
import heroImage from '../images/hero.png';
import styled from 'styled-components';
import Button from './button';
import media from '../styles/media';

const HeroContainer = styled(Container)`
  max-height: 31.375rem;
  display: flex;
  align-items: flex-start;
  height: 43.75rem;
  background: url('${heroImage}') 50% no-repeat;
  background-color: #555962;
  background-size: cover;
  box-shadow: 10px 10px 23px 3px rgba(0, 0, 0, 0.25);
`;

const HeroText = styled.div`
  margin-top: 2rem;
  width: 22rem;
  max-width: 100%;

  ${Button} {
    width: 100%;
  }

  ${media.sm} {
    margin-top: 6.5rem;
    margin-left: 2.1rem;
    ${Button} {
      width: initial;
    }
  }

  h2 {
    color: #ffffff;
    font-size: 1.625rem;
    line-height: 1.875rem;
    text-transform: uppercase;
    margin-bottom: 3.5rem;
    font-family: 'DIN Offc W02 Regular';
  }
`;

const Hero = () => (
  <HeroContainer>
    <HeroText>
      {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
      <h2>
        /* Program skyscraper size equipment for mineral processing plants and help us save the
        Earth’s natural resources. */
      </h2>
      <Button>See positions</Button>
    </HeroText>
  </HeroContainer>
);

export default Hero;
