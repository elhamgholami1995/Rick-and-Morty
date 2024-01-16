import "./App.css";
import CharacterList from "./components/CharacterList";
import CharacterDetail from "./components/CharacterDetail";
import Navbar, { SearchResult } from "./components/Navbar";
import { AllCharacters } from "../data/data";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [characters, setCharacters] = useState(AllCharacters);
  const [isLoading, setIsLoading] = useState(false);
  // not to fetch in this way:
  // fetch("https://rickandmortyapi.com/api/character")
  //   .then((res) => res.json())
  //   .then((data) => setCharacters(data.results));

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       setIsLoading(true);
  //       const res = await fetch("https://rickandmortyapi.com/api/character");
  //       if (!res.ok) throw new Error("something went wrong");
  //       const data = await res.json();
  //       setCharacters(data.results.slice(0, 5));
  //     } catch (err) {
  //       toast.error(err.message);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }
  //   fetchData();
  // }, []);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://rickandmortyapi.com/api/characterr")
      .then((res) => {
        if (!res.ok) throw new Error("something went wrong!!!");
        return res.json();
      })
      .then((data) => {
        setCharacters(data.results.slice(0, 5));
      })
      .catch((err) => {
        toast.error(err.message);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="app">
      <Toaster />
      <Navbar>
        <SearchResult numOfResult={characters.length} />
      </Navbar>
      <Main>
        <CharacterList characters={characters} isLoading={isLoading} />
        <CharacterDetail />
      </Main>
    </div>
  );
}

export default App;

function Main({ children }) {
  return <div className="main">{children}</div>;
}

// props drilling : a,b,c,d
// characters => app => main => characterlist
