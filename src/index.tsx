import React from 'react';
import { config } from 'dotenv';
import ReactDOM from 'react-dom';

import Routes from './routes';
import ThemeProvider from './providers/Theme';

config();

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider >
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);