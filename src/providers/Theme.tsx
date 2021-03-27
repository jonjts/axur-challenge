import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import theme from '../theme';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${theme.colors.background};
    font-family: 'Roboto', sans-serif;
    color: ${theme.colors.text};
  }

  :root {
   --bg-primary: ${theme.colors.primary};
   --bg-secondary: ${theme.colors.secondary};
   --bg-danger: ${theme.colors.danger};
   --bg-success: ${theme.colors.success};
   --bg-background: ${theme.colors.background};
   --bg-surface: ${theme.colors.surface};
  }

  input, a, button {
    transition: 0.3s;
  }

  button {
    height: 38px;
    border-radius: ${theme.border};
    padding: 0 ${theme.spacings.md.pixel} 0 ${theme.spacings.md.pixel};
    background-color: ${theme.colors.primary};
    color: #FFF;
    cursor: pointer;
    font-size: 14;
    font-weight: 500;
    letter-spacing: 1.25px;
    border: none;

    :active{
      background-color: #000;
    }

    :hover {
      opacity: 0.8;
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    }

    :focus {
      outline: 0;
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    }
  }

  label {
    font-weight: normal;
    font-size: 14px;
    letter-spacing: 0.25px;
  }

  input {
    height: 28px;
    margin-top: ${theme.spacings.sm.pixel};
    margin-bottom: ${theme.spacings.sm.pixel};
    padding-left: ${theme.spacings.sm.pixel};
    padding-right: ${theme.spacings.sm.pixel};
    border-radius: ${theme.border};
    border: 1px solid ${theme.colors.default};
    color: ${theme.colors.text};
    outline: 0;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;

    :hover {
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.1);
    }

    :focus {
      outline: 0;
      box-shadow: 0 0 11px 11px rgba(0,0,0,0.05);
    }
  }

  a {
    color: ${theme.colors.secondary};
    cursor: pointer;

    :-webkit-any-link {
      text-decoration: none;
    }

    :hover {
      opacity: 0.8;
      text-decoration: underline;
    }
  }

  h1 {
    font-weight: lighter;
    margin-bottom: ${theme.spacings.xl.pixel};
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