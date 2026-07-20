import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../utils/theme';
import { device } from '../utils/mediaQueries';

const SkillsSection = styled.section`
  min-height: 60vh;
  padding: 100px 0;
  background: ${theme.cardBackground};
  color: ${theme.text};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  max-width: 1000px;
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

const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
  max-width: 800px;
  margin: 0 auto;
  
  ${device.tablet} {
    gap: 1rem;
  }
`;

const SkillBadge = styled(motion.div)`
  background: ${theme.background};
  padding: 0.65rem 1.2rem;
  border-radius: 50px;
  font-family: ${theme.fontMono};
  font-size: 0.85rem;
  color: ${theme.text};
  border: 2px solid ${theme.darkGray};
  transition: ${theme.transition};
  cursor: default;

  &:hover {
    border-color: ${theme.accent};
    color: ${theme.accent};
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  ${device.tablet} {
    font-size: 0.95rem;
    padding: 0.75rem 1.5rem;
  }
`;

const Skills = () => {
  const skills = [
    'JavaScript (ES6+)',
    'TypeScript',
    'React.js',
    'Node.js',
    'Express',
    'HTML5 & CSS3',
    'Styled Components',
    'Tailwind CSS',
    'REST APIs',
    'Firebase',
    'Git & GitHub',
    'Responsive Design',
    'Framer Motion'
  ];

  return (
    <SkillsSection id="skills">
      <Container>
        <Subtitle data-aos="fade-up">
          My expertise
        </Subtitle>
        <SectionTitle data-aos="fade-up" data-aos-delay="100">
          Skills & Technologies
        </SectionTitle>

        <SkillsGrid>
          {skills.map((skill, index) => (
            <SkillBadge
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              {skill}
            </SkillBadge>
          ))}
        </SkillsGrid>
      </Container>
    </SkillsSection>
  );
};

export default Skills;