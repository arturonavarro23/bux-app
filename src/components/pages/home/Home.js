import { useHistory } from 'react-router';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import Container from 'components/common/container';
import Autocomplete from 'components/common/autocomplete';
import { useAutocomplete } from 'hooks';
import { mqw } from 'styles/mq';

const HomeWrapper = styled(Container)`
  ${mqw({
    alignItems: 'center',
    marginTop: ['10vh', '20vh'],
    '& .autocomplete-container': {
      maxWidth: 800,
      width: '100%',
    },
  })}
`;

export function Home() {
  const { t } = useTranslation();
  const history = useHistory();
  const { term, onTermChange, results } = useAutocomplete();
  const options = results.map((o) => ({
    value: o.symbol,
    label: o.name,
  }));

  const onSelectItem = (item) => {
    history.push(`/company/${item.value}`);
  };

  return (
    <HomeWrapper>
      <h1>{t('home.find.symbol')}</h1>
      <div className="autocomplete-container">
        <Autocomplete
          name="search"
          onChange={(e) => onTermChange(e.target.value)}
          inputValue={term}
          options={options}
          onSelectItem={onSelectItem}
        />
      </div>
    </HomeWrapper>
  );
}

export default Home;
