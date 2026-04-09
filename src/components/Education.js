import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const EducationSection = styled.section`
  padding: 150px 25px;
  background: ${props => props.theme.backgroundLight};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const EducationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const EduItem = styled(motion.div)`
  background: ${props => props.theme.background};
  padding: 40px;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.cardShadow};
  border: ${props => props.theme.cardBorder};
  display: flex;
  flex-direction: column;
  gap: 15px;

  h3 {
    font-size: 24px;
    font-weight: 900;
    color: ${props => props.theme.text};
  }
  
  .details {
    font-family: ${props => props.theme.fontMono};
    font-size: 13px;
    text-transform: uppercase;
    color: ${props => props.theme.textDark};
    letter-spacing: 1px;
    opacity: 0.8;
  }

  .grade {
    font-size: 16px;
    font-weight: 700;
    color: ${props => props.theme.accent};
  }
`;

const Education = () => {
  return (
    <EducationSection id="education">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ marginBottom: '80px' }}
        >
          <h2 style={{ fontSize: 'clamp(40px, 10vw, 100px)', lineHeight: 0.9 }}>
            ACADEMIC<br/>FOUNDATION.
          </h2>
        </motion.div>

        <EducationList>
          <EduItem
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="details">Sri Ramanujar Engineering College // 2022 - 2026</div>
            <h3>B.TECH INFORMATION TECHNOLOGY</h3>
            <div className="grade">CGPA: 8.01</div>
          </EduItem>

          <EduItem
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="details">Kurinji Matricula Higher Secondary // May 2022</div>
            <h3>HIGHER SECONDARY EDUCATION</h3>
            <div className="grade">Final Grade: 72%</div>
          </EduItem>
        </EducationList>
      </Container>
    </EducationSection>
  );
};

export default Education;