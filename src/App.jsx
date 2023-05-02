import { useQuery } from "@apollo/client";
import { getCharacters } from "./query";
import { Card } from "./components/card.jsx";
import { AddCharacterForm } from "./components/AddCharacterForm.jsx";
import "./App.css";

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
