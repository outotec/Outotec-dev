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
      fire: file(relativePath: { eq: "fire.png" }) {
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
            <strong>Co-creation</strong> for identifying new ideas and refining them into concepts,
            prototypes and solutions together with customers and users
          </li>
          <li>
            Opportunity to <strong>build the team</strong>, the culture, and ways of working
            together (for real)
          </li>
          <li>
            An environment where trying out new things and roles are encouraged - be it{' '}
            <strong>experimenting</strong> with new technologies or taking on tasks in new projects
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
          We are a software development team of over thirty software professionals, building digital solutions for Outotec customers around the globe. We create advanced sensors for our machines, automate and simulate our processes, connect them all to the cloud to enable analytics, machine learning and digital twin solutions.
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

      <Positions>
        <Position title={'Lead Cloud Developer'}>
          <p>
            We are looking for new lead developer to join our customer portal development team at{' '}
            <a 
              href="https://goo.gl/maps/7NYQUQNNr9txc82j9" target="_blank" rel="noopener noreferrer"
            >
              Outotec HQ in Espoo, Finland
            </a>
            . The cloud-based portal will offer asset analytics, digital twins or virtual training environments, and access to information such as documents, spare part catalogs and service requests to our customers.
          </p>
          <p>
            The customer portal is developed as part of Outotec’s Digital Solutions Platform – a
            team of over thirty software professionals focused on solving real-world challenges to
            improve safety, performance and sustainability of our customers’ operations. We use a
            multitude of technologies such as machine vision, physics and chemistry-based
            simulation, advanced process control and optimization, IoT and connectivity, analytics
            and machine learning, and a web portal to enable development and delivery of Outotec’s
            digital services.
          </p>
          <p>
            <strong>What awaits you</strong>
          </p>
          <ul>
            <li>
              Lead role in architecture design and technology decisions regarding the customer
              portal
            </li>
            <li>Close collaboration with the product owner and the multiple stakeholders</li>
            <li>
              Demanding software development tasks in the frontend, backend, API’s, access
              management, component libraries, etc., using Azure services, Node.js, C#, TypeScript and React.js
            </li>
            <li>An architect role outside the portal team as a specialist in cloud technologies</li>
          </ul>
          <p>
            <strong>We offer you</strong>
          </p>
          <ul>
            <li>A diverse team full of skills and passion, ready to support you at every turn</li>
            <li>
              A global environment in a company that provides leading technologies and services for
              the sustainable use of Earth’s natural resources
            </li>
            <li>
              Agility within a large corporation – small enough to feel like home, large enough to
              have impact
            </li>
            <li>A chance to contribute to our ways of working</li>
            <li>
              Opportunities and time to learn, grow and develop yourself with training, courses,
              seminars, books and real project work
            </li>
            <li>
              An environment where trying out new things and roles are encouraged
            </li>
            <li>Flexibility of work</li>
          </ul>
          <p>
            <strong>We appreciate</strong>
          </p>
          <ul>
            <li>
              Work history with developing and architecting complex systems with cloud platforms and
              web technologies, especially Azure, TypeScript, C# and React.js
            </li>
            <li>Experience in developing commercial products in the industrial sector</li>
            <li>Real interest in solving challenges and taking pride in the products you build</li>
            <li>Hands-on experience and experimentation in diverse technologies</li>
            <li>
              Skills and willingness to express your own opinions and to justify them, for
              supporting decision making and developing the ways we work as a team
            </li>
            <li>
              Learning and experimentation as a habit to develop and adapt to the changing
              environment
            </li>
            <li>Activity in local developer or open source communities</li>
          </ul>
          <p>
            We want to make the world a better place by enabling our customers to produce minerals
            and metals as efficiently as possible while minimizing the environmental impact! Join us
            in our quest!
          </p>
          <Buttons>
            <Button onClick={() => scroller.scrollTo('contact', { smooth: true, offset: -16 })}>
              Let's talk!
            </Button>
          </Buttons>
        </Position>
        <Position title={'.NET Developer'}>
          <p>
            We are looking for new talent to join our development team for{' '}
            <a href="http://www.outotec.com/HSC" target="_blank" rel="noopener noreferrer">
              HSC Chemistry
            </a>{' '}
            at our{' '}
            <a
              href="https://goo.gl/maps/VrHRmTNDXJE7a5hH9" target="_blank" rel="noopener noreferrer"
            >
              Pori Research Center, Finland
            </a>
            . HSC is a unique Windows software package for modeling and simulation of chemical, metallurgical and mineral processing technologies. It is the basic tool to design processing plants and analyze their performance, costs and environmental footprint. The same powerful simulation engine may also be used to create digital twins to optimize process operation, make predictions and train operators.
          </p>
          <p>
            Modeling and simulation is part of Outotec’s Digital Solutions Platform – a team of over
            thirty software professionals focused on solving real-world challenges to improve
            safety, performance and sustainability of our customers’ operations. We use a multitude
            of different technologies such as machine vision, physics and chemistry-based
            simulation, advanced process control and optimization, IoT and connectivity, analytics
            and machine learning, and a web portal to deliver our digital services.
          </p>
          <p>
            <strong>What awaits you</strong>
          </p>
          <ul>
            <li>
              Software development of the calculation modules and user interfaces in an agile
              development team using .NET technology for Windows applications
            </li>
            <li>Designing and architecting solutions together with your team members</li>
            <li>
              Work on the engine that drives our future simulation-based digital solutions for
              training, prediction and optimization
            </li>
            <li>
              Working together with the users to build the best possible simulation tool for their
              known and unknown needs
            </li>
          </ul>
          <p>
            <strong>We offer you</strong>
          </p>
          <ul>
            <li>A diverse team full of skills and passion, ready to support you at every turn</li>
            <li>
              A global environment in a company that provides leading technologies and services for
              the sustainable use of Earth’s natural resources
            </li>
            <li>
              Agility within a large corporation – small enough to feel like home, large enough to
              have impact
            </li>
            <li>A chance to contribute to our ways of working</li>
            <li>
              Opportunities and time to learn, grow and develop yourself with training, courses,
              seminars, books and real project work
            </li>
            <li>
              An environment where trying out new things and roles are encouraged
            </li>
            <li>Flexibility of work</li>
          </ul>
          <p>
            <strong>We appreciate</strong>
          </p>
          <ul>
            <li>
              Work history in developing commercial Windows desktop applications, preferably with .NET technologies
            </li>
            <li>
              Familiarity and experimentation with diverse technologies such as cloud platforms    and web technologies
            </li>
            <li>Real interest in solving challenges and taking pride in the products you build</li>
            <li>
              Skills and willingness to express your own opinions and to justify them, for
              supporting decision making and developing the ways we work as a team
            </li>
            <li>
              Learning and experimentation as a habit to develop and adapt to the changing
              environment
            </li>
            <li>
              Knowledge of chemistry, physics or mathematics is not required, but basic
              understanding can help when implementing more advanced algorithms or when interacting
              with technology advisors
            </li>
          </ul>
          <p>
            We want to make the world a better place by enabling our customers to produce minerals
            and metals as efficiently as possible while minimizing the environmental impact! Join us
            in our quest!
          </p>
          <Buttons>
            <Button
              href="https://app.outotec.com/hr/applications.nsf/vwOpenJobs/FFBFB414EB1651C5C2258378002D9C11" target="_blank" rel="noopener noreferrer"
            >
              Apply now!
            </Button>
          </Buttons>
        </Position>
      </Positions>

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
