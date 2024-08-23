import { useEffect } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { RxHamburgerMenu } from 'react-icons/rx';
import getSearch from './api/Search';
import './App.css';
import { useCustomHooks } from './hooks/useCustomHooks';
import HotTopics from './pages/HotTopics';
import LatestNews from './pages/LatestNews';
import { currentYear } from './utils/getCurrentYear';
import { useInput } from './hooks/useInput';

function App(): JSX.Element {
  const { onInputChange, handleKeyPress, term, inputRef } = useInput();
  const {
    isSearchInputVisible,
    setSearchInputVisible,
    headlines,
    setHeadlines,
  } = useCustomHooks();

  useEffect(() => {
    const searchForNews = async (value: string) => {
      const response = await getSearch(value);
      setHeadlines(response);
    };
    searchForNews(term || 'tesla');
  }, [term, setHeadlines]);

  return (
    <div>
      <nav className='nav'>
        <div>
          <p className='news'>News</p>
          <p className='portal'>Portal</p>
        </div>
        <div>
          {isSearchInputVisible ? (
            <input
              ref={inputRef}
              className='input-search'
              type='text'
              placeholder='Search news'
              value={term}
              onChange={onInputChange}
              onKeyDown={handleKeyPress}
            />
          ) : (
            <IoSearchOutline
              className='search-icon'
              onClick={() => setSearchInputVisible(true)}
            />
          )}
          <RxHamburgerMenu className='burger-icon' />
        </div>
      </nav>
      {headlines ? (
        <>
          <HotTopics headlines={headlines} />
          <LatestNews headlines={headlines} />
        </>
      ) : (
        <p>Loading...</p>
      )}
      <footer className='footer'>Copyright {currentYear} News Portal</footer>
    </div>
  );
}

export default App;
