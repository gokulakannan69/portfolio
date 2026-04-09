import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ResumeSection = styled.section`
  padding: 150px 25px;
  background: ${props => props.theme.background};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const JourneyHeader = styled(motion.h2)`
  font-size: clamp(40px, 10vw, 100px);
  line-height: 0.9;
  margin-bottom: 80px;
  color: ${props => props.theme.text};
`;

const JourneyList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const JourneyItem = styled(motion.div)`
  background: ${props => props.theme.backgroundLight};
  padding: 40px;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.cardShadow};
  border: ${props => props.theme.cardBorder};
  max-width: 900px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 4px;
    height: 100%;
    background: ${props => props.theme.accent};
    border-radius: ${props => props.theme.borderRadius} 0 0 ${props => props.theme.borderRadius};
    opacity: 0.1;
  }

  h3 {
    font-size: 24px;
    margin-bottom: 10px;
    font-weight: 900;
    color: ${props => props.theme.text};
  }

  span {
    font-family: ${props => props.theme.fontMono};
    font-size: 13px;
    text-transform: uppercase;
    display: block;
    margin-bottom: 20px;
    color: ${props => props.theme.textDark};
    letter-spacing: 1px;
    font-weight: 800;
  }

  p {
    font-size: 18px;
    line-height: 1.7;
    color: ${props => props.theme.textDark};
  }
`;

const Resume = () => {
  const experiences = [
    {
      title: "FULL-STACK DEVELOPER",
      company: "FREELANCE / PROJECTS",
      date: "2023 - PRESENT",
      desc: "Architecting and developing mission-critical systems including the Amurta Hospital AI healthcare platform and the SOS Women Safety System. Leveraging modern technologies like React, Node.js, and Google GenAI API to deliver scalable, AI-integrated solutions."
    },
    {
      title: "INFORMATION TECHNOLOGY STUDENT",
      company: "SRI RAMANUJAR ENGINEERING COLLEGE",
      date: "2022 - 2026",
      desc: "Currently pursuing B.Tech in IT with a CGPA of 8.01. Specializing in AI Tooling, System Design, and Full-Stack Engineering, while developing a deep understanding of core logic and scalable architectures."
    }
  ];

  return (
    <ResumeSection id="resume">
      <Container>
        <JourneyHeader
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          MY<br/>JOURNEY.
        </JourneyHeader>

        <JourneyList>
          {experiences.map((exp, index) => (
            <JourneyItem
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3>{exp.title}</h3>
              <span>{exp.company} // {exp.date}</span>
              <p>{exp.desc}</p>
            </JourneyItem>
          ))}
        </JourneyList>
      </Container>
    </ResumeSection>
  );
};

export default Resume;
