import { Provider } from 'react-redux';
import { ThemeProvider } from '@emotion/react';
import theme from 'styles/theme';
import createStore from 'store';

export const themeProviderWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export const fullProvidersWrapper =
  ({ initialState = {} } = {}) =>
  ({ children }) =>
    (
      <Provider store={createStore(initialState)}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </Provider>
    );

export default {
  themeProviderWrapper,
};
