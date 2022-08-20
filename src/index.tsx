import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './styles/global';
import Providers from './context';
import { ThemeProvider } from 'styled-components';

import { dark } from './styles/theme/dark';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Providers>
        <ThemeProvider theme={dark}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </Providers>
    </BrowserRouter>
  </React.StrictMode>
);
