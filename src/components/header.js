// import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Container from './container';
import logo from '../images/Outotec-Logo.svg';
import styled from 'styled-components';

const LogoImg = styled.img`
  height: 2rem;
`;

const StyledHeader = styled.header`
  height: 5.5rem;
  display: flex;
  align-items: center;
`;

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Container>
      <LogoImg src={logo} />
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
