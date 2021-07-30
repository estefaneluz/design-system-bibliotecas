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

      const { sprites: { other }, abilities, name } = await response.json();
      const { dream_world: { front_default } } = other;

      setPokemon({
        image: front_default,
        abilities: abilities,
        name: name
      });

      console.log(pokemon.image);
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
