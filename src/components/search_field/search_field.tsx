import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useSearchAction, useAppSelector } from '../../store/hooks';

import './search_field.css'

export default function SearchField() {
  const { query } = useAppSelector(state => state.search);
  const [inputValue, setInputValue] = useState(query);
  const [inputValid, setInputValidity] = useState('');
  const { updateSearchQuery } = useSearchAction();
  const navigate = useNavigate();
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    
    const timerID = setTimeout(() => {
      updateSearchQuery(inputValue);
      navigate('/');
      setInputValidity(inputValue.length > 0 && inputValue.length < 3
        ? 'invalid'
        : '');
    }, 500);

    return () => clearTimeout(timerID);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);

  return (
    <div className='search-field'>
      <input
        className={inputValid}
        placeholder='Search GitHub users'
        autoFocus
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      {inputValid && <div>Minimum length 3 characters</div>}
    </div>

  )
}
