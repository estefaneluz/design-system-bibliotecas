import './App.css';
import Card from './components/Card'
import Search from './components/Search'
import Navbar from './components/Navbar'
import { useEffect, useState } from 'react'

function App() {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    pesquisarPokemon('pikachu');
  }, []);

  async function pesquisarPokemon(search){
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`);

      const { abilities, name } = await response.json();

      setPokemon({
        abilities: abilities,
        name: name
      });

      console.log(pokemon.name); 
    } 
    catch (error) {
      return error.message;
    }
  }

  return (
    <>
      <Navbar/>
      <main className="container">
        <Card/>
        <Search/>
      </main>
    </>
  );
}

export default App;
