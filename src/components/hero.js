import React from 'react';
import Container from './container';
import heroImage from '../images/hero-.png';
import styled from 'styled-components';
import Button from './button';
import media from '../styles/media';

const HeroImage = styled.div`
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
  background: url('${heroImage}') 50% no-repeat;
  background-position: top center;
  background-color: #555962;
  background-size: cover;
  // box-shadow: 10px 10px 23px 3px rgba(0, 0, 0, 0.25);
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

const Hero = () => (
  <Container>
    <HeroImage>
      <Mask>
        <HeroText>
          {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
          <h2>
            Do you want to work with cutting edge technologies and build things at the forefront of
            the digital world?
          </h2>
          <Button href="#positions">See positions</Button>
        </HeroText>
      </Mask>
    </HeroImage>
  </Container>
);

export default Hero;
