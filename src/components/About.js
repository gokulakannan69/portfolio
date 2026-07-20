import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../utils/theme';
import { device } from '../utils/mediaQueries';

const AboutSection = styled.section`
  min-height: 100vh;
  padding: 100px 0;
  background: ${theme.background};
  color: ${theme.text};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;

  ${device.tablet} {
    padding: 0 50px;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: ${theme.lightGray};
  font-weight: 700;

  ${device.tablet} {
    font-size: 3.5rem;
  }
`;

const Subtitle = styled(motion.p)`
  color: ${theme.accent};
  font-family: ${theme.fontMono};
  font-size: 1rem;
  margin-bottom: 3rem;
  
  ${device.tablet} {
    font-size: 1.1rem;
  }
`;

const ProfileImage = styled(motion.div)`
  width: 150px;
  height: 150px;
  margin: 0 auto 2.5rem;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid ${theme.accent};
  box-shadow: ${theme.shadow};
  transition: ${theme.transition};

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${device.tablet} {
    width: 220px;
    height: 220px;
    margin-bottom: 3rem;
  }
`;

const Bio = styled(motion.div)`
  font-size: 1rem;
  line-height: 1.8;
  color: ${theme.text};
  max-width: 700px;
  margin: 0 auto;
  padding: 0 10px;

  p {
    margin-bottom: 1.5rem;
  }

  strong {
    color: ${theme.lightGray};
    font-weight: 600;
  }

  ${device.tablet} {
    font-size: 1.15rem;
    padding: 0;
  }
`;

const About = () => {
  return (
    <AboutSection id="about">
      <Container>
        <Subtitle
          data-aos="fade-up"
        >
          Get to know me
        </Subtitle>
        <SectionTitle
          data-aos="fade-up"
          data-aos-delay="100"
        >
          About Me
        </SectionTitle>

        <ProfileImage
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <img
            src="/images/profile.jpg"
            alt="Gokulakannan - Full Stack AI Developer"
          />
        </ProfileImage>

        <Bio
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <p>
            Hi, I'm <strong>Gokulakannan</strong>, a dedicated Full-Stack AI Developer with a
            passion for creating innovative, intelligent web solutions. I hold a <strong>B.Tech in Information Technology</strong>
            from Anna University, where I built a strong foundation in software development.
          </p>
          <p>
            My development journey began during my college years, working on various projects
            that challenged me to learn new technologies and solve real-world problems. I specialize
            in <strong>React.js</strong> for building interactive frontends, <strong>Node.js</strong>
            for scalable backend services, and integrating <strong>AI capabilities</strong> (like Gemini and Machine Learning models) to deliver smart user experiences.
          </p>
          <p>
            Beyond coding, I enjoy staying current with industry trends, contributing to community
            projects, and exploring how technology can make a positive impact. I'm always excited
            to take on new challenges and collaborate on meaningful projects.
          </p>
        </Bio>
      </Container>
    </AboutSection>
  );
};

export default About;