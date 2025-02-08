import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../navBar/Spinner";

interface Movie {
  Title: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Plot: string;
  imdbRating: string;
  Poster: string;
  Type: string;
}

const MoviePage = () => {
  const BASE_URL = import.meta.env.VITE_API_KEY;

  const { id } = useParams();
  const [isMovieLoading, setIsMovieLoading] = useState(false);
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setIsMovieLoading(true);
      const response = await fetch(`${BASE_URL}i=${id}`);
      const data = (await response.json()) as Movie;
      setMovie(data);
      setIsMovieLoading(false);
    };
    fetchMovieDetails();
  }, [id]);

  return (
    <div className="w-full h-full bg-zinc-700 px-28 flex flex-col justify-center items-center">
      {isMovieLoading ? (
        <Spinner customStyles="text-5xl text-red-600" />
      ) : (
        <div className="flex items-center text-neutral-200 mb-14 w-[80%] drop-shadow-md">
          <img
            src={movie?.Poster}
            alt=""
            className="h-[650px] w-[500px] object-cover object-center"
          />
          <div className="bg-zinc-600 w-full h-full p-10">
            <p className=" inline-flex w-full justify-between text-2xl mb-4 font-bold text-red-600">
              <button>Return</button>
              <button>Add to favourites</button>
            </p>
            <h2 className="text-5xl font-bold">{movie?.Title}</h2>
            <p className="text-3xl my-5">{movie?.Plot}</p>
            <div className=" text-2xl flex flex-col gap-5 my-12">
              <p>
                <span className="font-bold">Imdb: </span>
                {movie?.imdbRating}/10
              </p>
              <p>
                <span className="font-bold">Released: </span>
                {movie?.imdbRating}
              </p>
              <p>
                <span className="font-bold">Runtime: </span>
                {movie?.Runtime}
              </p>
              <p>
                <span className="font-bold">Type: </span>
                {movie?.Type}
              </p>
              <p>
                <span className="font-bold">Genre: </span>
                {movie?.Genre}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MoviePage;
