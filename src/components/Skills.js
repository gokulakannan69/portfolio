import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SkillsSection = styled.section`
  padding: 150px 25px;
  background: ${props => props.theme.background};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const CategoryCard = styled(motion.div)`
  background: ${props => props.theme.backgroundLight};
  padding: 40px;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.cardShadow};
  border: ${props => props.theme.cardBorder};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 50px rgba(0,0,0,0.06);
  }

  h3 {
    font-size: 14px;
    font-family: ${props => props.theme.fontMono};
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 25px;
    color: ${props => props.theme.textDark};
    opacity: 0.6;
  }
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const SkillTag = styled.span`
  padding: 8px 16px;
  background: ${props => props.theme.background};
  border: 1px solid rgba(0,0,0,0.05);
  border-radius: 8px;
  font-size: 14px;
  font-weight: 700;
  color: ${props => props.theme.text};
  text-transform: uppercase;
`;

const Skills = () => {
  const categories = [
    {
      name: "Core Tech",
      items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Node.JS", "Java (Basics)", "CLI Skills"]
    },
    {
      name: "AI & Innovation",
      items: ["Gemini", "Antigravity", "OpenClaw", "LLM Models", "Prompt Engineering"]
    },
    {
      name: "Systems & Infrastructure",
      items: ["System Hardware", "Windows", "Linux", "Git"]
    }
  ];

  return (
    <SkillsSection id="skills">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ marginBottom: '80px' }}
        >
          <h2 style={{ fontSize: 'clamp(40px, 10vw, 100px)', lineHeight: 0.9 }}>
            TECHNICAL<br/>STACK.
          </h2>
        </motion.div>

        <SkillsGrid>
          {categories.map((cat, i) => (
            <CategoryCard
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <h3>{cat.name}</h3>
              <SkillList>
                {cat.items.map((item, j) => (
                  <SkillTag key={j}>{item}</SkillTag>
                ))}
              </SkillList>
            </CategoryCard>
          ))}
        </SkillsGrid>
      </Container>
    </SkillsSection>
  );
};

export default Skills;