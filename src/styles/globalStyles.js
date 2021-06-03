import { css, Global } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';

function GlobalStyles() {
  return (
    <Global
      styles={css`
        ${emotionNormalize}

        html,
        body {
          -webkit-font-smoothing: antialiased !important;
          font-family: \"Muli\", sans-serif;
          font-size: 1rem;
        }
      `}
    />
  );
}

export default GlobalStyles;
