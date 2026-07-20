import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../utils/theme';
import { device } from '../utils/mediaQueries';

const EducationSection = styled.section`
  min-height: 60vh;
  padding: 100px 0;
  background: ${theme.cardBackground};
  color: ${theme.text};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  max-width: 900px;
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
  margin-bottom: 4rem;
  
  ${device.tablet} {
    font-size: 1.1rem;
  }
`;

const EducationList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  max-width: 700px;
  margin: 0 auto;

  ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const EducationCard = styled(motion.div)`
  background: ${theme.background};
  border-radius: 12px;
  padding: 1.5rem;
  text-align: left;
  border: 2px solid ${theme.darkGray};
  transition: ${theme.transition};

  ${device.tablet} {
    padding: 2rem;
  }

  &:hover {
    border-color: ${theme.accent};
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const Degree = styled.h3`
  font-size: 1.15rem;
  color: ${theme.lightGray};
  margin-bottom: 0.75rem;
  font-weight: 600;
  
  ${device.tablet} {
    font-size: 1.3rem;
  }
`;

const Institution = styled.p`
  font-size: 1rem;
  color: ${theme.accent};
  margin-bottom: 0.5rem;
  font-family: ${theme.fontMono};
`;

const Year = styled.span`
  font-size: 0.9rem;
  color: ${theme.text};
  font-family: ${theme.fontMono};
`;

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech Information Technology",
      institution: "Anna University",
      year: "2022 - 2026"
    },
    {
      degree: "Higher Secondary Education",
      institution: "Kurinchi Matric HSS",
      year: "2021 - 2022"
    }
  ];

  return (
    <EducationSection id="education">
      <Container>
        <Subtitle data-aos="fade-up">
          My academic journey
        </Subtitle>
        <SectionTitle data-aos="fade-up" data-aos-delay="100">
          Education
        </SectionTitle>
        <EducationList>
          {educationData.map((item, index) => (
            <EducationCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Degree>{item.degree}</Degree>
              <Institution>{item.institution}</Institution>
              <Year>{item.year}</Year>
            </EducationCard>
          ))}
        </EducationList>
      </Container>
    </EducationSection>
  );
};

export default Education;