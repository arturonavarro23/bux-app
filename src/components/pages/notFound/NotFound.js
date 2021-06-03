import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';

const NotFoundWrapper = styled.div(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  fontSize: '2rem',
  textAlign: 'center',
}));

function NotFound() {
  const { t } = useTranslation();
  return (
    <NotFoundWrapper>
      <h1>{t('404.notfound')}</h1>
    </NotFoundWrapper>
  );
}

export default NotFound;
