import "./App.css";
import CharacterList from "./components/CharacterList";
import CharacterDetail from "./components/CharacterDetail";
import Navbar from "./components/Navbar";
import { AllCharacters } from "../data/data";
import { useState } from "react";

function App() {
  const [characters, setCharacters] = useState(AllCharacters);
  return (
    <div className="app">
      <Navbar numOfResult={characters.length} />
      <div className="main">
        <CharacterList characters={characters} />
        <CharacterDetail />
      </div>
    </div>
  );
}

export default App;
