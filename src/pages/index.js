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
      jaakko: file(relativePath: { eq: "jaakko-2.jpg" }) {
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
      coffee: file(relativePath: { eq: "coffee.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Home" description="" meta="" />
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
            Opportunity to have a <strong>real impact</strong> by helping our customers use Earth’s
            natural resources in a more <strong>sustainable way</strong>
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
            An environment where trying out new things and roles are encouraged; be it experimenting
            with new technologies or taking on tasks in new projects 
          </li>
        </ul>
      </ImageTextSection>

      <ImageTextSection imageData={imageData.fire.childImageSharp.fluid} imageLeft={true}>
        {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
        <h2>// What you get to do</h2>

        <p>
          We have three main solution areas with ownership to develop solutions using the latest
          technologies to meet end-user needs and business opportunities:
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
        </ol>
        <p>
          Join us to{' '}
          <a
            href="https://www.outotec.com/explore/digitalization/"
            target="_blank"
            rel="noopener noreferrer"
          >
            refine data to redefine our industry
          </a>{' '}
          and advance sustainability with{' '}
          <a
            href="https://www.outotec.com/sustainability-report/2017/our-agenda/refining-data-for-sustainability/"
            target="_blank"
            rel="noopener noreferrer"
          >
            digitalization
          </a>
          .
        </p>
      </ImageTextSection>

      <Container>
        <ChatBackgroundImage fluid={imageData.techchat.childImageSharp.fluid} Tag={'div'}>
          <ChatContent>
            <Row>
              <Col>
                <p>Would you like to chat about tech or design over a cup of coffee?</p>
                <Button onClick={() => scroller.scrollTo('contact', { smooth: true })}>
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
          Jaakko Palokangas
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
          We are a software development team, building digital solutions for Outotec customers
          around the globe. We create advanced sensors for our machines, automate and simulate our
          processes, connect them all to the cloud to enable analytics, machine learning and digital
          twin solutions.
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
        <Position title={'Lead Cloud Developer, Espoo'}>
          <p>
            We are looking for new lead developer to join our cloud-based customer portal development team. The portal is the main interface for our customers to access information such as documentation, spare part information and service requests, but it also acts as the delivery channel more advanced content such as asset health analytics, digital twin simulators or training environments.
          </p>
          <p>
            The customer portal is developed in the Outotec Digital Solutions Platform where we create factories of the future together with our customers. We are a team of over thirty software professionals focused on solving real-world challenges to improve safety, performance and sustainability of our customers’ operations. We use a multitude of different technologies such as machine vision, physics and chemistry-based simulation, advanced process control and optimization, IoT and connectivity, analytics and machine learning, and a web portal to deliver our digital services.
          </p>
          <p><strong>What awaits you</strong></p>
          <ul>
            <li>Demanding software development tasks in the multiple facets of the customer portal, frontend, backend, API’s, access management, component libraries</li>
            <li>Lead role in architecture design and technology decisions</li>
            <li>Close collaboration with the product owner and the multiple stakeholders of the portal</li>
            <li>An architect role also outside the portal team as a specialist in cloud technologies</li>
          </ul>
          <p><strong>We offer you</strong></p>
          <ul>
            <li>A diverse team of full of skills and passion, ready to support you at every turn</li>
            <li>A global environment in a world’s leading company in minerals and metals processing technology</li>
            <li>Agility within a large corporation, small enough to feel like home, large enough to have impact</li>
            <li>A chance to contribute to the ways of working</li>
            <li>Opportunities and time to learn, grow and develop yourself with training, courses, seminars, books or real project work</li>
            <li>An environment where trying out new things and roles are encouraged; be it experimenting with new technologies or taking on tasks in new projects</li>
            <li>Flexibility of work</li>
            <li>Possibility to participate in the success of the company through the Outotec share incentive program</li>
          </ul>
          <p><strong>We appreciate</strong></p>
          <ul>
            <li>Work history with developing and architecting complex systems with cloud platforms and web technologies, especially Azure, TypeScript, C# and React</li>
            <li>Experience in developing commercial products in the industrial sector</li>
            <li>Real interest in solving challenges and taking pride in the products you build</li>
            <li>Hands-on experience and experimentation in diverse technologies</li>
            <li>You to express your own opinions and justify them, to support decisions and evolve how we work as a team</li>
            <li>Learning and experimentation as a habit to develop and adapt to the changing environment</li>
            <li>Activity in local developer or open source communities</li>
          </ul>
          <p>
            We want to make the world a better place by enabling our customers to produce minerals and metals as efficiently as possible while minimizing the environmental impact! Join us in our quest!
          </p>
        </Position>
        <Position title={'Software Developer, Pori'}>
          <p>
            We are looking for new talent to join our development team for HSC Chemistry at our Pori Research Center. HSC is the main element of our modeling and simulation solutions and is the basis for Outotec engineers to design processes and dimension equipment for mineral and metals processing plants. More and more we are also exploiting the technology to create digital twins of the processing plants for training, forecasting and optimizing the operations.          </p>
          <p>
            Modeling and simulation is part of the Outotec Digital Solutions Platform where we create factories of the future together with our customers. We are a team of over thirty software professionals focused on solving real-world challenges to improve safety, performance and sustainability of our customers’ operations. We use a multitude of different technologies such as machine vision, physics and chemistry-based simulation, advanced process control and optimization, IoT and connectivity, analytics and machine learning, and a web portal to deliver our digital services.
          </p>
          <p><strong>What awaits you</strong></p>
          <ul>
            <li>Software development tasks in an agile development team using .NET technologies</li>
            <li>Designing and architecting solutions together with your team members</li>
            <li>Working together with the users to build the best possible simulation tool for their known and unknown needs</li>
            <li>Work on the simulation engine that drives our future digital solutions for training, forecasting and optimization</li>
          </ul>
          <p><strong>We offer you</strong></p>
          <ul>
            <li>A diverse team of full of skills and passion, ready to support you at every turn</li>
            <li>A global environment in a world’s leading company in minerals and metals processing technology</li>
            <li>Agility within a large corporation, small enough to feel like home, large enough to have impact</li>
            <li>A chance to contribute to the ways of working</li>
            <li>Opportunities and time to learn, grow and develop yourself with training, courses, seminars, books or real project work</li>
            <li>An environment where trying out new things and roles are encouraged; be it experimenting with new technologies or taking on tasks in new projects</li>
            <li>Flexibility of work</li>
            <li>Possibility to participate in the success of the company through the Outotec share incentive program</li>
          </ul>
          <p><strong>We appreciate</strong></p>
          <ul>
            <li>Work history with .NET or C++ applications</li>
            <li>Familiarity with cloud platforms, web technologies and architecture</li>
            <li>Experience in developing commercial products in the industrial sector</li>
            <li>Real interest in solving challenges and taking pride in the products you build</li>
            <li>Hands-on experience and experimentation in diverse technologies</li>
            <li>You to express your own opinions and justify them, to support decisions and evolve how we work as a team</li>
            <li>Learning and experimentation as a habit to develop and adapt to the changing environment</li>
            <li>Knowledge of chemistry, physics or mathematics is not required, but basic understanding can help when implementing more advanced algorithms or when interacting with technology advisors</li>
          </ul>
          <p>
            We want to make the world a better place by enabling our customers to produce minerals and metals as efficiently as possible while minimizing the environmental impact! Join us in our quest!
          </p>
        </Position>
        
        {/* 
        <Position title={'Senior Software Developer, Espoo'}>
          <p>
            We are a software development team, building digital solutions for Outotec customers
            around the globe. In practice, this means enabling sensors in machines, automated
            plants, and building remote support systems for our maintenance.
          </p>
          <p>
            We are a software development team, building digital solutions for Outotec customers
            around the globe. In practice, this means enabling sensors in machines, automated
            plants, and building remote support systems for our maintenance.
          </p>
          <p>
            We are a software development team, building digital solutions for Outotec customers
            around the globe. In practice, this means enabling sensors in machines, automated
            plants, and building remote support systems for our maintenance.
          </p>
        </Position>
        <Position title={'UX Designer, Espoo'}>
          <p>
            We are a software development team, building digital solutions for Outotec customers
            around the globe. In practice, this means enabling sensors in machines, automated
            plants, and building remote support systems for our maintenance.
          </p>
          <p>
            We are a software development team, building digital solutions for Outotec customers
            around the globe. In practice, this means enabling sensors in machines, automated
            plants, and building remote support systems for our maintenance.
          </p>
          <p>
            We are a software development team, building digital solutions for Outotec customers
            around the globe. In practice, this means enabling sensors in machines, automated
            plants, and building remote support systems for our maintenance.
          </p>
        </Position>
        */}
      </Positions>

      <ContactForm imageData={imageData.coffee.childImageSharp.fluid}>
        {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
        <h2>// Swing by for a visit</h2>
        <p>
          If this sounds like something you might be interested in, drop by for a casual chat about
          tech and design. We don’t have bean bags but we got beer. And coke. We got coffee and tea
          too. And cookies. No pressure.
        </p>
      </ContactForm>
    </Layout>
  );
};

export default IndexPage;
