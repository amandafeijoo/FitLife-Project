import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap');
  background-color: rgba(56, 55, 54, 0.691);
  body, button, input, select, textarea, h1, h2, p, ul, li {
    font-family: 'Oswald', sans-serif;
    font-weight: 400;
  }
`;