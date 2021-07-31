import './App.css';
import Card from './components/Card'
import Search from './components/Search'
import Navbar from './components/Navbar'
import Alert from '@material-ui/lab/Alert';
import { useEffect, useState } from 'react'
import { useLocalStorage } from 'react-use'

function App() {
  const [pokemon, setPokemon] = useState({});
  const [pesquisa, setPesquisa] = useState('pikachu');
  const [erro, setErro] = useState('');
  const [pokemonStorage, setPokemonStorage, remove] = useLocalStorage('pokemon', []);

  useEffect(() => {
      pesquisarPokemon('pikachu');
  }, []);

  useEffect(()=> {
    if(!pokemonNoStorage()) setPokemonStorage([...pokemonStorage, pokemon]);
  },[pokemon]);

  function pokemonNoStorage(){
    return pokemonStorage.find(pokemon => pokemon.name === pesquisa)
  }

  async function pesquisarPokemon(search){
    setErro('');
    try {

      if(pokemonNoStorage()){
        return setPokemon(pokemonNoStorage);
      }

      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`);

      const { sprites: { other }, abilities, name } = await response.json();
      const { dream_world: { front_default } } = other;

      setPokemon({
        image: front_default,
        abilities: abilities,
        name: name
      });

    } 
    catch (error) {
      return setErro("Pokemon não encontrado.");
    }
  }

  return (
    <>
      <Navbar/>
      <main className="container">
        {pokemon.name && <Card pokemon={pokemon}/>}
        {erro && <Alert severity="error">{erro}</Alert>}
        <Search  
          setErro={setErro} 
          pesquisa={pesquisa} 
          setPesquisa={setPesquisa} 
          pesquisarPokemon ={pesquisarPokemon}
        />
      </main>
    </>
  );
}

export default App;
