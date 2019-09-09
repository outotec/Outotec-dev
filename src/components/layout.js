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
import Hero from './hero';
import logo from '../images/Outotec-Logo.svg';
import { Row, Col } from 'react-flexbox-grid';
import { colors } from '../styles/constants';

const StyledLayout = styled.div``;

const LogoImg = styled.img`
  height: 2rem;
`;

const StyledFooter = styled.footer`
  width: 100%;
  padding: 1.4rem 0 2.4rem 0;
  margin-top: 3.75rem;
  border-top: 1px solid ${colors.separator};
  h3 {
    color: ${colors.accent1};
    font-family: 'DIN3';
    font-size: 1rem;
  }

  line-height: 1.5rem;
  p {
    font-family: 'DIN3';
  }
`;

const StyledCol = styled(Col)`
  padding-top: 1rem;
  padding-bottom: 1rem;
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
      <main>
        <Hero />
      </main>
      <StyledFooter>
        <Container>
          <Row>
            <StyledCol xs={12} sm={4} md={3}>
              <LogoImg src={logo} />
            </StyledCol>
            <StyledCol xs={12} sm={4} md={3}>
              {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
              <h3>// Talk to a real human</h3>
              <p>
                Mikko Tikkanen
                <br />+ 358 44 687 3476
              </p>
            </StyledCol>
            <StyledCol xs={12} sm={4} md={3}>
              {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
              <h3>// Hang out</h3>
              <p>
                Rauhalanpuisto 9,
                <br />
                02230 Espoo,
                <br />
                Finland
              </p>
            </StyledCol>
          </Row>
        </Container>
      </StyledFooter>
      <GlobalStyles />
    </StyledLayout>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
