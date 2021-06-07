import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { Provider } from 'react-redux';

import Router from 'components/navigation/router';
import FavoritesModal from 'components/common/favoritesModal/FavoritesModal';

import setupInterceptors from 'api/interceptors';
import createStore from 'store';
import theme from 'styles/theme';
import GlobalStyles from 'styles/globalStyles';

const store = createStore();
setupInterceptors();

function App() {
  return (
    <Provider store={store}>
      {/* This suspense is used to support the react-i18next library */}
      <Suspense fallback="">
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <BrowserRouter>
            <Router />
            <FavoritesModal></FavoritesModal>
          </BrowserRouter>
        </ThemeProvider>
      </Suspense>
    </Provider>
  );
}

export default App;
