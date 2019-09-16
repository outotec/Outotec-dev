import React from 'react';
import Container from './container';
import styled from 'styled-components';
import { Col, Row } from 'react-flexbox-grid';
import media from '../styles/media';
import Img from 'gatsby-image/withIEPolyfill';

const StyledImageTextSection = styled.div`
  ${media.lg} {
    margin-top: 10rem;
    margin-bottom: 10rem;
  }
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const ContentCol = styled(Col)`
  ${props => !props.hideWhiteBg && `background-color: #ffffff;`}

  ${media.lg} {
    ${props =>
      props.imageLeft &&
      ` 
      z-index: -1;
      position: relative;
      left: -3.27rem;
    `}
    ${props =>
      !props.imageLeft &&
      ` 
      z-index: -1;
      position: relative;
      left: 3.27rem;
    `}
  }
`;

const ImageCol = styled(Col)`
  ${props => props.hideImageInMobile && `display: none;`}
  ${media.lg} {
    display: block;
  }
  padding-left: 0 !important;
  padding-right: 0 !important;
`;

const Content = styled.div`
  ${media.sm} {
    margin-left: 2rem;
  }

  ${media.lg} {
    ${props =>
      !props.imageLeft &&
      `
      margin-left: 3.75rem;
      margin-right: 7.8125rem;
    `}

    ${props =>
      props.imageLeft &&
      `
      margin-right: 3.75rem;
      margin-left: 7.8125rem;
    `}
    margin-top: 3.75rem;
    margin-bottom: 3.75rem;

    h2 {
      font-size: 2.1875rem;
    }
  }

  margin-top: 2.25rem;
  margin-bottom: 2.25rem;
  margin-right: 0;
  margin-left: 1rem;
`;

const StyledImg = styled(Img)`
  height: ${props => props.mobileImageHeight || '320px'};

  ${media.lg} {
    margin-top: 2.9375rem;
    width: ${props => (props.wideImage ? '480px' : '272px')};
    height: ${props => (props.wideImage ? 'auto' : '429px')};
    margin-bottom: 2rem;
  }

  ${media.xl} {
    width: ${props => (props.wideImage ? '547px' : '272px')};
    height: ${props => (props.wideImage ? '328px' : '429px')};
  }

  margin-top: 2rem;
  margin-bottom: 0rem;
  width: 100%;
`;

const ImageTextSection = ({
  imageData,
  children,
  imageLeft,
  hideImageInMobile,
  hideWhiteBg,
  mobileImageHeight,
  objectFit,
  objectPosition,
  wideImage,
}) => {
  if (!imageData) {
    return <div></div>;
  }

  const imageColDefinitions = {
    xs: 12,
    md: wideImage ? 10 : 10,
    xl: 2,
    mdOffset: wideImage ? 1 : 1,
    lgOffset: 0,
  };
  const contentColDefinitions = {
    sm: 12,
    md: 10,
    lg: wideImage ? 6 : 7,
    xl: wideImage ? 6 : 7,
    mdOffset: 1,
    lgOffset: imageLeft || wideImage ? 0 : 1,
    xlOffset: imageLeft || wideImage ? 0 : 2,
  };
  const image = (
    <ImageCol {...imageColDefinitions} hideImageInMobile={hideImageInMobile}>
      <StyledImg
        fluid={imageData}
        mobileImageHeight={mobileImageHeight}
        objectFit={objectFit}
        objectPosition={objectPosition}
        wideImage={wideImage}
      />
    </ImageCol>
  );

  const content = (
    <ContentCol {...contentColDefinitions} imageLeft={imageLeft} hideWhiteBg={hideWhiteBg}>
      <Content imageLeft={imageLeft}>{children}</Content>
    </ContentCol>
  );

  return (
    <Container>
      <StyledImageTextSection>
        <Row>
          {imageLeft ? image : content}
          {imageLeft ? content : image}
        </Row>
      </StyledImageTextSection>
    </Container>
  );
};

export default ImageTextSection;
