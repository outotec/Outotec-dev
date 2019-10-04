/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { GlobalStyles } from '../styles/global';
import styled from 'styled-components';
import Header from './header';
import Container from './container';
import logo from '../images/Outotec-Logo.svg';
import slogan from '../images/outotec-slogan.svg';
import xPattern from '../images/x-pattern.svg';
import media from '../styles/media';
import CookieConsent from '../components/cookie-consent';
const StyledLayout = styled.div``;

const PatternBackground = styled.div`
  z-index: -1;
  position: absolute;
  top:21rem;
  right: 71rem;
  width: 100%;
  height: 33rem;
  background-image: url('${xPattern}');
  
`;

const LogoImg = styled.img`
  ${media.lg} {
    height: 1.5625rem;
  }
  height: 2.5625rem;
`;

const SloganImg = styled.img`
  ${media.lg} {
    height: initial;
  }
  height: 2.3125rem;
`;

const StyledFooter = styled.footer`
  width: 100%;
  margin-top: 3.75rem;
`;

const FooterContainer = styled(Container)`
  display: flex;
  align-items: center;

  flex-wrap: wrap;
  margin-top: 5.375rem;
  margin-bottom: 5.375rem;

  ${media.lg} {
    margin-top: 3rem;
    margin-bottom: 3rem;
  }
  div {
    display: flex;

    width: 100%;
    justify-content: center;
    &:first-child {
      margin-bottom: 1.875rem;
    }
    ${media.lg} {
      &:first-child {
        margin-bottom: 0;
      }
      width: auto;
      justify-content: initial;
    }
    margin-right: 1.75rem;
  }
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <StyledLayout>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Container>
        <div style={{ position: 'relative' }}>
          <PatternBackground></PatternBackground>
        </div>
      </Container>
      <main>{children}</main>
      <StyledFooter>
        <FooterContainer>
          <div>
            <a href="https://www.outotec.com" target="_blank" rel="noopener noreferrer">
              <LogoImg src={logo} alt="Outotec logo" />
            </a>
          </div>
          <div>
            <SloganImg src={slogan} />
          </div>
        </FooterContainer>
      </StyledFooter>
      <CookieConsent />
      <GlobalStyles />
    </StyledLayout>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
