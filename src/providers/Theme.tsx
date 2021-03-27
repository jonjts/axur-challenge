import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import theme from '../theme';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${theme.colors.background};
  }
  

  :root {
    --grid-xs: 0;
    --grid-sm: 576px;
    --grid-md: 768px;
    --grid-lg: 992px;
    --grid-xl: 1200px;
    --grid-xxl: 1400px;    
  }
`

const Theme: React.FC = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </>
  );
};

export default Theme;