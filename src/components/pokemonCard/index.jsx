import { useState, useEffect } from 'react';
import './index.css';

const PokemonCard = ({ name, types, image, attack, defense, hp }) => {
  const [currentHP, setCurrentHP] = useState(hp);

  useEffect(() => {
    console.log("currentHP useEffect", currentHP);
    if (currentHP <= 0) {
      alert("Pokemon is dead");
    }
  }, [currentHP]);

  console.log("🚀 ~ PokemonCard ~ types:", types);

  return (
    <span className="pokemon-card">
      <div className="pokemon-name-container">
        <h1 className="pokemon-name">{name}</h1>
      </div>
      <div className="image-container">
      <img className="pokemon-image" src={image} alt={name} />
      </div>
      <div className="pokemon-types-container">
        {types && types.map((type) => (
          <p key={type}>{type}</p>
        ))}
      </div>
      <div className="pokemon-stats-container">
        <p>Attack: {attack}</p>
        <p>Defense: {defense}</p>
        <p>HP: {currentHP}</p>
      </div>
      <button onClick={() => {
        console.log("🚀 ~ bulbizard se mange une patate");
        setCurrentHP(currentHP - 10);
      }}>
        Attaque
      </button>
    </span>
  );
};

export default PokemonCard;