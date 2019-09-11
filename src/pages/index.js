import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import ImageTextSection from '../components/ImageTextSection';
import earth from '../images/earth.png';
import namibia from '../images/outotec-dpmt-tsumeb-namibia30.png';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <ImageTextSection imageSrc={earth}>
      {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
      <h2>// We challenge you</h2>
      <ul>
        <li>
          Opportunity to have a <strong>real impact</strong> on making companies use Earth’s natural
          resources in a more <strong>sustainable way</strong>
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
    <ImageTextSection imageSrc={namibia} imageLeft={true} hideImageInMobile={true}>
      {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
      <h2>// What you get to build</h2>

      <p>
        We have 3 main solution areas, in each, we have ownership and are developing several
        products:
      </p>
      <ol>
        <li>
          <strong>Intelligent Automation</strong> - Real-time systems and tools that automatically
          sense, think and control
        </li>
        <li>
          <strong>Digital Services</strong> - Connected customers enjoying our services in the
          physical and digital
        </li>
        <li>
          <strong>Modeling and Simulation</strong> - Digitizing our process technology and knowhow
          with chemistry and metallurgy
        </li>
        <p>
          Explore more about Outotec digitalization in{' '}
          <a href="https://" target="_blank" rel="noopener noreferrer">
            Refining data - redefining plants
          </a>{' '}
          and how digitalization advances sustainability from our{' '}
          <a href="https://" target="_blank" rel="noopener noreferrer">
            Sustainability report
          </a>
          .
        </p>
      </ol>
    </ImageTextSection>
  </Layout>
);

export default IndexPage;
