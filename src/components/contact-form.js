import React from 'react';
import Container from './container';
import BackgroundImage from 'gatsby-background-image';
import styled from 'styled-components';
import Button from './button';
import media from '../styles/media';
import { Row, Col } from 'react-flexbox-grid';
import { Formik } from 'formik';
import { colors } from '../styles/constants';
import { CircleSpinner } from 'react-spinners-kit';
import AnimateHeight from 'react-animate-height';

const Field = styled.div`
  margin-bottom: 1rem;
  label {
    display: block;
    color: white;
    margin-bottom: 0.4rem;
    margin-left: 0.15rem;
    width: 100%;
    max-width: 20.5rem;
    margin: 0;
  }
  input {
    background-color: #ffffff;
    border: 1px solid #d2d2d2;
    height: 35px;
    width: 100%;

    box-sizing: border-box;
  }
  input[type='checkbox'] {
    width: 1rem;
    height: 1rem;
    margin-right: 0.5rem;
  }
  textarea {
    width: 100%;
    height: 5rem;
    resize: none;
  }
`;

const Message = styled.div`
  color: white;
  font-size: 0.8rem;
  height: 1rem;
`;

const ConsentLabel = styled.label`
  display: inline !important;
  a {
    color: white;
  }
`;

const FormButton = styled(Button)`
  color: ${colors.accent1};
  background-color: white;
  padding-top: 0.9rem;
  padding-bottom: 1.1rem;
  padding-left: 4rem;
  padding-right: 4rem;
  height: 2.875rem;
  border: none;
  width: 100%;
  ${media.sm} {
    width: auto;
  }
  span {
    display: flex;
    justify-content: center;
    min-width: 5.4rem;
    min-height: 1.125rem;
  }
  ${props =>
    props.disabled &&
    `
    padding-top: 0;
    padding-bottom: 0;
  `}
`;

const FormCol = styled(Col)``;

const StyledForm = styled.form`
  ${media.lg} {
    width: 20.5rem;
  }
  ${media.sm} {
    margin: 2.5rem 5.3125rem 2.5rem 5.3125rem;
  }
  margin: 2.5rem 2rem 2.5rem 2rem;
`;

const FormContainer = styled.div`
  padding-top: 1px;
  padding-bottom: 1px;
  width: auto;
  background-color: ${colors.accent1};

  ${media.xl} {
    float: right;
  }
`;

const FormIntro = styled.div`
  max-width: 25rem;
  ${media.xl} {
    float: right;
  }
`;

const ThankYouMessage = styled.div`
  ${props => !props.visible && `display: none;`}
  h2 {
    font-size: 1.5rem;
    margin: 2.5rem 2rem 2.5rem 2rem;
    color: white;
  }
`;

const ImageCol = styled(Col)`
  background-image: url(${''});
  ${media.xl} {
    margin-bottom: -28rem;
  }
  z-index: -1;
`;

const StyledImage = styled(BackgroundImage)`
  ${media.md} {
    height: 400px;
  }
  ${media.xl} {
    width: 22.5rem;
    height: 35.625rem;
  }
  width: 100%;
  height: 300px;
`;

const Spinner = styled(CircleSpinner)`
  margin-top: -0.5rem;
  margin-bottom: -0.5rem;
`;

