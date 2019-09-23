import React from 'react';
import Container from './container';
import BackgroundImage from 'gatsby-background-image';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import { StaticQuery } from 'gatsby';

const StyledImage = styled(BackgroundImage)`
  width: 100%;
  height: 300px;
`;

const PositionContainer = styled(Container)`
  margin-top: 3rem;
  margin-bottom: 5rem;
`;

class Positions extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <PositionContainer>
        <Row>
          <Col id="positions" sm={12} md={10} mdOffset={1}>
            <StaticQuery
              query={graphql`
                query {
                  desktop: file(relativePath: { eq: "ocs2.jpg" }) {
                    childImageSharp {
                      fluid(quality: 90, maxWidth: 1000) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                      }
                    }
                  }
                }
              `}
              render={data => (
                <StyledImage fluid={data.desktop.childImageSharp.fluid}></StyledImage>
              )}
            />
            {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
            <h2>// We're looking for</h2>
          </Col>
        </Row>
        <Row>{children}</Row>
      </PositionContainer>
    );
  }
}

export default Positions;
