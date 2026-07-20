import { createGlobalStyle } from 'styled-components';
import { theme } from '../utils/theme';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Fira+Code:wght@400;500&display=swap');

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
    width: 100%;
    scrollbar-width: thin;
    scrollbar-color: ${theme.darkGray} ${theme.background};
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: ${theme.background};
    color: ${theme.text};
    font-family: ${theme.fontPrimary};
    font-size: 16px;
    line-height: 1.7;
    letter-spacing: 0.02em;

    @media (max-width: 480px) {
      font-size: 14px;
    }

    &.blur {
      overflow: hidden;

      #content > * {
        filter: blur(5px) brightness(0.7);
        transition: ${theme.transition};
        pointer-events: none;
        user-select: none;
      }
    }
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0 0 10px 0;
    font-weight: 600;
    color: ${theme.lightGray};
    line-height: 1.1;
  }

  p {
    margin: 0 0 15px 0;
    color: ${theme.text};
  }

  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: ${theme.transition};
    cursor: pointer;

    &:hover,
    &:focus {
      color: ${theme.accent};
    }
    
    &.inline-link {
        color: ${theme.accent};
        display: inline-block;
        
        &::after {
            content: '';
            display: block;
            width: 0;
            height: 1px;
            position: relative;
            bottom: 0.2em;
            background-color: ${theme.accent};
            transition: ${theme.transition};
            opacity: 0.5;
        }

        &:hover::after {
            width: 100%;
        }
    }
  }

  button {
    cursor: pointer;
    border: 0;
    border-radius: 0;
  }

  input, textarea {
    border-radius: 0;
    outline: 0;

    &:focus {
      outline: 0;
    }
    &:focus,
    &:active {
      &::placeholder {
        opacity: 0.5;
      }
    }
  }

  /* Custom Scrollbar */
  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background: ${theme.background};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${theme.secondary};
    border: 3px solid ${theme.background};
    border-radius: 10px;
  }

  /* Selection */
  ::selection {
    background-color: ${theme.accent};
    color: ${theme.background};
  }
`;

export default GlobalStyles;
