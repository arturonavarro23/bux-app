import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { search } from 'store/actions/search';
import useDebounce from './useDebounce';

export default function useAutocomplete() {
  const dispatch = useDispatch();
  const results = useSelector((state) => state.search.results);
  const [term, setTerm] = useState('');
  const debouncedSearchTerm = useDebounce(term, 300);

  useEffect(() => {
    if (debouncedSearchTerm) {
      dispatch(search(debouncedSearchTerm));
    }
  }, [debouncedSearchTerm, dispatch]);

  return {
    results,
    onTermChange: setTerm,
    term,
  };
}
