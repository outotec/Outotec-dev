import React from 'react';
import Container from './container';
import styled from 'styled-components';
import Button from './button';
import media from '../styles/media';
import BackgroundImage from 'gatsby-background-image';

const HeroImage = styled(BackgroundImage)`
  ${media.sm} {
    margin-left: 0;
    margin-right: 0;
  }
  margin-left: -1.5rem;
  margin-right: -1.5rem;

  max-height: 31.375rem;
  display: flex;
  align-items: flex-start;
  height: 43.75rem;
  background-position: top center;
  background-size: cover;
`;

const Mask = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.45);
`;

const HeroText = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 3rem;
  max-width: 35rem;

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
    line-height: 3rem;
    text-transform: uppercase;
    margin-bottom: 3.5rem;
    font-family: 'DIN Offc W02 Regular';
  }
`;

const Hero = ({ imageData, children }) => (
  <Container>
    <HeroImage fluid={imageData}>
      <Mask>
        <HeroText>{children}</HeroText>
      </Mask>
    </HeroImage>
  </Container>
);

export default Hero;
