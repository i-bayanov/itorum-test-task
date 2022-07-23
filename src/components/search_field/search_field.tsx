import { useEffect, useState } from 'react';
import { useAction } from '../../store/hooks';

import './search_field.css'

export default function SearchField() {
  const [inputValue, setInputValue] = useState('');
  const { updateSearchQuery } = useAction();

  useEffect(() => {
    const timerID = setTimeout(() => updateSearchQuery(inputValue), 500);

    return () => clearTimeout(timerID);
  }, [inputValue, updateSearchQuery]);

  return (
    <input
      className='search-field'
      placeholder='Search GitHub users...'
      autoFocus
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
  )
}
