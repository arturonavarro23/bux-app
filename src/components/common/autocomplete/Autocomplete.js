import { useEffect, useRef, useState } from 'react';
import { arrayOf, func, shape, string } from 'prop-types';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {
  AutocompleteWrapper,
  SearchIcon,
  OptionsWrapper,
  Input,
} from './styles';

export function Autocomplete({
  onChange,
  inputValue,
  options,
  onSelectItem,
  ...rest
}) {
  const [isOpen, setIsOpen] = useState(false);
  const isOpenRef = useRef(null);
  const autocompleteRef = useRef(null);
  const optionsRef = useRef(null);

  useEffect(() => {
    isOpenRef.current = isOpen;
  }, [isOpen]);

  useEffect(() => {
    window.document.addEventListener('click', handleBodyClick);
    return () => {
      window.document.removeEventListener('click', handleBodyClick);
    };
  }, []);

  const onFocus = () => {
    setIsOpen(true);
  };

  const onSelect = (item) => () => {
    setIsOpen(false);
    if (onSelectItem) {
      onSelectItem(item);
    }
  };

  function handleBodyClick(e) {
    if (
      !autocompleteRef.current.contains(e.target) &&
      optionsRef.current &&
      !optionsRef.current.contains(e.target)
    ) {
      setIsOpen(false);
    }
  }

  return (
    <>
      <AutocompleteWrapper ref={autocompleteRef}>
        <Input
          type="text"
          onChange={onChange}
          autoComplete="off"
          placeholder="Eg. Apple"
          onFocus={onFocus}
          {...rest}
          value={inputValue}
        />
        <SearchIcon icon={faSearch} />
      </AutocompleteWrapper>
      {isOpen && inputValue.length > 0 && autocompleteRef.current && (
        <OptionsWrapper
          ref={optionsRef}
          style={{
            left: autocompleteRef.current.offsetLeft,
            top:
              autocompleteRef.current.offsetTop +
              autocompleteRef.current.offsetHeight,
            width: autocompleteRef.current.offsetWidth,
          }}
        >
          <ul className="options">
            {options.length > 0 ? (
              options.map((o) => (
                <li
                  className="options__item"
                  key={o.value}
                  onClick={onSelect(o)}
                >
                  {o.label}
                </li>
              ))
            ) : (
              <li className="options__no-items">No options</li>
            )}
          </ul>
        </OptionsWrapper>
      )}
    </>
  );
}

Autocomplete.propTypes = {
  inputValue: string.isRequired,
  value: string,
  onChange: func.isRequired,
  options: arrayOf(
    shape({
      value: string,
      label: string,
    }),
  ),
  onSelectItem: func,
};

Autocomplete.defaultProps = {
  options: [],
  value: '',
  onSelectItem: null,
};

export default Autocomplete;
