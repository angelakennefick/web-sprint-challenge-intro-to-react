import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';
import Character from "../src/components/Character";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [query, setQuery] = useState("")
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");

   const SWAPI = `https://swapi.dev/api/people/?search=${query}`;
  // const [characterId, setCharacterId] = useState("1");

  // const openDetails = id => {
  //   setCharacterId(id);
  // }

  // const closeDetails = () => {
  //   setCharacterId(null);
  // }

  useEffect(() => {
    axios.get(SWAPI)
    .then(res => {
      setCharacters(res.data);
    })
    .catch(err => {
      console.log("oops", err);
    })
    console.log("SWAPI fetched...");
  }, [/*query*/]);

  // const updateSearch = e => {
  //   setSearch(e.target.value)
  // };

  // const getSearch = e => {
  //   e.preventDefault();
  //   setQuery(search);
  //   setSearch("");
  // };

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {/* <form 
      onSubmit= {getSearch} 
      className= "search-form"> */}
        {/* <input 
        className= "search-bar" 
        type= "text" 
        value= {search} 
        onChange= {updateSearch}
        />
        <button className= "search-button" 
        type= "submit">
          Use The Force...
        </button>
      </form> */}
      {characters.map(character =>(
        <Character 
          key= {character.name}
          name= {character.name} 
          height= {character.height} 
          mass= {character.mass}
          hair_color= {character.hair_color}
          skin_color= {character.skin_color}
          eye_color= {character.eye_color}
          birth_year= {character.birth_year}
          gender= {character.gender}
          // homeworld= {character.homeworld}
          films= {character.films}
          // species= {character.species}
          // vehicles={character.vehicles}
          // starships={character.starships}
        />
      ))}
    </div>
  );
}

export default App;
