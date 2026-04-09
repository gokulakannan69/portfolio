import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactSection = styled.section`
  padding: 150px 25px;
  background: ${props => props.theme.backgroundLight};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 80px;

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1.2fr;
  }
`;

const ContactInfo = styled.div`
  h2 {
    font-size: clamp(40px, 8vw, 80px);
    line-height: 0.9;
    margin-bottom: 40px;
    color: ${props => props.theme.text};
  }

  .details {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
`;

const InfoItem = styled.div`
  h4 {
    font-family: ${props => props.theme.fontMono};
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 2px;
    opacity: 0.5;
    margin-bottom: 5px;
  }
  a, p {
    font-size: 20px;
    font-weight: 700;
    color: ${props => props.theme.text};
  }
`;

const ContactForm = styled.form`
  background: ${props => props.theme.background};
  padding: 50px;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.cardShadow};
  border: ${props => props.theme.cardBorder};
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  label {
    font-family: ${props => props.theme.fontMono};
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 1px;
    opacity: 0.6;
  }

  input, textarea {
    padding: 15px;
    background: ${props => props.theme.backgroundLight};
    border: 1px solid rgba(0,0,0,0.05);
    border-radius: 8px;
    font-family: inherit;
    font-size: 16px;
    transition: all 0.3s ease;
    color: ${props => props.theme.text};

    &:focus {
      outline: none;
      border-color: #000;
      background: #fff;
    }
  }
`;

const SubmitBtn = styled.button`
  padding: 20px;
  background: #000;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all 0.3s ease;
  margin-top: 10px;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  }
`;

const CustomFooter = styled.footer`
  padding: 80px 25px;
  text-align: center;
  border-top: 1px solid rgba(0,0,0,0.05);
  background: ${props => props.theme.backgroundLight};

  p {
    font-family: ${props => props.theme.fontMono};
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 1px;
    opacity: 0.5;
  }
`;

const Contact = () => {
  return (
    <>
      <ContactSection id="contact">
        <Container>
          <ContactGrid>
            <ContactInfo>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                LET'S<br/>BUILD<br/>SOMETHING.
              </motion.h2>
              
              <div className="details">
                <InfoItem>
                  <h4>Email</h4>
                  <a href="mailto:gokulkannangk28@gmail.com">gokulkannangk28@gmail.com</a>
                </InfoItem>
                <InfoItem>
                  <h4>Phone</h4>
                  <p>+91 93614 43302</p>
                </InfoItem>
                <InfoItem>
                  <h4>Location</h4>
                  <p>Chennai, India</p>
                </InfoItem>
              </div>
            </ContactInfo>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <ContactForm>
                <FormGroup>
                  <label>Full Name</label>
                  <input type="text" placeholder="Gokulakannan" />
                </FormGroup>
                <FormGroup>
                  <label>Email Address</label>
                  <input type="email" placeholder="email@example.com" />
                </FormGroup>
                <FormGroup>
                  <label>Your Message</label>
                  <textarea rows="5" placeholder="Tell me about your project..." />
                </FormGroup>
                <SubmitBtn type="submit">Send Message</SubmitBtn>
              </ContactForm>
            </motion.div>
          </ContactGrid>
        </Container>
      </ContactSection>

      <CustomFooter>
        <p>&copy; {new Date().getFullYear()} GOKULAKANNAN // ALL RIGHTS RESERVED</p>
      </CustomFooter>
    </>
  );
};

export default Contact;