import { CiHeart } from "react-icons/ci";
import Search from "./Search";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="flex justify-between items-center bg-zinc-800 py-4 px-8">
      <p className="uppercase font-bold text-2xl text-red-600 tracking-tighter">
        <Link to="/">movies</Link>
      </p>
      <Search />
      <button className="text-red-600 text-xl inline-flex hover:bg-zinc-700 px-3 rounded-md py-1">
        <CiHeart className="text-3xl" /> (1)
      </button>
    </div>
  );
};

export default Nav;
