import { IoMdClose } from "react-icons/io";

interface SuggestionsProps {
  Title: string;
  Poster: string;
  imdbID: string;
}

interface Props {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  clearSuggestionsList: React.Dispatch<
    React.SetStateAction<SuggestionsProps[]>
  >;
}

const ClearButton = ({
  inputValue,
  setInputValue,
  clearSuggestionsList,
}: Props) => {
  const clearSearchField = () => {
    if (inputValue === "") return;
    setInputValue("");
    clearSuggestionsList([]);
  };

  return (
    <button
      className="text-3xl px-2 py-1 h-full "
      disabled={inputValue === ""}
      onClick={clearSearchField}
    >
      {inputValue !== "" && <IoMdClose />}
    </button>
  );
};

export default ClearButton;
