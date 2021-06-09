import { useEffect, useRef, useState, useCallback } from 'react';
import { arrayOf, func, shape, string } from 'prop-types';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useKeyPress } from 'hooks';
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
  const [active, setActive] = useState(null);
  const downPress = useKeyPress('ArrowDown');
  const upPress = useKeyPress('ArrowUp');
  const enterPress = useKeyPress('Enter');
  const autocompleteRef = useRef(null);
  const optionsRef = useRef(null);

  const selectItem = useCallback(
    (item) => {
      setIsOpen(false);
      if (onSelectItem) {
        onSelectItem(item);
      }
    },
    [onSelectItem],
  );

  const handleBodyClick = useCallback((e) => {
    if (
      autocompleteRef.current &&
      !autocompleteRef.current.contains(e.target) &&
      optionsRef.current &&
      !optionsRef.current.contains(e.target)
    ) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    window.document.addEventListener('click', handleBodyClick);
    return () => {
      window.document.removeEventListener('click', handleBodyClick);
    };
  }, [handleBodyClick]);

  useEffect(() => {
    if (options.length > 0 && isOpen && downPress) {
      setActive((prevActive) =>
        prevActive === null || prevActive === options.length - 1
          ? 0
          : prevActive + 1,
      );
    }
  }, [downPress, options, isOpen]);

  useEffect(() => {
    if (options.length > 0 && isOpen && upPress) {
      setActive((prevActive) =>
        prevActive === 0 || prevActive === null
          ? options.length - 1
          : prevActive - 1,
      );
    }
  }, [upPress, options, isOpen]);

  useEffect(() => {
    if (options.length > 0 && enterPress && enterPress && active !== null) {
      selectItem(options[active]);
    }
  }, [enterPress, options, isOpen, selectItem, active]);

  useEffect(() => {
    if (isOpen && active !== null) {
      const element = optionsRef.current.querySelector(
        '.options__item--active',
      );
      optionsRef.current.scrollTo(0, element.offsetTop - element.offsetHeight);
    }
  }, [active, isOpen]);

  useEffect(() => {
    setActive(null);
  }, [options]);

  const onChangeInput = (e) => {
    setIsOpen(e.target.value.length > 0);
    onChange(e);
  };

  const onSelect = (item) => () => {
    selectItem(item);
  };

  return (
    <>
      <AutocompleteWrapper ref={autocompleteRef}>
        <Input
          type="text"
          onChange={onChangeInput}
          autoComplete="off"
          placeholder="Eg. Apple"
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
          <ul className="options" role="listbox">
            {options.map((o, i) => (
              <li
                className={`options__item ${
                  active === i ? 'options__item--active' : ''
                }`}
                key={o.value}
                onClick={onSelect(o)}
              >
                {o.label}
              </li>
            ))}
          </ul>
        </OptionsWrapper>
      )}
    </>
  );
}

Autocomplete.propTypes = {
  inputValue: string.isRequired,
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
  onSelectItem: null,
};

export default Autocomplete;
