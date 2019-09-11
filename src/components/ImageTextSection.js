import React from 'react';
import Container from './container';
import styled from 'styled-components';
import { Col, Row } from 'react-flexbox-grid';
import media from '../styles/media';

const StyledImageTextSection = styled.div`
  ${media.lg} {
    margin-top: 10rem;
    margin-bottom: 10rem;
  }
  margin-top: 3.75rem;
  margin-bottom: 3.75rem;
`;

const ContentCol = styled(Col)`
  background-color: #ffffff;
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

  ${media.md} {
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

  h2 {
    font-size: 1.875rem;
  }
`;

const StyledImg = styled.img`
  ${media.xs} {
    height: 162px;
  }

  ${media.sm} {
    height: 320px;
  }

  ${media.lg} {
    margin-top: 2.9375rem;
    width: 272px;
    height: 429px;
  }

  margin-top: 2rem;
  margin-bottom: 2rem;
  width: 100%;
  object-fit: cover;
  object-position: 50% 20%;
  box-shadow: 10px 10px 23px 3px rgba(0, 0, 0, 0.25);
`;

const ImageTextSection = ({ imageSrc, children, imageLeft, hideImageInMobile }) => {
  const image = (
    <ImageCol xs={12} md={8} mdOffset={2} lgOffset={0} hideImageInMobile={hideImageInMobile}>
      <StyledImg src={imageSrc} />
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
