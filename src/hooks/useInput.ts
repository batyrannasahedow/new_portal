import { ChangeEvent } from 'react';
import getSearch from '../api/Search';
import { useCustomHooks } from './useCustomHooks';

export const useInput = () => {
  const { setTerm, term, inputRef, setHeadlines } = useCustomHooks();

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setTerm(value);
  };

  const handleKeyPress = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputRef.current) {
      inputRef.current.blur();
      try {
        const headlines = await getSearch(term);
        setHeadlines(headlines);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    }
  };

  return { onInputChange, handleKeyPress, setTerm, term, inputRef };
};
