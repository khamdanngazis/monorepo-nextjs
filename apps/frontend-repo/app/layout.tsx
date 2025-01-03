'use client';

import { ReactNode } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';
import store from '../store/store';
import theme from '../theme/theme';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
