import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaArrowUp } from 'react-icons/fa';

const ScrollButton = styled.button`
  position: fixed;
  bottom: 40px;
  right: 40px;
  background: linear-gradient(145deg, #00f7ff, #00d8ff);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${props => props.visible ? '1' : '0'};
  transform: ${props => props.visible ? 'translateY(0)' : 'translateY(100px)'};
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1000;
  box-shadow: 0 4px 15px rgba(0, 247, 255, 0.2);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, transparent 0%, rgba(255, 255, 255, 0.2) 50%, transparent 100%);
    transform: translateY(100%);
    animation: ${props => props.isScrolling ? 'swipeUp 1.5s infinite' : 'none'};
  }

  @keyframes swipeUp {
    0% {
      transform: translateY(100%);
    }
    50% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(-100%);
    }
  }

  &:hover {
    transform: ${props => props.visible ? 'translateY(-5px)' : 'translateY(100px)'};
    box-shadow: 0 8px 25px rgba(0, 247, 255, 0.4);
  }

  svg {
    transition: transform 0.3s ease;
    position: relative;
    z-index: 1;
  }

  &:hover svg {
    transform: scale(1.2);
  }
`;

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  let scrollTimeout;

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      setVisible(currentScroll > 300);
      setIsScrolling(true);
      
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <ScrollButton 
      visible={visible} 
      isScrolling={isScrolling}
      onClick={scrollToTop}
    >
      <FaArrowUp color="#1e1e1e" />
    </ScrollButton>
  );
};

export default ScrollToTop;