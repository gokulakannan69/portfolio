import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../utils/theme';
import { device } from '../utils/mediaQueries';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projectsData } from '../utils/constants';

const ProjectsSection = styled.section`
  min-height: 100vh;
  padding: 100px 0;
  background: ${theme.background};
  color: ${theme.text};
`;

const Container = styled.div`
  max-width: 1200px;
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  
  ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
  
  ${device.laptop} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ProjectCard = styled(motion.div)`
  background: ${theme.cardBackground};
  border-radius: 12px;
  padding: 1.5rem;
  transition: ${theme.transition};
  display: flex;
  flex-direction: column;
  height: 100%;
  box-shadow: ${theme.shadow};
  border: 1px solid rgba(255, 255, 255, 0.05);
  text-align: left;
  backdrop-filter: blur(10px);
  
  ${device.tablet} {
    padding: 2rem;
  }
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 25px -5px rgba(2, 12, 27, 0.8);
    border-color: ${theme.accent};
    
    .folder-icon {
      color: ${theme.accent};
    }
    
    h3 {
      color: ${theme.accent};
    }
  }
`;

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const FolderIcon = styled.div`
  color: ${theme.accent};
  font-size: 40px;
  transition: ${theme.transition};
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  
  a {
    color: ${theme.text};
    font-size: 1.3rem;
    transition: ${theme.transition};
    
    &:hover {
      color: ${theme.accent};
    }
  }
`;

const ProjectTitle = styled.h3`
  color: ${theme.lightGray};
  font-size: 1.3rem;
  margin-bottom: 1rem;
  font-weight: 600;
  transition: ${theme.transition};
  
  ${device.tablet} {
    font-size: 1.5rem;
  }
`;

const ProjectDescription = styled.p`
  color: ${theme.text};
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
  flex-grow: 1;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  list-style: none;
  gap: 0.5rem;
  
  li {
    font-family: ${theme.fontMono};
    font-size: 0.8rem;
    color: ${theme.accent};
    background: rgba(255, 255, 255, 0.1);
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
  }
`;

const ShowMoreButton = styled(motion.button)`
  margin-top: 4rem;
  padding: 1rem 2.5rem;
  background: transparent;
  color: ${theme.accent};
  border: 1px solid ${theme.accent};
  border-radius: 50px;
  font-family: ${theme.fontMono};
  font-size: 1rem;
  cursor: pointer;
  transition: ${theme.transition};

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }
`;

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    // Using static data to ensure all specific projects are shown correctly
    setProjects(projectsData);
    setLoading(false);
  }, []);

  const handleShowMore = () => {
    setVisibleCount(prev => prev === projects.length ? 6 : projects.length);
  };

  return (
    <ProjectsSection id="projects">
      <Container>
        <Subtitle data-aos="fade-up">
          My work
        </Subtitle>
        <SectionTitle data-aos="fade-up" data-aos-delay="100">
          Featured Projects
        </SectionTitle>
        <ProjectsGrid>
          {loading ? (
            <p>Loading projects...</p>
          ) : (
            projects.slice(0, visibleCount).map((project, index) => (
              <ProjectCard
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 6) * 0.1 }}
              >
                <ProjectHeader>
                  <FolderIcon className="folder-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                  </FolderIcon>
                  <ProjectLinks>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Link">
                      <FaGithub />
                    </a>
                    {project.link !== project.github && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label="External Link">
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </ProjectLinks>
                </ProjectHeader>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription title={project.description}>{project.description}</ProjectDescription>
                <TechList>
                  {project.tech.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </TechList>
              </ProjectCard>
            ))
          )}
        </ProjectsGrid>
        
        {!loading && projects.length > 6 && (
          <ShowMoreButton 
            onClick={handleShowMore}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {visibleCount === projects.length ? 'Show Less' : 'Show More'}
          </ShowMoreButton>
        )}
      </Container>
    </ProjectsSection>
  );
};

export default Projects;