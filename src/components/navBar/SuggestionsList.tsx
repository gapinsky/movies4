import Suggestion from "./Suggestion";
import Spinner from "./Spinner";

interface SuggestionsProps {
  Title: string;
  Poster: string;
  imdbID: string;
}

interface InputResultsProps {
  suggestions: SuggestionsProps[];
  isLoading: boolean;
}

const SuggestionsList: React.FC<InputResultsProps> = ({
  suggestions,
  isLoading,
}) => {
  return (
    <ul className="absolute w-full z-10 drop-shadow-md">
      {isLoading ? (
        // <li className="bg-white text-black text-center py-3">Loading...</li>
        <li className="bg-white text-black text-center py-3">
          <Spinner />
        </li>
      ) : (
        suggestions.map((suggestion, index) => (
          <Suggestion
            key={index}
            imdbID={suggestion.imdbID}
            title={suggestion.Title}
            poster={suggestion.Poster}
          />
        ))
      )}
    </ul>
  );
};

export default SuggestionsList;
