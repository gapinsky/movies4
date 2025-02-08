import { IoMdSearch } from "react-icons/io";
import SuggestionsList from "./SuggestionsList";
import { useEffect, useState, useContext, createContext } from "react";
import ClearButton from "./ClearButton";

interface SuggestionsProps {
  Title: string;
  Poster: string;
  imdbID: string;
}

const BASE_URL = import.meta.env.VITE_API_KEY;

const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const [suggestionsList, setSuggestionsList] = useState<SuggestionsProps[]>(
    []
  );
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (inputValue === "") return;
    const fetchSuggestions = async () => {
      setIsLoading(true);
      const response = await fetch(`${BASE_URL}s=${inputValue}`);
      const data = await response.json();
      setSuggestionsList(data.Search || []);
      setIsLoading(false);
    };
    fetchSuggestions();
  }, [inputValue]);
  // console.log(isLoading);
  // console.log(suggestionsList);

  // const SuggestionsListContext = createContext<SuggestionsContextType | undefined>(undefined); dodalem importy do kontekstu tez

  return (
    <>
      <div className="relative w-[30%]">
        <div className="flex items-center bg-white text-black">
          <div className="bg-zinc-200 h-full p-1">
            <IoMdSearch className="text-3xl  h-full" />
          </div>
          <input
            type="text"
            className="text-xl ml-2 bg-white focus:outline-none w-full"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <ClearButton
            inputValue={inputValue}
            setInputValue={setInputValue}
            clearSuggestionsList={setSuggestionsList}
          />
        </div>
        <SuggestionsList suggestions={suggestionsList} isLoading={isLoading} />
      </div>
    </>
  );
};

export default Search;
