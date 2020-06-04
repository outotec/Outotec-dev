import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import ImageTextSection from '../components/ImageTextSection';
import ContactForm from '../components/contact-form';
import Positions from '../components/positions';
import Position from '../components/position';
import Container from '../components/container';
import styled from 'styled-components';
import media from '../styles/media';
import Button from '../components/button';
import { Banner, BannerCol, BannerRow } from '../components/banner';
import { Row, Col } from 'react-flexbox-grid';
import { scroller } from 'react-scroll';
import BackgroundImage from 'gatsby-background-image';

const ChatContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 31rem;
  box-sizing: border-box;
  padding-top: 3rem;
  color: white;
  font-size: 2.4rem;
  line-height: 3.5rem;
  padding: 3rem;
  ${media.md} {
    font-size: 2.5rem;
    line-height: 4rem;
    padding: 8rem 12rem;
  }
  text-align: center;
`;

const ChatBackgroundImage = styled(BackgroundImage)`
  background-position: 35% 50%;
`;

const Buttons = styled.div`
  display: flex;
  a {
    margin: 2rem 3rem 2rem 0rem;
    line-height: 1rem;
  }
`;

const IndexPage = () => {
  const imageData = useStaticQuery(graphql`
    query {
      hero: file(relativePath: { eq: "hero-.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      earth: file(relativePath: { eq: "earth.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(quality: 90, maxWidth: 1000) {
            # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      fire: file(relativePath: { eq: "fire.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(quality: 90, maxWidth: 1000) {
            # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      team: file(relativePath: { eq: "team.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(quality: 90, maxWidth: 1000) {
            # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      jaakko: file(relativePath: { eq: "jaakko_bw.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      techchat: file(relativePath: { eq: "techchat.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      stack: file(relativePath: { eq: "stack.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      contact: file(relativePath: { eq: "jussi_bw.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO
        title="Digital development and design @ Outotec"
        description="Join us to build the digital future for the sustainable use of Earth’s natural resources!"
        meta=""
      />
      <Hero imageData={imageData.hero.childImageSharp.fluid}>
        {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
        <h2>
          Do you want to work with cutting edge technologies and build things at the forefront of
          the digital world?
        </h2>
        <Button onClick={() => scroller.scrollTo('positions', { smooth: true, offset: -16 })}>
          See positions
        </Button>
      </Hero>
      <ImageTextSection
        imageData={imageData.earth.childImageSharp.fluid}
        reverseImageOrderInMobile={true}
      >
        {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
        <h2>// What we offer you</h2>
        <ul>
          <li>
            Opportunity at{' '}
            <a 
              href="https://www.outotec.com/" target="_blank" rel="noopener noreferrer"
            >
              Outotec
            </a> to have a <strong>real impact</strong> by helping mining, mineral and metals companies use Earth’s natural resources in a more <strong>sustainable way</strong>
          </li>
          <li>
            Work on products, that <strong>shape entire industries</strong> through digitalization
          </li>
          <li>
            <strong>Laid back culture</strong>, with autonomy on how things get done and minimizing
            the corporate rigidity{' '}
          </li>
          <li>
            <strong>Latest tech</strong> and modern practices
          </li>
          <li>
            <strong>Co-creation</strong> and service design for identifying new ideas and refining them into concepts, prototypes and solutions together with customers and users
          </li>
          <li>
            Opportunity to <strong>build the team</strong>, the culture, and ways of working
            together (for real)
          </li>
          <li>
            An environment where trying out new things and roles are encouraged - be it{' '}
            <strong>experimenting</strong> with new technologies or taking on new tasks
          </li>
        </ul>
      </ImageTextSection>

      <ImageTextSection imageData={imageData.fire.childImageSharp.fluid} imageLeft={true}>
        {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
        <h2>// What you get to do</h2>

        <p>
          We have three main solution areas with ownership to develop solutions using the latest
          technologies to meet end-user needs and business opportunities.
        </p>

        <ol>
          <li>
            <strong>Intelligent Automation</strong> - Real-time systems for advanced measurements, process control and optimization, reporting and remote support of operations
          </li>
          <li>
            <strong>Digital Services</strong> - Cloud-based systems for providing digital content and services for customer engagement, real-time insight into assets and processes with connectivity, analytics and simulations
          </li>
          <li>
            <strong>Modeling and Simulation</strong> - Tools for modeling and simulating chemical, metallurgical and mineral processes to design plants and analyze their performance, costs and environmental footprint
          </li>
        </ol>
        <p>
          See more about Outotec's digitalization
          <br/>
          → <a
            href="https://www.outotec.com/explore/digitalization/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Refining data - redefining our industry
          </a>
          <br/>
          → <a
            href="https://www.outotec.com/sustainability-report/2017/our-agenda/refining-data-for-sustainability/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Refining data for sustainability
          </a>
        </p>
      </ImageTextSection>

      <Container>
        <ChatBackgroundImage fluid={imageData.techchat.childImageSharp.fluid} Tag={'div'}>
          <ChatContent>
            <Row>
              <Col>
                <p>Would you like to chat about tech or design over a cup of coffee?</p>
                <Button onClick={() => scroller.scrollTo('contact', { smooth: true, offset: -16 })}>
                  Sure thing!
                </Button>
              </Col>
            </Row>
          </ChatContent>
        </ChatBackgroundImage>
      </Container>

      <ImageTextSection
        imageData={imageData.jaakko.childImageSharp.fluid}
        hideWhiteBg={true}
        mobileImageHeight={'32rem'}
        objectPosition={'top left'}
        reverseImageOrderInMobile={true}
      >
        {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
        <h4>
          “I love the challenges and flexibility in my role. We've succeeded in developing a machine
          vision system that’s been tried for 30 years.”
        </h4>
        <p>
          <strong>Jaakko Palokangas</strong>
          <br />
          Team lead, Intelligent Automation
        </p>
      </ImageTextSection>

      <Banner>
        <BannerRow center="xs">
          <BannerCol>
            <h2>No fluff, real impact</h2>
          </BannerCol>
        </BannerRow>
        <BannerRow>
          <BannerCol lg={4}>
            <h3>6.2 million tonnes</h3>
            <p>CO2 emissions avoided</p>
          </BannerCol>
          <BannerCol lg={4}>
            <h3>90% green products</h3>
            <p>Of our order intake</p>
          </BannerCol>
          <BannerCol lg={4}>
            <h3>12th most sustainable</h3>
            <p>Company in the world</p>
          </BannerCol>
        </BannerRow>
      </Banner>

      <ImageTextSection
        imageData={imageData.team.childImageSharp.fluid}
        wideImage={true}
        reverseImageOrderInMobile={true}
      >
        {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
        <h2>// Your team</h2>
        <p>
          We are a software development team of over thirty software professionals, including developers, designers, product owners and other specialists. Together with the businesses, we build digital solutions for Outotec customers around the globe. We create advanced sensors for our machines, automate and simulate our processes, connect them all to the cloud to enable analytics, machine learning and digital twin solutions.
        </p>
        <p>
          Bit by bit, we bring modern software and design practices to a relatively conservative
          industry, where our people have a real impact.
        </p>
      </ImageTextSection>

      <ImageTextSection
        imageData={imageData.stack.childImageSharp.fluid}
        imageLeft={true}
        hideWhiteBg={true}
        objectFit={'contain'}
      >
        {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
        <h2>// Your tech & design stack</h2>
        <p>
          For all things web & cloud, we use Azure cloud services, build backends and API's with C#
          and Node.js, fronts with TypeScript and React. Execution-critical systems, desktop tools
          and sensor solutions we develop on .NET with a modular architecture and queue-based
          interfaces. Throw in a bit of ML magic with Python and we're done!
        </p>
        <p>
          We use a modern design stack. As part of our Design system, we use Sketch UI Kit libraries
          and Abstract version control that combined help us move fast forward from prototypes to
          finished design while maintaining consistency.
        </p>
        <p>
          We don’t expect you to know everything. Having a passion for learning and improving is the
          key. We support learning by giving you the time and resources to go to conferences and
          take courses to develop as a professional.
        </p>
      </ImageTextSection>

      <Positions title={"We're looking for"}>
        <Position title={"Desing system owner"}>
          <p>
            We are looking for experienced design talent to become the owner of our new Outotec Design system (based at{' '}
            <a 
              href="https://goo.gl/maps/7NYQUQNNr9txc82j9" target="_blank" rel="noopener noreferrer"
            >
              Outotec HQ in Espoo, Finland
            </a>
            ). 
            We believe that a design system guarantees our users a consistent Outotec-branded experience across all our digital products and services. For development teams, the reusable components and patterns of the Sketch- and React-based libraries coupled with design principles and process inspire and accelerate the development to create even better digital solutions for our customers.
          </p>
          <p>
            As the versatile and inspiring owner of the Outotec Design system, you will take the Design system to the next level and beyond the minimum viable product. You will continue to build a company-wide system that can tackle even more challenging needs of our digital offering ranging from customer portal to asset analytics to digital twins or even venture to operator room user interfaces or equipment touch panels. 
          </p>
          <p>
            The Design system is developed as a part of Outotec’s Digital Solutions Platform – a platform focused on solving real-world challenges to improve safety, performance and sustainability of our customers’ operations. 
          </p>
          <p>
            <strong>As Design system owner, you will</strong>
          </p>
          <ul>
            <li>
              Develop and curate the Outotec Design system – design principles, libraries of patterns and user interface components, as well as templates and tools
            </li>
            <li>
              Form a clear vision for the Design system that brings the most value for Outotec digital solutions
            </li>
            <li>
              Represent and support the Design system users and discover their articulated as well as latent needs
            </li>
            <li>
              Work closely with the Design system users, i.e. other agile development teams and their product owners
            </li>
            <li>
              Create, refine and prioritize the development backlog using agile product development practices
            </li>
            <li>
              Enable the small Design system team of designers and developers to successfully deliver value
            </li>
            <li>
              Participate in the Outotec design community and contribute to hands-on design work as necessary
            </li>
          </ul>
          <p>
            <strong>To succeed, you will need</strong>
          </p>
          <ul>
            <li>
              Solid hands-on experience in user interface and user experience design
            </li>
            <li>
              Work history in agile software product development as a designer or product owner
            </li>
            <li>
              Good understanding of modern software development or even some basic skills of front-end development
            </li>
            <li>
              Knowledge of what makes a user interface great; the beauty, the simplicity, the interaction, the code
            </li>
            <li>
              Eye for aesthetics and visual user interface design
            </li>
            <li>
              Good communication and people skills
            </li>
            <li>
              Fluent English required, Finnish skills can be useful
            </li>
          </ul>
          <p>
            We offer you exciting and cool work on digitalization projects in an industrial domain with a team full of skills and passion. You will work in a global environment and will have excellent possibilities to develop your personal and professional skills in a world’s leading company in minerals and metals processing technology.
          </p>

          <Buttons>
            <Button 
              href="https://app.outotec.com/hr/applications.nsf/vwOpenJobs/0D23CA8F9268A1DAC225857D001C213F?OpenDocument" target="_blank" rel="noopener noreferrer"
            >
              Apply now!
            </Button>
          </Buttons>
        </Position>
      </Positions>

      {/*
      <Positions title={'Our friends are looking too...'} hideImage={true}>
      </Positions>
      */}

      <ContactForm imageData={imageData.contact.childImageSharp.fluid}>
        {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
        <h2>// Let's talk</h2>
        <p>
          If this sounds like something you might be interested in, leave us a note below and let's discuss more. We don't have bean bags, but we're always ready for a casual chat about tech or design over a beer. Or coffee. Or tea. With cookies even? Phone or e-mail work too. No pressure.
        </p>
        <p>
          <strong>Jussi Järvinen</strong>
          <br />
          <span>Director, Digital Solutions Platform</span>
          <br />
          <a href="mailto:jussi.jarvinen@outotec.com">jussi.jarvinen@outotec.com</a>
          <br />
          <a href="tel:+358 40 831 2769">+358 40 831 2769</a>
          <br />
        </p>
      </ContactForm>
    </Layout>
  );
};

export default IndexPage;
