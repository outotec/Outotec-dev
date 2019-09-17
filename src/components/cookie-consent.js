import React, { useState } from 'react';
import Container from './container';
import { Row, Col } from 'react-flexbox-grid';
import Button from '../components/button';
import { colors } from '../styles/constants';
import styled from 'styled-components';
import Cookies from 'js-cookie';
import media from '../styles/media';

const StyledCookieConsent = styled.div`
  box-sizing: border-box;
  max-height: 15rem;
  transition: max-height 0.5s ease;
  ${props => props.hide && `max-height: 0px;`};
  font-size: 1.25rem;
  position: fixed;

  ${Container} {
    margin-top: 1rem;
    margin-bottom: 1rem;
    ${media.sm} {
      margin-top: 0.75rem;
      margin-bottom: 0.75rem;
    }
  }

  bottom: 0;
  width: 100%;
  background: ${colors.accent1};
  color: #fff;
  z-index: 200;
`;

const CookieButtonCol = styled(Col)`
  display: flex;
  justify-content: flex-end;
  button {
    width: 100%;
    margin-top: 2rem;
    ${media.sm} {
      width: auto;
      margin-top: auto;
    }
    border: 4px solid #ffffff;
  }
`;

const cookieKey = 'cookies-accepted';

const CookieContentCol = styled(Col)`
  display: flex;
  align-items: center;
`;

const CookieConsent = () => {
  const [accepted, setAccepted] = useState(false);
  const acceptCookies = () => {
    Cookies.set(cookieKey, 'true');
    setAccepted(true);
  };
  const acceptedFromCookie = Cookies.get(cookieKey);

  return (
    <StyledCookieConsent hide={acceptedFromCookie || accepted}>
      <Container>
        <Row>
          <CookieContentCol xs={12} sm={7}>
            We use cookies on this site. Is that cool?
          </CookieContentCol>
          <CookieButtonCol xs={12} sm={5}>
            <Button as="button" onClick={acceptCookies}>
              Go for it
            </Button>
          </CookieButtonCol>
        </Row>
      </Container>
    </StyledCookieConsent>
  );
};

export default CookieConsent;
