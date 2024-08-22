import { ChangeEvent } from "react";
import { useHooks } from "../hooks/useHooks";
import getSearch from "../api/Search";
import getHeadlines from "../api/Headlines";


export const onInput = () => {
    const {setTerm, term, inputRef} = useHooks();
    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.trim();
        setTerm(value);
        if (value === "") return;
        getSearch(value);
      };
    
      const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
          if (inputRef.current) {
            inputRef.current.blur();
            getHeadlines(inputRef.current.value);
          }
          getSearch(term);
        }
      };
      return {onInputChange, handleKeyPress, setTerm, term, inputRef};
}