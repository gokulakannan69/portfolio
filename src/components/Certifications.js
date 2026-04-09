import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CertificationsSection = styled.section`
  padding: 150px 25px;
  background: ${props => props.theme.background};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const CertList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CertCard = styled(motion.div)`
  background: ${props => props.theme.backgroundLight};
  padding: 30px 40px;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.cardShadow};
  border: ${props => props.theme.cardBorder};
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
    border-color: ${props => props.theme.accent};
  }

  .content {
    h3 {
      font-size: 20px;
      font-weight: 800;
      color: ${props => props.theme.text};
      margin-bottom: 5px;
    }
    span {
      font-family: ${props => props.theme.fontMono};
      font-size: 12px;
      text-transform: uppercase;
      opacity: 0.5;
      letter-spacing: 1px;
    }
  }

  .status {
    font-size: 11px;
    font-weight: 800;
    text-transform: uppercase;
    padding: 6px 12px;
    background: ${props => props.theme.backgroundDark};
    border-radius: 4px;
    letter-spacing: 1px;
  }
`;

const SectionHeader = styled(motion.h2)`
  font-size: clamp(30px, 8vw, 80px);
  line-height: 0.9;
  margin-bottom: 80px;
  color: ${props => props.theme.text};
`;

const Certifications = () => {
  const certs = [
    { 
      title: "JAVA", 
      org: "BESANT TECHNOLOGIES", 
      status: "COMPLETED",
      link: "/certificate/GOKULAKANNAN  java certificate.jpg"
    },
    { title: "SPRING BOOT", org: "UDEMY", status: "ONGOING" },
    { title: "DATA ANALYSIS", org: "QSPIDERS", status: "ONGOING" }
  ];

  return (
    <CertificationsSection id="certifications">
      <Container>
        <SectionHeader
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          CERTIFICATIONS.
        </SectionHeader>

        <CertList>
          {certs.map((cert, index) => (
            <CertCard
              key={index}
              as={cert.link ? "a" : "div"}
              href={cert.link}
              target={cert.link ? "_blank" : undefined}
              rel={cert.link ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{ textDecoration: 'none' }}
            >
              <div className="content">
                <h3>{cert.title}</h3>
                <span>{cert.org}</span>
              </div>
              <div className="status" style={{ 
                background: cert.status === 'COMPLETED' ? '#e2e8f0' : '#fef3c7',
                color: '#111'
              }}>
                {cert.status === 'COMPLETED' && cert.link ? 'VIEW CERTIFICATE' : cert.status}
              </div>
            </CertCard>
          ))}
        </CertList>
      </Container>
    </CertificationsSection>
  );
};

export default Certifications;
