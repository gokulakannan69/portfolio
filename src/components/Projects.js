import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const ProjectsSection = styled.section`
  padding: 100px 25px;
  background: #fff;
  perspective: 1500px;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;

const CardWrapper = styled(motion.div)`
  grid-column: span 1;
  position: relative;
  transform-style: preserve-3d;

  @media (min-width: 1200px) {
    grid-column: span 3;
  }
  
  &:nth-child(3) {
    @media (min-width: 1024px) {
      grid-column: span 3;
    }
    @media (min-width: 1200px) {
      grid-column: span 6;
    }
  }
`;

const ProjectCard = styled(motion.div)`
  background: ${props => props.theme.backgroundLight};
  padding: 40px;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.cardShadow};
  border: ${props => props.theme.cardBorder};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 400px;
  height: 100%;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  
  @media (min-width: 1200px) {
    &.wide-card {
      min-height: 350px;
      flex-direction: row;
      align-items: center;
      gap: 40px;
    }
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  border-radius: ${props => props.theme.borderRadius};
  margin-bottom: 25px;
  overflow: hidden;
  transform: translateZ(30px);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 20px;
  transform: translateZ(20px);
`;

const TechTag = styled.span`
  font-family: ${props => props.theme.fontMono};
  font-size: 10px;
  text-transform: uppercase;
  padding: 4px 10px;
  background: ${props => props.theme.background};
  border-radius: 4px;
  opacity: 0.6;
`;

const ProjectTitle = styled.h3`
  font-size: 28px;
  margin-bottom: 15px;
  color: ${props => props.theme.text};
  font-weight: 900;
  transform: translateZ(50px);
`;

const ProjectDesc = styled.p`
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 30px;
  color: ${props => props.theme.textDark};
  transform: translateZ(25px);
`;

const ViewLink = styled.a`
  font-family: ${props => props.theme.fontMono};
  font-size: 12px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 800;
  color: ${props => props.theme.text};
  letter-spacing: 2px;
  transform: translateZ(40px);
  
  &:hover {
    gap: 15px;
  }
`;

const cardProjects = [
  {
    title: "AMURTA HOSPITAL",
    desc: "AI-powered healthcare system for medical consultation using React, TypeScript, and Google GenAI API. Implemented a scalable, high-performance architecture.",
    tags: ["React", "TypeScript", "GenAI", "HealthTech"],
    link: "https://github.com/gokulakannan69/Amurta-Hospital",
    image: "/images/Amutha-hospital.png"
  },
  {
    title: "WOMEN SAFETY SYSTEM",
    desc: "Real-time SOS web application with GPS tracking and multi-channel alerts using WebSockets and Node.js. Enhanced location sharing and notifications.",
    tags: ["Node.JS", "WebSockets", "GPS", "SOS"],
    link: "https://github.com/gokulakannan69/Women-Safety.git",
    image: "/images/women-safety1.png"
  },
  {
    title: "HANDSPEAK",
    desc: "Real-time sign language recognition system using OpenCV and MediaPipe. Applied ML models for gesture detection and Tamil–English voice translation.",
    tags: ["ML", "OpenCV", "MediaPipe", "Python"],
    link: "https://github.com/gokulakannan69/HandSpeak-Sign-in-Language"
  },
  {
    title: "CRM SYSTEM",
    desc: "Full-stack business management platform designed for high-efficiency data tracking, analytics, and automated workflow management.",
    tags: ["Full Stack", "Analytics", "Workflow", "Database"],
    link: "https://github.com/vipsystem-1/",
    image: "/images/CRM.png"
  },
  {
    title: "VIP SYSTEM",
    desc: "Secure access management system with role-based control and data protection. Designed scalable backend for handling multiple secure user roles.",
    tags: ["Security", "Auth", "Scalability", "Backend"],
    link: null,
    image: "/images/vip systems.png"
  }
];

const PremiumCard = ({ project, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <CardWrapper
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
      }}
    >
      <ProjectCard className={index === 2 ? 'wide-card' : ''}>
        <div>
          {project.image && (
            <ProjectImage>
              <img src={project.image} alt={project.title} />
            </ProjectImage>
          )}
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectDesc>{project.desc}</ProjectDesc>
          <TechList>
            {project.tags.map(tag => <TechTag key={tag}>{tag}</TechTag>)}
          </TechList>
        </div>
        {project.link ? (
          <ViewLink href={project.link} target="_blank" rel="noopener noreferrer">
            Live Case <FaArrowRight />
          </ViewLink>
        ) : (
          <ViewLink as="span" style={{ opacity: 0.5, cursor: 'default' }}>
            In Development
          </ViewLink>
        )}
      </ProjectCard>
    </CardWrapper>
  );
};

const Projects = () => {
  return (
    <ProjectsSection id="projects">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ marginBottom: '80px' }}
        >
          <h2 style={{ fontSize: 'clamp(40px, 10vw, 100px)', lineHeight: 0.9 }}>
            FEATURED<br/>INNOVATIONS.
          </h2>
        </motion.div>

        <ProjectsGrid>
          {cardProjects.map((project, index) => (
            <PremiumCard key={index} project={project} index={index} />
          ))}
        </ProjectsGrid>
      </Container>
    </ProjectsSection>
  );
};

export default Projects;