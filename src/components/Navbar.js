import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { device } from '../utils/mediaQueries';
import { theme } from '../utils/theme';

const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  width: 100%;
  height: ${theme.navHeight};
  background: ${props => props.$scrolled ? 'rgba(5, 5, 5, 0.85)' : 'transparent'};
  backdrop-filter: ${props => props.$scrolled ? 'blur(10px)' : 'none'};
  box-shadow: ${props => props.$scrolled ? theme.shadow : 'none'};
  border-bottom: ${props => props.$scrolled ? theme.glassBorder : '1px solid transparent'};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  z-index: 1000;
  transition: all 0.25s ease;

  ${device.tablet} {
    height: ${theme.navScrollHeight};
    padding: 0 50px;
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${theme.accent};
  font-family: ${theme.fontMono};
  cursor: pointer;
  
  &:hover {
    color: ${theme.lightGray};
  }
`;

const NavMenu = styled.div`
  display: none;

  ${device.tablet} {
    display: flex;
    gap: 2rem;
    align-items: center;
  }
`;

const NavLink = styled(Link)`
  font-size: 0.9rem;
  font-weight: 400;
  color: ${theme.lightGray};
  font-family: ${theme.fontMono};
  padding: 0.5rem 0;
  cursor: pointer;
  position: relative;
  
  &:hover {
    color: ${theme.accent};
  }

  &.active {
    color: ${theme.accent};
  }

  &::after {
    content: '';
    display: block;
    width: 0;
    height: 1px;
    background: ${theme.accent};
    transition: width 0.3s;
  }

  &:hover::after {
    width: 100%;
  }
`;

const MobileMenu = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: ${theme.background};
  padding: 5rem 2rem;
  gap: 2rem;
  z-index: 999;
  align-items: center;
  justify-content: center;
`;

const MenuButton = styled.button`
  font-size: 2rem;
  background: none;
  border: none;
  color: ${theme.accent};
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1001;

  ${device.tablet} {
    display: none;
  }
`;

const menuItems = [
  { title: '01. Home', to: 'home' },
  { title: '02. About', to: 'about' },
  { title: '03. Skills', to: 'skills' },
  { title: '04. Projects', to: 'projects' },
  { title: '05. Education', to: 'education' },
  { title: '06. Certifications', to: 'certifications' },
  { title: '07. Contact', to: 'contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <Nav
        $scrolled={scrolled}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Logo>Gokul</Logo>

        <NavMenu>
          {menuItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active"
              offset={-70}
            >
              {item.title}
            </NavLink>
          ))}
        </NavMenu>

        <MenuButton onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? '✕' : '☰'}
        </MenuButton>
      </Nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <MobileMenu
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {menuItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                spy={true}
                activeClass="active"
                offset={-70}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.title}
              </NavLink>
            ))}
          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;