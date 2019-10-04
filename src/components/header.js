// import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import logo from '../images/Outotec-Logo.svg';
import styled from 'styled-components';
import Container from './container';

const LogoImg = styled.img`
  height: 1.5625rem;
`;

const StyledHeader = styled.header`
  height: 5.75rem;
  display: flex;
  align-items: center;
`;

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Container>
      <a href="https://www.outotec.com" target="_blank" rel="noopener noreferrer">
        <LogoImg src={logo} alt="Outotec logo" />
      </a>
    </Container>
  </StyledHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
