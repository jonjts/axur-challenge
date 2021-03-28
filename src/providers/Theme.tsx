import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme, { GlobalStyle } from '../theme';

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