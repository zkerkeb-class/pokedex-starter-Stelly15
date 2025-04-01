 // Importation des hooks React pour gérer l'état et les effets secondaires
import { useState, useEffect } from "react";
import "./index.css"; 

const typeColors = {
  Bug: "#A8B820",
  Dark: "#705848",
  Dragon: "#7038F8",
  Electric: "#F8D030",
  Fairy: "#EE99AC",
  Fighting: "#C03028",
  Fire: "#F08030",
  Flying: "#A890F0",
  Ghost: "#705898",
  Grass: "#78C850",
  Ground: "#E0C068",
  Ice: "#98D8D8",
  Normal: "#A8A878",
  Poison: "#A040A0",
  Psychic: "#F85888",
  Rock: "#B8A038",
  Steel: "#B8B8D0",
  Water: "#6890F0",
};
const PokemonCard = ({ name, types, image, attack, defense, hp }) => {
  const [currentHP, setCurrentHP] = useState(hp); // État pour suivre les points de vie actuels du Pokémon


  useEffect(() => { 
    // alert("le combat commence")
  }, []);

  useEffect(() => {
    console.log("currentHP useEffect", currentHP); // Affichage dans la console des HP actuels
    if (currentHP <= 0) {
      alert("bulbizarre est mort"); // Affiche une alerte lorsque les HP tombent à 0
    }
  }, [currentHP]); // Cet effet est exécuté à chaque modification de currentHP

  const handleAttack = () => {
    console.log("bulbizarre ce mange une patate"); // Affiche un message lors d'une attaque
    setCurrentHP(currentHP - 10); // Réduit les HP du Pokémon de 10 points
  };

  // Déterminez la couleur de la bordure en fonction du premier type du Pokémon
  const borderColor = typeColors[types[0]];

  return (
    <div className="pokemon-card" style={{borderColor: borderColor}}> {/* Conteneur principal de la carte Pokémon */}
      <div className="pokemon-name-container"> {/* Conteneur pour le nom du Pokémon */}
        <span className="pokemon-name">{name}</span> {/* Affichage du nom */}
      </div>
      <img className="pokemon-image" src={image} alt={name} /> {/* Affichage de l'image du Pokémon */}
      <div className="pokemon-types-container"> {/* Conteneur des types du Pokémon */}
        {types.map((type) => {
          return <span key={type}>{type}</span>; // Affichage de chaque type du Pokémon
        })}
      </div>
      <div className="pokemon-stats-container"> {/* Conteneur des statistiques du Pokémon */}
        <span>Attack: {attack}</span> {/* Affichage de l'attaque */}
        <span>Defense: {defense}</span> {/* Affichage de la défense */}
        <span>HP: {currentHP}</span> {/* Affichage des HP actuels */}
      </div>
      {/* <button onClick={handleAttack}>Attack</button> */} {/* Bouton d'attaque (commenté) */}
    </div>
  );
};

export default PokemonCard; // Exportation du composant pour être utilisé ailleurs
