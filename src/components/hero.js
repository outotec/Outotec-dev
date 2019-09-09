import React from 'react';
import Container from './container';
import heroImage from '../images/hero.png';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';

const HeroContainer = styled(Container)`
  height: 5.5rem;
  display: flex;
  align-items: flex-start;
  height: 43.75rem;
  background: url('${heroImage}') 50% no-repeat; 
  background-size: cover;
`;

const HeroText = styled.div`
  margin-top: 6.5rem;
  h2 {
    font-family: 'DIN1';
    color: #ffffff;
    font-size: 2.4rem;
    text-transform: uppercase;
  }
`;

const Hero = ({ siteTitle }) => (
  <HeroContainer>
    <Row>
      <Col xs={5} xsOffset={7}>
        <HeroText>
          {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
          <h2>
            /* Code gigantic equipment for mineral processing plants and develop the sustainability
            of earth's natural resources */
          </h2>
        </HeroText>
      </Col>
    </Row>
  </HeroContainer>
);

export default Hero;
