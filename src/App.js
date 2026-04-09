import React from 'react';
import { ThemeProvider } from 'styled-components';
import { motion, useScroll, useSpring } from 'framer-motion';
import { lightTheme } from './utils/theme';
import GlobalStyles from './styles/GlobalStyles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import styled from 'styled-components';

const ScrollProgress = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: #000;
  transform-origin: 0%;
  z-index: 9999;
`;

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });



  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <ScrollProgress style={{ scaleX }} />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Resume />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>

      <ScrollToTop />
    </ThemeProvider>
  );
}

export default App;
