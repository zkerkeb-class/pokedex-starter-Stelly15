import React, { useState } from 'react';
import pokemons from './assets/pokemons';
import PokemonCard from './components/pokemonCard';
import './App.css';

function App() {
  const [search, setSearch] = useState('');

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredPokemons = pokemons.filter(pokemon =>
    pokemon.name.french.toLowerCase().startsWith(search.toLowerCase())
  );

  return (
    <div>
      <input 
        type="text" 
        placeholder="Search Pokémon" 
        value={search} 
        onChange={handleSearchChange} 
      />
      <div className="pokemon-container">
        {filteredPokemons.map((pokemon, index) => (
          <PokemonCard 
            key={index}
            name={pokemon.name.french} 
            image={pokemon.image}
            types={pokemon.type}
            attack={pokemon.base.Attack} 
            defense={pokemon.base.Defense}
            hp={pokemon.base.HP}
          />
        ))}
      </div>
    </div>
  );
}

export default App;