import { useQuery } from "@apollo/client";
import { getCharacters } from "./query";
import { Card } from "./components/Card.jsx";
import { AddCharacterForm } from "./components/AddCharacterForm.jsx";
import { Loader } from "./components/Loader";
import Logo from "./assets/harry-potter-logo.png";

function App() {
  const { data, loading, error } = useQuery(getCharacters);

  return (
    <>
      <img src={Logo} alt="harry potter logo" className="logo" />
      <AddCharacterForm />
      <div className="container-characters">
        {loading && <Loader />}
        {data?.characters.map((character) => (
          <Card key={character?._id} character={character} />
        ))}
      </div>
    </>
  );
}

export default App;
