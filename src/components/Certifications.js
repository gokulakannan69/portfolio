import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../utils/theme';
import { device } from '../utils/mediaQueries';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';

const CertificationsSection = styled.section`
  padding: 100px 0;
  background: ${theme.background};
  color: ${theme.text};
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;

  ${device.tablet} {
    padding: 0 50px;
  }
`;

const Title = styled.h2`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  margin-bottom: 3rem;
  color: ${theme.lightGray};
  white-space: nowrap;

  &::before {
    content: '06.';
    color: ${theme.accent};
    font-family: ${theme.fontMono};
    font-size: 1.2rem;
    margin-right: 10px;
    font-weight: 400;
  }

  &::after {
    content: '';
    display: block;
    width: 300px;
    height: 1px;
    background: ${theme.darkGray};
    margin-left: 20px;
  }

  ${device.tablet} {
    font-size: 2rem;
  }
`;

const CertGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  ${device.tablet} {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
`;

const CertCard = styled(motion.div)`
  background: ${theme.cardBackground};
  padding: 2rem;
  border-radius: ${theme.borderRadius};
  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
  transition: ${theme.transition};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;

  &:hover {
    transform: translateY(-7px);
    color: ${theme.accent};
  }
`;

const IconWrapper = styled.div`
  font-size: 2.5rem;
  color: ${theme.accent};
  margin-bottom: 1.5rem;
`;

const CertName = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: ${theme.lightGray};
  font-weight: 600;
`;

const Issuer = styled.p`
  font-size: 0.9rem;
  color: ${theme.accent};
  margin-bottom: 1rem;
  font-family: ${theme.fontMono};
`;

const Date = styled.span`
  font-size: 0.8rem;
  color: ${theme.text};
  margin-bottom: 1.5rem;
  display: block;
  font-family: ${theme.fontMono};
`;

const CredentialLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: ${theme.text};
  text-decoration: none;
  font-size: 0.9rem;
  margin-top: auto;
  transition: ${theme.transition};

  &:hover {
    color: ${theme.accent};
  }
`;

const Certifications = () => {
  const certifications = [
   
    {
      name: "Java Certificate",
      issuer: "Besant Technologies",
      date: "Dec 2024",
      link: "/certificate/GOKULAKANNAN  java certificate.jpg",
      image: "/certificate/GOKULAKANNAN  java certificate.jpg"
    },
    {
      name: "Internship",
      issuer: "TECHSWOT IT SOLUTIONS",
      date: "Aug 2025",
      link: "/certificate/Intership.jpg"
    },
     {
      name: "Java Spring boot3",
      issuer: "Udemy",
      date: "pursuing",
      link: "#"
    },
    {
      name: "System Hardware",
      issuer: "Vip Systems",
      date: "Pursuing",
      link: "#"
    },
    
  ];

  return (
    <CertificationsSection id="certifications">
      <Container>
        <Title data-aos="fade-up">Certifications</Title>
        <CertGrid>
          {certifications.map((cert, index) => (
            <CertCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <IconWrapper>
                <FaCertificate />
              </IconWrapper>
              <CertName>{cert.name}</CertName>
              <Issuer>{cert.issuer}</Issuer>
              <Date>{cert.date}</Date>
              <CredentialLink href={cert.link} target="_blank" rel="noopener noreferrer">
                View Credential <FaExternalLinkAlt size={12} />
              </CredentialLink>
            </CertCard>
          ))}
        </CertGrid>
      </Container>
    </CertificationsSection>
  );
};

export default Certifications;
