import React from 'react';
import { config } from 'dotenv';
import ReactDOM from 'react-dom';

import Routes from './routes';
import ThemeProvider from './providers/Theme';
import InspectionProvider from './providers/Inspection';

config();

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider >
      <InspectionProvider>
        <Routes />
      </InspectionProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);