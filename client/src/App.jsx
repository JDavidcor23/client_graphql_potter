import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useQuery } from "@apollo/client";
import { getCharacters } from "./query";
import { Card } from "./components/card";
import { AddCharacterForm } from "./components/AddCharacterForm";

function App() {
  const { data, loading, error } = useQuery(getCharacters);

  return (
    <>
      <AddCharacterForm />
      <div className="container-characters">
        {data?.characters.map((character) => (
          <Card key={character?._id} character={character} />
        ))}
      </div>
    </>
  );
}

export default App;
