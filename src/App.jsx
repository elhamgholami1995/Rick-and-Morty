import "./App.css";
import CharacterList from "./components/CharacterList";
import CharacterDetail from "./components/CharacterDetail";
import Navbar from "./components/Navbar";
import { Characters } from "../data/data";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="main">
        <CharacterList Characters={Characters} />
        <CharacterDetail />
      </div>
    </div>
  );
}

export default App;
