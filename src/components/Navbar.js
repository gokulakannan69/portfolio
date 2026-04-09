import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${props => props.theme.navHeight};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 0 50px;
  transition: all 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  background: ${props => props.$scrolled ? 'rgba(252, 252, 252, 0.8)' : 'transparent'};
  backdrop-filter: ${props => props.$scrolled ? 'blur(20px)' : 'none'};
  border-bottom: ${props => props.$scrolled ? '1px solid rgba(0, 0, 0, 0.05)' : 'none'};

  @media (max-width: 768px) {
    padding: 0 25px;
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1400px;
`;

const Logo = styled(Link)`
  font-size: 28px;
  font-weight: 900;
  color: ${props => props.theme.text};
  letter-spacing: -1px;
  cursor: pointer;
`;

const NavLinksList = styled.ul`
  display: none;
  gap: 50px;

  @media (min-width: 768px) {
    display: flex;
  }

  a {
    font-size: 11px;
    font-family: ${props => props.theme.fontMono};
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 800;
    color: ${props => props.theme.text};
    opacity: 0.6;
    cursor: pointer;
    
    &:hover {
      opacity: 1;
    }

    &.active {
      opacity: 1;
      &::after {
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        background: ${props => props.theme.text};
        margin-top: 5px;
      }
    }
  }
`;

const MobileToggleBtn = styled.button`
  background: none;
  border: none;
  display: block;
  font-size: 24px;
  cursor: pointer;
  color: ${props => props.theme.text};

  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileMenuOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: ${props => props.theme.background};
  z-index: 1100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Resume', to: 'resume' },
    { name: 'Contact', to: 'contact' }
  ];

  return (
    <Nav $scrolled={scrolled}>
      <NavContainer>
        <Logo to="home" spy={true} smooth={true} duration={1000} offset={-80}>
          GK.
        </Logo>

        <NavLinksList>
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.to}
                spy={true}
                smooth={true}
                duration={1000}
                offset={-80}
                activeClass="active"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </NavLinksList>

        <MobileToggleBtn onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '✕' : '☰'}
        </MobileToggleBtn>
      </NavContainer>

      <AnimatePresence>
        {isOpen && (
          <MobileMenuOverlay
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                spy={true}
                smooth={true}
                duration={1000}
                offset={-80}
                onClick={() => setIsOpen(false)}
                style={{ fontSize: '24px', fontWeight: 900, textTransform: 'uppercase', cursor: 'pointer' }}
              >
                {item.name}
              </Link>
            ))}
          </MobileMenuOverlay>
        )}
      </AnimatePresence>
    </Nav>
  );
};

export default Navbar;