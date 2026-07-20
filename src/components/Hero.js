import React, { Suspense, lazy } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../utils/theme';
import { device } from '../utils/mediaQueries';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

// Lazy load the 3D scene so it doesn't block initial render
const Scene = lazy(() => import('./Scene'));

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.background};
  padding: 0 20px;
  position: relative;
  overflow: hidden;
`;

const Background3D = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  opacity: 0.6;
`;

const Content = styled.div`
  text-align: center;
  color: ${theme.text};
  max-width: 900px;
  width: 100%;
  z-index: 1;
  position: relative;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  padding: 3rem;
  border-radius: 20px;
  border: ${theme.glassBorder};
  box-shadow: ${theme.glassShadow};
`;

const Greeting = styled(motion.p)`
  color: ${theme.accent};
  font-family: ${theme.fontMono};
  font-size: 1rem;
  margin-bottom: 1.5rem;
  font-weight: 400;
  
  ${device.tablet} {
    font-size: 1.2rem;
  }
`;

const Name = styled(motion.h1)`
  font-size: 2.5rem;
  margin: 0 0 1rem 0;
  color: ${theme.lightGray};
  font-weight: 700;
  line-height: 1.1;

  ${device.mobile} {
    font-size: 3rem;
  }

  ${device.tablet} {
    font-size: 5rem;
  }

  ${device.laptop} {
    font-size: 6.5rem;
  }
`;

const Tagline = styled(motion.h2)`
  font-size: 1.3rem;
  color: ${theme.secondary};
  margin-bottom: 1.5rem;
  font-weight: 500;
  line-height: 1.4;

  ${device.mobile} {
    font-size: 1.6rem;
  }

  ${device.tablet} {
    font-size: 2.2rem;
  }
  
  ${device.laptop} {
    font-size: 2.8rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1rem;
  color: ${theme.text};
  max-width: 600px;
  margin: 0 auto 2.5rem;
  line-height: 1.7;
  padding: 0 10px;

  ${device.tablet} {
    font-size: 1.15rem;
    margin-bottom: 3rem;
    padding: 0;
  }
`;

const CTAGroup = styled(motion.div)`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 2.5rem;
  padding: 0 10px;

  ${device.tablet} {
    gap: 1.5rem;
    margin-bottom: 3rem;
    padding: 0;
  }
`;

const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 0.9rem 1.5rem;
  background: ${theme.accent};
  color: ${theme.background};
  text-decoration: none;
  border-radius: 50px;
  font-family: ${theme.fontMono};
  font-size: 0.9rem;
  font-weight: 500;
  transition: ${theme.transition};
  box-shadow: 0 4px 14px 0 rgba(255, 255, 255, 0.39);
  white-space: nowrap;

  ${device.tablet} {
    padding: 1rem 2rem;
    font-size: 1rem;
  }

  &:hover {
    background: transparent;
    color: ${theme.accent};
    border: 1px solid ${theme.accent};
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 255, 255, 0.5);
  }
`;

const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 0.9rem 1.5rem;
  background: transparent;
  color: ${theme.accent};
  text-decoration: none;
  border: 1px solid ${theme.accent};
  border-radius: 50px;
  font-family: ${theme.fontMono};
  font-size: 0.9rem;
  font-weight: 500;
  transition: ${theme.transition};
  white-space: nowrap;

  ${device.tablet} {
    padding: 1rem 2rem;
    font-size: 1rem;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;

  a {
    color: ${theme.text};
    font-size: 1.8rem;
    transition: ${theme.transition};

    &:hover {
      color: ${theme.accent};
      transform: translateY(-3px) scale(1.1);
    }
  }
`;

const Hero = () => {
  return (
    <HeroSection id="home">
      <Background3D>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Background3D>
      
      <Content>
        <Greeting
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Hi there, I'm
        </Greeting>
        <Name
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Gokulakannan
        </Name>
        <Tagline
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Full-Stack AI Developer
        </Tagline>
        <Description
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          I develop robust web applications using React, Node.js, and modern AI integrations, focusing on performance,
          accessibility, and delivering great user experiences through clean, maintainable code.
        </Description>
        <CTAGroup
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <PrimaryButton href="#contact">
            Get In Touch
          </PrimaryButton>
          <SecondaryButton
            href="/files/resume.pdf"
            download="Gokul_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </SecondaryButton>
        </CTAGroup>
        <SocialLinks
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a href="https://github.com/gokulakannan69" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/gokula-kannan-2822a22b5/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="mailto:gokulkannangk28@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </SocialLinks>
      </Content>
    </HeroSection>
  );
};

export default Hero;