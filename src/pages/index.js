import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Container from '../components/container';
import Hero from '../components/hero';
import ImageTextSection from '../components/ImageTextSection';
import earth from '../images/earth.png';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <Hero />
      <ImageTextSection imageSrc={earth}>
        {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
        <h2>// We challenge you</h2>
        <ul>
          <li>
            Opportunity to have a <strong>real impact</strong> on making companies use Earth’s
            natural resources in a more <strong>sustainable way</strong>
          </li>
          <li>
            You will be working on products, that <strong>shape entire industries</strong>
          </li>
          <li>
            Laid back culture, where things are done as we see fit for each case, minimising
            unnecessary bureaucracy{' '}
          </li>
          <li>
            <strong>Latest tech</strong> and modern practices
          </li>
          <li>
            The opportunity to <strong>build the team</strong>, the culture, and ways of working
            together (for real)
          </li>
        </ul>
      </ImageTextSection>
    </Container>
  </Layout>
);

export default IndexPage;