const validate = values => {
  let errors = {};

  if (!values.name) {
    errors.name = '* Required';
  }
  if (!values.phone) {
    errors.phone = '* Required';
  }

  if (!values.consent) {
    errors.consent = '* Required';
  }

  if (!values.email) {
    errors.email = '* Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = '* Invalid email address';
  }
  return errors;
};

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      status: 'INITIAL',
    };
  }

  onSubmit = (values, { setSubmitting }) => {
    const url = `//${window && window.location.host}/.netlify/functions/form`;
    const request = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    };

    fetch(url, request)
      .then(response => {
        if (response.ok) {
          setSubmitting(false);
          this.setState(prevState => ({
            ...prevState,
            status: 'SUBMITTED',
          }));
        } else {
          throw new Error(
            `Form submission failed. Request to url ${response.url} responded with ${
              response.status
            } - ${response.statusText}\n Request: ${JSON.stringify(request, null, 4)}`,
          );
        }
      })
      .catch(error => {
        console.log(error);
        alert('Submitting the form failed. Please try again.');
        setSubmitting(false);
      });
  };

  render() {
    const { children, imageData } = this.props;
    return (
      <Container>
        <Row>
          <ImageCol sm={12} md={10} mdOffset={1} xlOffset={0}>
            <StyledImage Tag="section" fluid={imageData} backgroundColor={`white`}></StyledImage>
          </ImageCol>
        </Row>
        <Row id="contact">
          <Col xs={12} md={10} mdOffset={1} lgOffset={3} xlOffset={2} xl={6}>
            <FormIntro>{children}</FormIntro>
          </Col>
        </Row>
        <Row>
          <FormCol xs={12} md={10} lg={6} mdOffset={1} lgOffset={3} xlOffset={2} xl={6}>
            <FormContainer>
              <AnimateHeight duration={500} height={this.state.status !== 'SUBMITTED' ? 'auto' : 0}>
                {
                  <Formik
                    initialValues={{
                      name: '',
                      linkedin: '',
                      email: '',
                      phone: '',
                      message: '',
                      consent: '',
                    }}
                    validate={validate}
                    onSubmit={this.onSubmit}
                  >
                    {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                      /* and other goodies */
                    }) => (
                      <StyledForm onSubmit={!isSubmitting ? handleSubmit : undefined}>
                        <Field>
                          <label htmlFor="name">Your name</label>
                          <input
                            id="name"
                            type="name"
                            name="name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                          />
                          <Message>{errors.name && touched.name && errors.name}</Message>
                        </Field>
                        <Field>
                          <label htmlFor="linkedin">Your LinkedIn profile</label>
                          <input
                            id="linkedin"
                            type="linkedin"
                            name="linkedin"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.linkedin}
                          />
                          <Message>
                            {errors.linkedin && touched.linkedin && errors.linkedin}
                          </Message>
                        </Field>
                        <Field>
                          <label htmlFor="email">Your email address</label>
                          <input
                            id="linkedin"
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                          />
                          <Message>{errors.email && touched.email && errors.email}</Message>
                        </Field>
                        <Field>
                          <label htmlFor="phone">Your phone number</label>
                          <input
                            id="phone"
                            type="phone"
                            name="phone"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.phone}
                          />
                          <Message>{errors.phone && touched.phone && errors.phone}</Message>
                        </Field>
                        <Field>
                          <label htmlFor="message">Questions? Free word</label>
                          <textarea
                            id="message"
                            type="message"
                            name="message"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.message}
                          />
                          <Message>
                            {errors.message && touched.message && `${errors.message}`}
                          </Message>
                        </Field>
                        <Field>
                          <input
                            id="consent"
                            name="consent"
                            type="checkbox"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.consent}
                          />
                          <ConsentLabel htmlFor="consent">
                            Yes, I give the consent to Outotec to store and use my contact
                            information to respond to my inquiry
                            <p>
                              We respect your privacy, information is collected and processed
                              according to{' '}
                              <a
                                href="https://www.outotec.com/site/Data-protection-and-privacy/#privacy"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Outotec Privacy Statement.
                              </a>
                            </p>
                          </ConsentLabel>
                          <Message>{errors.consent && touched.consent && errors.consent}</Message>
                        </Field>
                        <Field>
                          <FormButton type="submit" disabled={isSubmitting} as="button">
                            <span>
                              {isSubmitting ? (
                                <Spinner size={18} color={colors.accent1} loading={true} />
                              ) : (
                                `Let's Chat`
                              )}
                            </span>
                          </FormButton>
                        </Field>
                      </StyledForm>
                    )}
                  </Formik>
                }
              </AnimateHeight>
              <AnimateHeight duration={500} height={this.state.status !== 'SUBMITTED' ? 0 : 'auto'}>
                <ThankYouMessage visible={this.state.status === 'SUBMITTED'}>
                  <h2>Thank you! We'll be in contact.</h2>
                </ThankYouMessage>
              </AnimateHeight>
            </FormContainer>
          </FormCol>
        </Row>
      </Container>
    );
  }
}

export default ContactForm;
