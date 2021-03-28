import { createGlobalStyle } from 'styled-components';

const theme = {
    border: '8px',
    colors: {
        primary: '#FE5823',
        secondary: '#0372E4',
        success: '#06C677',
        danger: '#dc3545',
        background: '#F7F7F7',
        surface: '#FFF',
        text: '#212529',
        default: '#ced4da'
    },
    spacings: {
        xs: { pixel: '4px', percent: '5%' },
        sm: { pixel: '8px', percent: '10%' },
        md: { pixel: '16px', percent: '15%' },
        lg: { pixel: '24px', percent: '20%' },
        xl: { pixel: '32px', percent: '25%' },
        xxl: { pixel: '60px', percent: '30%' }
    }
};

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${theme.colors.background};
    font-family: 'Roboto', sans-serif;
    color: ${theme.colors.text};
  }

  .bounce {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;

    :hover {
      box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
  }

  .disabled{
    opacity: 0.8;
  }

  .row {
    display: flex;
    flex: 1;
    flex-direction: row;
  }

  .column {
    display: flex;
    flex: 1;
    flex-direction: column;
  }

  .grid {
    max-width: 100%;
    display: grid;
    grid-column-gap: 20px;
    grid-row-gap: 20px;

    @media (min-width: 0px) {
      grid-template-columns: none;
    }

    @media (min-width: 992px) { 
      grid-template-columns: 20% 20% 60%;
    }
  }

  @keyframes alert-incoming {
    0%   { top: -100%; }
    100% { top: 8%; }
  }

  @keyframes spinner {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
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

  p, label {
    font-weight: normal;
    font-size: 14px;
    letter-spacing: 0.25px;
  }

  input {
    height: 37px;
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

  h1, h2 {
    font-weight: lighter;
    margin-bottom: ${theme.spacings.xl.pixel};
  }

  h3 {
    font-weight: normal;
    size: 48px;
  }
`

export default theme;