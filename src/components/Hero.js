import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.background};
  padding: 0 25px;
  position: relative;
`;

const SplashText = styled(motion.div)`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 2rem;
  
  h1 {
    font-size: clamp(40px, 12vw, 140px);
    font-weight: 900;
    line-height: 1;
    margin: 0;
    color: ${props => props.theme.text};
    letter-spacing: -0.05em;
  }
`;

const TitleMask = styled.div`
  overflow: hidden;
  padding-bottom: 10px; /* Prevent clipping of descending letters */
`;

const ScrollPrompt = styled(motion.div)`
  position: absolute;
  bottom: 40px;
  font-family: ${props => props.theme.fontMono};
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  opacity: 0.4;

  &::after {
    content: '';
    width: 1px;
    height: 50px;
    background: ${props => props.theme.text};
  }
`;

const HeroContent = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-top: 15vh;
  display: grid;
  grid-template-columns: 1fr;
  gap: 60px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
`;

const PortraitWrapper = styled(motion.div)`
  width: 100%;
  aspect-ratio: 0.8;
  background: ${props => props.theme.backgroundDark};
  border-radius: ${props => props.theme.borderRadius};
  overflow: hidden;
  box-shadow: ${props => props.theme.cardShadow};
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: none;
    transition: all 0.7s cubic-bezier(0.19, 1, 0.22, 1);
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const HeroBio = styled(motion.div)`
  h2 {
    font-size: clamp(32px, 6vw, 64px);
    margin-bottom: 25px;
    font-weight: 900;
  }

  p {
    font-size: 18px;
    line-height: 1.7;
    margin-bottom: 40px;
    color: ${props => props.theme.textDark};
    max-width: 500px;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 25px;
  margin-top: 30px;
  
  a {
    font-size: 24px;
    color: ${props => props.theme.text};
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-5px);
      color: ${props => props.theme.accent};
    }
  }
`;

const ResumeButton = styled.a`
  font-family: ${props => props.theme.fontMono};
  font-size: 13px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 15px 30px;
  background: ${props => props.theme.text};
  color: ${props => props.theme.background};
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  margin-bottom: 10px;
  
  &:hover {
    background: transparent;
    color: ${props => props.theme.text};
    box-shadow: inset 0 0 0 2px ${props => props.theme.text};
    transform: translateY(-2px);
  }
`;

const Hero = () => {
  const containerVars = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVars = {
    initial: { y: "120%", opacity: 0, rotateZ: 2 },
    animate: { 
      y: 0,
      opacity: 1,
      rotateZ: 0,
      transition: { duration: 1.2, ease: [0.19, 1, 0.22, 1] }
    }
  };

  return (
    <>
      <HeroSection id="home">
        <SplashText
          variants={containerVars}
          initial="initial"
          animate="animate"
        >
          <TitleMask><motion.h1 variants={itemVars}>CRAFTING</motion.h1></TitleMask>
          <TitleMask><motion.h1 variants={itemVars}>WITH</motion.h1></TitleMask>
          <TitleMask><motion.h1 variants={itemVars}>PRECISION.</motion.h1></TitleMask>
        </SplashText>

        <ScrollPrompt
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          Scroll Down
        </ScrollPrompt>
      </HeroSection>

      <HeroSection style={{ minHeight: 'auto', padding: '120px 25px' }}>
        <HeroContent>
          <PortraitWrapper
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
            viewport={{ once: true }}
          >
            <img src="/images/gokul-profile.jpeg" alt="Gokulakannan" />
          </PortraitWrapper>

          <HeroBio
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
            viewport={{ once: true }}
          >
            <h2>GOKULAKANNAN S</h2>
            <p>
              Full-Stack Developer focused on building intentional, high-performing 
              digital experiences. Specialized in building scalable systems by blending 
              architectural logic with AI-fluent development.
            </p>
            <div>
              <ResumeButton href="/files/resume.pdf" target="_blank" rel="noopener noreferrer">
                VIEW RESUME PDF
              </ResumeButton>
            </div>
            <SocialLinks>
              <a href="https://github.com/gokulakannan69" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
              <a href="https://linkedin.com/in/gokulakannan" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="mailto:gokulkannangk28@gmail.com" aria-label="Email"><FaEnvelope /></a>
            </SocialLinks>
          </HeroBio>
        </HeroContent>
      </HeroSection>
    </>
  );
};

export default Hero;
