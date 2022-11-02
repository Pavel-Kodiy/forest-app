import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import App from 'views/App';
import { app } from 'models/appModel';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const initDOM = async () => {
  app.init();

  root.render(
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>,
  );
};

initDOM();
