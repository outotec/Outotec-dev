import { Col, Row } from 'react-flexbox-grid';
import Container from '../components/container';
import scene from '../images/scene.png';
import styled from 'styled-components';
import media from '../styles/media';

export const Banner = styled(Container)`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 25rem;
  background: url('${scene}') 50% no-repeat;
  background-position: top center;
  background-size: cover;
  padding-top: 3rem;
  padding-bottom: 3rem;

  h3 {
    font-size: 1.2rem;
    line-height: 2.2rem;
    font-family: 'DINWebPro-Bold W02 Regular';
    margin-bottom: 0;
    color: black;
    text-transform: uppercase;
    text-align: center;
    ${media.lg} {
      font-size: 1.5rem;
    }
  }
`;

export const BannerCol = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0rem 2rem;
`;

export const BannerRow = styled(Row)`
  max-width: 70rem;
  width: 100%;
`;
