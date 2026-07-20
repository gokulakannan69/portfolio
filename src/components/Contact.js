import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import { theme } from '../utils/theme';
import { device } from '../utils/mediaQueries';

const ContactSection = styled.section`
  min-height: 100vh;
  padding: 100px 0;
  background: ${theme.background};
  color: ${theme.text};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
`;

const Subtitle = styled(motion.p)`
  color: ${theme.accent};
  font-family: ${theme.fontMono};
  font-size: 1rem;
  margin-bottom: 1rem;
  
  ${device.tablet} {
    font-size: 1.1rem;
  }
`;

const Title = styled(motion.h2)`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: ${theme.lightGray};
  font-weight: 700;

  ${device.tablet} {
    font-size: 3.5rem;
    margin-bottom: 2rem;
  }
`;

const Description = styled(motion.p)`
  color: ${theme.text};
  font-size: 1rem;
  margin-bottom: 2.5rem;
  line-height: 1.7;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 10px;
  
  ${device.tablet} {
    font-size: 1.15rem;
    margin-bottom: 3rem;
    padding: 0;
  }
`;

const EmailLink = styled(motion.a)`
  display: inline-block;
  padding: 1rem 2rem;
  background: ${theme.accent};
  color: ${theme.background};
  text-decoration: none;
  border-radius: 50px;
  font-family: ${theme.fontMono};
  font-size: 0.95rem;
  font-weight: 500;
  transition: ${theme.transition};
  margin-bottom: 2.5rem;
  box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.39);

  ${device.tablet} {
    padding: 1.25rem 2.5rem;
    font-size: 1.1rem;
    margin-bottom: 3rem;
  }

  &:hover {
    background: ${theme.primary};
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.5);
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 4rem;

  a {
    color: ${theme.text};
    font-size: 2rem;
    transition: ${theme.transition};

    &:hover {
      color: ${theme.accent};
      transform: translateY(-5px);
    }
  }
`;

const Footer = styled.footer`
  margin-top: 3rem;
  font-family: ${theme.fontMono};
  font-size: 0.9rem;
  color: ${theme.text};
  opacity: 0.7;
  
  p {
    margin: 0.5rem 0;
  }
`;

const Contact = () => {
  return (
    <ContactSection id="contact">
      <Container>
        <Subtitle data-aos="fade-up">
          What's next?
        </Subtitle>
        <Title data-aos="fade-up" data-aos-delay="100">
          Get In Touch
        </Title>
        <Description data-aos="fade-up" data-aos-delay="200">
          I'm always interested in new opportunities and collaborations. Feel free to reach out
          if you'd like to discuss a project, ask questions, or just connect!
        </Description>

        <EmailLink
          href="mailto:gokulkannangk28@gmail.com"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Say Hello
        </EmailLink>

        <SocialLinks data-aos="fade-up" data-aos-delay="400">
          <a href="https://github.com/gokulakannan69" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="mailto:gokulkannangk28@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
          <a href="tel:+919361443302" aria-label="Phone">
            <FaPhone />
          </a>
        </SocialLinks>

        <Footer>
          <p>Designed & Built by Gokulakannan</p>
          <p>© {new Date().getFullYear()}</p>
        </Footer>
      </Container>
    </ContactSection>
  );
};

export default Contact;