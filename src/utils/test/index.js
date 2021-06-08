import { MemoryRouter, Route } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import theme from 'styles/theme';

/* eslint-disable-next-line react/prop-types */
export const memoryRouterWrapper =
  ({ initialEntries = [], path = '' } = {}) =>
  ({ children }) =>
    (
      <MemoryRouter initialEntries={initialEntries}>
        <Route path={path} component={() => <>{children}</>} />
      </MemoryRouter>
    );

export const themeProviderWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default {
  themeProviderWrapper,
};
