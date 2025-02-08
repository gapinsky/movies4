import { Outlet } from "react-router-dom";
import Genres from "./components/aside/Genres";
import Nav from "./components/navBar/Nav";
function App() {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <Nav />
      <Genres />
      <Outlet />
    </div>
  );
}

export default App;
