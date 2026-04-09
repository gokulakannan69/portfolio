import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaArrowUp } from 'react-icons/fa';

const ScrollButton = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  background: #000;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${props => props.$visible ? '1' : '0'};
  pointer-events: ${props => props.$visible ? 'auto' : 'none'};
  transform: ${props => props.$visible ? 'translateY(0)' : 'translateY(20px)'};
  transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
  z-index: 1000;
  
  svg {
    color: #fff;
    font-size: 16px;
  }

  &:hover {
    transform: translateY(-5px);
  }
`;

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.pageYOffset > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <ScrollButton 
      $visible={visible} 
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <FaArrowUp />
    </ScrollButton>
  );
};

export default ScrollToTop;