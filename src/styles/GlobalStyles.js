import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    cursor: default;
  }

  html {
    scroll-behavior: smooth;
    scrollbar-width: thin;
    scrollbar-color: #000 #fff;
    overflow-x: hidden;
    max-width: 100vw;
  }

  body {
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.text};
    font-family: ${props => props.theme.fontPrimary};
    font-size: 16px;
    line-height: 1.6;
    overflow-x: hidden;
    max-width: 100vw;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    overflow-x: hidden;
    width: 100vw;
    max-width: 100%;
    position: relative;
  }

  section {
    padding: 120px 0;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h1, h2, h3, h4, h5, h6 {
    text-transform: uppercase;
    font-weight: 900;
    letter-spacing: -0.04em;
    line-height: 1;
    color: ${props => props.theme.text};
    overflow-wrap: break-word;
    word-wrap: break-word;
    hyphens: auto;
  }

  p {
    color: ${props => props.theme.textDark};
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: ${props => props.theme.transition};
    cursor: pointer !important;

    &:focus-visible {
      outline: 2px solid ${props => props.theme.accent};
      outline-offset: 4px;
    }
  }

  button {
    cursor: pointer !important;
    font-family: inherit;
    &:focus-visible {
      outline: 2px solid ${props => props.theme.accent};
      outline-offset: 4px;
    }
  }

  li {
    list-style: none;
  }

  img {
    max-width: 100%;
    display: block;
    border-radius: ${props => props.theme.borderRadius};
  }

  /* Custom Scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${props => props.theme.background};
  }

  ::-webkit-scrollbar-thumb {
    background: #000;
    border-radius: 10px;
    border: 2px solid ${props => props.theme.background};
  }

  ::selection {
    background-color: #000;
    color: #fff;
  }
`;

export default GlobalStyles;
