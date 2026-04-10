import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  padding: 150px 25px;
  background: ${props => props.theme.backgroundLight};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 80px;
  
  @media (min-width: 992px) {
    grid-template-columns: 0.8fr 1fr;
  }
`;

const LargeHeader = styled(motion.h2)`
  font-size: clamp(40px, 10vw, 100px);
  line-height: 0.9;
  margin-bottom: 40px;
  color: ${props => props.theme.text};
`;

const TextBlock = styled(motion.div)`
  p {
    font-size: 22px;
    line-height: 1.6;
    margin-bottom: 35px;
    color: ${props => props.theme.textDark};

    strong {
      color: ${props => props.theme.text};
      font-weight: 800;
    }
  }
`;

const DetailGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin-top: 50px;
  padding: 40px;
  background: ${props => props.theme.background};
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.cardShadow};
  border: ${props => props.theme.cardBorder};
`;

const DetailItem = styled.div`
  h4 {
    font-family: ${props => props.theme.fontMono};
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 2px;
    opacity: 0.5;
    margin-bottom: 10px;
  }
  p {
    font-size: 16px;
    font-weight: 700;
    color: ${props => props.theme.text};
  }
`;

const About = () => {
  return (
    <AboutSection id="about">
      <Container>
        <Content>
          <div>
            <LargeHeader
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              CRAFTING<br/>WITH<br/>PRECISION.
            </LargeHeader>
          </div>
          
          <div>
            <TextBlock
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p>
                I am <strong>Gokulakannan S</strong>, a Full-Stack Developer specialized 
                in building structured and scalable applications. While I leverage advanced 
                AI tools and LLMs (like <strong>Antigravity</strong>, <strong>Gemini</strong>, 
                and <strong>GPT-4</strong>) to accelerate development and enhance debugging, 
                I rely on a deep understanding of core logic and system architecture to 
                solve real-world problems.
              </p>
              <p>
                Currently pursuing my B.Tech at <strong>Sri Ramanujar Engineering College</strong>, 
                my process integrates AI-driven efficiency with rigorous, architecture-first 
                testing to ensure every project is high-performing, user-centric, and maintainable.
              </p>
            </TextBlock>

            <DetailGrid
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <DetailItem>
                <h4>Education</h4>
                <p>B.Tech IT (8.01 CGPA)</p>
              </DetailItem>
              <DetailItem>
                <h4>Location</h4>
                <p>Chennai, India</p>
              </DetailItem>
              <DetailItem>
                <h4>Expertise</h4>
                <p>Full-Stack & AI</p>
              </DetailItem>
              <DetailItem>
                <h4>Status</h4>
                <p>Open for Opportunities</p>
              </DetailItem>
            </DetailGrid>
          </div>
        </Content>
      </Container>
    </AboutSection>
  );
};

export default About;
