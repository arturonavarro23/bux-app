import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import Container from '../container';

const ErrorFallbackWrapper = styled(Container)`
  align-items: center;
`;

export function ErrorFallback({ resetErrorBoundary }) {
  const { t } = useTranslation();
  return (
    <ErrorFallbackWrapper>
      <h3>{t('something.wrong')}</h3>
      <button onClick={resetErrorBoundary}>Try again</button>
    </ErrorFallbackWrapper>
  );
}

export default ErrorFallback;
