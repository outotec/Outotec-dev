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
  margin-bottom: 3rem;
`;

class Positions extends React.Component {
  render() {
    console.log(this.props);
    const { children } = this.props;
    return (
      <PositionContainer>
        <Row>
          <Col sm={12} md={8} mdOffset={2}>
            <StaticQuery
              query={graphql`
                query {
                  desktop: file(relativePath: { eq: "ors.png" }) {
                    childImageSharp {
                      fluid(quality: 90, maxWidth: 1200) {
                        ...GatsbyImageSharpFluid_withWebp
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
            <h2>// Open positions</h2>
          </Col>
        </Row>
        <Row>{children}</Row>
      </PositionContainer>
    );
  }
}

export default Positions;
