import { useEffect, useState } from 'react'; 
import pokemons from './assets/pokemons'; 
import PokemonCard from './components/pokemonCard'; 
import SearchBar from './components/searchBar'; 
import './App.css'; 

function App() {
  // Déclaration de l'état pour stocker la recherche de l'utilisateur
  const [search, setSearch] = useState(""); // Par défaut, la recherche est vide

  // Déclaration de l'état pour stocker les types de Pokémon sélectionnés
  const [types, setTypes] = useState([]); // Par défaut, aucun type n'est sélectionné

  // Effet exécuté à chaque changement de search ou types
  useEffect(() => {
    console.log(search); // Affiche la valeur actuelle de search dans la console
    console.log('types', types); // Affiche la liste actuelle des types sélectionnés dans la console
  }, [search, types]); // Dépendances : l'effet s'exécute lorsque search ou types change

  return (
    <div className="app-container"> {/* Conteneur principal de l'application */}
      <SearchBar 
        types={types} 
        setTypes={setTypes} 
        search={search} 
        setSearch={setSearch} 
      /> {/* Affichage de la barre de recherche avec passage des états et setters en props */}

      <div className="pokemon-list"> {/* Conteneur de la liste des Pokémon */}
        {pokemons.map((pokemon) => { // Parcours de la liste des Pokémon
          
          // Vérifie si les types sélectionnés sont inclus dans le Pokémon
          // Si aucun type n'est sélectionné, tous les Pokémon sont affichés
          // Sinon, le Pokémon doit contenir tous les types sélectionnés
          const isTypeIncluded = types.length === 0 || types.every(type => pokemon.type.includes(type));
          
          // Vérifie si le nom du Pokémon correspond à la recherche
          // Si la recherche est vide, tous les Pokémon sont affichés
          // Sinon, le nom du Pokémon doit inclure la recherche
          const isNameIncluded = search === "" || pokemon.name.french.toLowerCase().includes(search.toLowerCase());

          // Si le Pokémon ne correspond pas aux critères de recherche, ne pas l'afficher
          if (!isNameIncluded || !isTypeIncluded) {
            return null;
          }

          // Affichage des informations pour le débogage
          /*console.log("pokemon.name.french:", pokemon.name.french);
          console.log("pokemon.type:", pokemon.type);
          console.log("pokemon.imageShiny:", pokemon.imageShiny);
          console.log("pokemon.base.Attack:", pokemon.base.Attack);
          console.log("pokemon.base.Defense:", pokemon.base.Defense);
          console.log("pokemon.base.HP:", pokemon.base.HP);*/
          
          return (
            <div key={pokemon.id} className="pokemon-card-container"> {/* Conteneur pour chaque carte de Pokémon */}
              <PokemonCard 
                name={pokemon.name.french} // Nom en français du Pokémon
                types={pokemon.type} // Types du Pokémon
                image={pokemon.imageShiny} // Image shiny du Pokémon
                attack={pokemon.base.Attack} // Valeur d'attaque du Pokémon
                defense={pokemon.base.Defense} // Valeur de défense du Pokémon
                hp={pokemon.base.HP} // Points de vie du Pokémon
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App; // Exportation du composant App pour être utilisé dans d'autres fichiers
