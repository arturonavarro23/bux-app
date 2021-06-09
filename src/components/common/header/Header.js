import { useEffect, useRef } from 'react';
import { useHistory, useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useAutocomplete } from 'hooks';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { openModal } from 'store/actions/favorites';
import { Autocomplete } from '../autocomplete';
import {
  HeaderTag,
  HeaderWrapper,
  LogoLink,
  Logo,
  AutocompleteContainer,
  Favorites,
  Start,
} from './styles';

function Header() {
  const dispatch = useDispatch();
  const { push } = useHistory();
  const pathRef = useRef(null);
  const { pathname } = useLocation();
  const hasFavorites = useSelector((state) => state.favorites.items.length > 0);
  const { term, onTermChange, results } = useAutocomplete();
  const options = results.map((o) => ({
    value: o.symbol,
    label: o.name,
  }));

  useEffect(() => {
    if (pathname !== pathRef.current) {
      if (pathname === '/') {
        onTermChange('');
      } else {
        const symbol = pathname.split('/')[2];
        console.log('enter', pathname, pathRef.current, symbol);
        const option = options.find((o) => o.value === symbol);
        onTermChange(option?.label || '');
      }

      pathRef.current = pathname;
    }
  }, [pathname, onTermChange, options]);

  const onSelectItem = (item) => {
    push(`/company/${item.value}`);
  };

  const onClick = () => {
    dispatch(openModal());
  };

  return (
    <>
      <HeaderTag>
        <HeaderWrapper>
          <LogoLink to="/" isHomePage={pathname === '/'}>
            <Logo data-testid="bux-logo" />
          </LogoLink>
          {pathname !== '/' && (
            <AutocompleteContainer>
              <Autocomplete
                name="search"
                onChange={(e) => onTermChange(e.target.value)}
                inputValue={term}
                options={options}
                onSelectItem={onSelectItem}
              />
            </AutocompleteContainer>
          )}
          <Favorites onClick={onClick}>
            <Start
              active={hasFavorites}
              icon={hasFavorites ? faStar : faStarRegular}
              alt="Favorites"
            />
          </Favorites>
        </HeaderWrapper>
      </HeaderTag>
    </>
  );
}

export default Header;
