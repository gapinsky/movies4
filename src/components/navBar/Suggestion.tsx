import defaultPoster from "../../assets/img/noImage.png";
import { useNavigate } from "react-router-dom";

interface Props {
  poster: string;
  title: string;
  imdbID: string;
}

const Suggestion = ({ poster, title, imdbID }: Props) => {
  const image = poster === "N/A" ? defaultPoster : poster;
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/movies/${imdbID}`);
  };

  return (
    <li
      className="flex bg-white w-full items-center p-1 text-black text-xl hover:bg-slate-100 hover:cursor-pointer"
      onClick={() => handleClick()}
    >
      <img
        src={image}
        alt={`${title} poster`}
        className="max-w-[50px]  mr-2 aspect-square"
      />
      {title}
    </li>
  );
};

export default Suggestion;
