import configureStore from 'redux-mock-store'; //ES6 modules
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import theme from 'styles/theme';

export const themeProviderWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export const fullProvidersWrapper =
  (initialState = {}) =>
  ({ children }) =>
    (
      <Provider store={configureMockStore([thunk])(initialState)}>
        <MemoryRouter>
          <ThemeProvider>{children}</ThemeProvider>
        </MemoryRouter>
      </Provider>
    );

export default {
  themeProviderWrapper,
};
