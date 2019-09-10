import React from 'react';
import Container from './container';
import styled from 'styled-components';
import { Col, Row } from 'react-flexbox-grid';

const StyledImageTextSection = styled.div`
  margin-top: 10rem;
  margin-bottom: 10rem;
`;

const ContentCol = styled(Col)`
  background-color: #ffffff;
`;

const Content = styled.div`
  margin-top: 3.75rem;
  margin-left: 3.75rem;
  margin-right: 7.8125rem;
  margin-bottom: 7.5rem;
`;

const StyledImg = styled.img`
  width: 292px;
  margin-top: 2.9375rem;
  margin-left: -3.25rem;
  box-shadow: 10px 10px 23px 3px rgba(0, 0, 0, 0.25);
`;

const ImageTextSection = ({ imageSrc, children }) => (
  <Container>
    <StyledImageTextSection>
      <Row>
        <ContentCol xsOffset={1} xs={5}>
          <Content>{children}</Content>
        </ContentCol>
        <Col>
          <StyledImg src={imageSrc} />
        </Col>
      </Row>
    </StyledImageTextSection>
  </Container>
);

export default ImageTextSection;
