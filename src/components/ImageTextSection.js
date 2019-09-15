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

  ${media.md} {
    min-width: 33rem;
  }

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
    width: 272px;
    height: 429px;
  }

  ${media.lg} {
    margin-bottom: 2rem;
  }
  margin-top: 2rem;
  margin-bottom: 0rem;
  width: 100%;
  // object-fit: ${props => props.objectFit || 'cover'};
  // object-position: 50% 20%;
  // box-shadow: 10px 10px 23px 3px rgba(0, 0, 0, 0.25);
`;

const ImageTextSection = ({
  imageSrc,
  imageData,
  children,
  imageLeft,
  hideImageInMobile,
  hideWhiteBg,
  mobileImageHeight,
  objectFit,
  objectPosition,
}) => {
  if (!imageData) {
    return <div></div>;
  }
  console.log(imageData);
  const image = (
    <ImageCol xs={12} md={8} mdOffset={2} lgOffset={0} hideImageInMobile={hideImageInMobile}>
      <StyledImg
        fluid={imageData}
        mobileImageHeight={mobileImageHeight}
        objectFit={objectFit}
        objectPosition={objectPosition}
      />
    </ImageCol>
  );

  const content = (
    <ContentCol
      sm={12}
      md={8}
      lg={7}
      xl={7}
      mdOffset={2}
      lgOffset={imageLeft ? 0 : 1}
      xlOffset={imageLeft ? 0 : 2}
      imageLeft={imageLeft}
      hideWhiteBg={hideWhiteBg}
    >
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
