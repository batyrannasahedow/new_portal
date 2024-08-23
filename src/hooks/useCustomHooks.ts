import { useRef, useState } from 'react';
import { Root } from '../types/Types';

export const useCustomHooks = () => {
  const [isSearchInputVisible, setSearchInputVisible] =
    useState<boolean>(false);
  const [term, setTerm] = useState<string>('');
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [headlines, setHeadlines] = useState<Root | null>(null);

  return {
    isSearchInputVisible,
    setSearchInputVisible,
    term,
    setTerm,
    inputRef,
    headlines,
    setHeadlines,
  };
};
