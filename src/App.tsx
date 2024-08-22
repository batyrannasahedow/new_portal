import "./App.css";
import HotTopics from "./pages/HotTopics";
import LatestNews from "./pages/LatestNews";
import { IoSearchOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { onInput } from "./utils/onInput";
import { useHooks } from "./hooks/useHooks";
import { useEffect } from "react";
import getSearch from "./api/Search";

function App(): JSX.Element {
  const { onInputChange, handleKeyPress, term, inputRef } = onInput();
  const { input, setInput, headlines, setHeadlines } = useHooks();

  const getYears = new Date().getFullYear();
  useEffect(() => {
    const searchForNews = async (value: string) => {
      const response = await getSearch(value);
      setHeadlines(response);
    };
    if (term) {
      searchForNews(term);
    } else {
      searchForNews("tesla");
    }
  }, [term, setHeadlines]);

  return (
    <div>
      <nav className="nav">
        <div>
          <p className="news">News</p>
          <p className="portal">Portal</p>
        </div>
        <div>
          {input ? (
            <input
              ref={inputRef}
              className="input-search"
              type="text"
              placeholder="Search news"
              value={term}
              onChange={onInputChange}
              onKeyDown={handleKeyPress}
            />
          ) : (
            <IoSearchOutline
              className="search-icon"
              onClick={() => setInput(true)}
            />
          )}
          <RxHamburgerMenu className="burger-icon" />
        </div>
      </nav>
      <HotTopics headlines={headlines} />
      <LatestNews headlines={headlines} />
      <div className="footer">Copyright {`${getYears}`} News Portal</div>
    </div>
  );
}

export default App;
