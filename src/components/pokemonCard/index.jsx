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
      <div className="pokemon-types-container">
        {types && types.map((type) => (
          <p key={type}>{type}</p>
        ))}
      </div>
      <div className="pokemon-name-container">
        <h1 className="pokemon-name">{name}</h1>
      </div>
      <div className="image-container">
        <img className="pokemon-image" src={image} alt={name} />
      </div>

      <div className="pokemon-stats-container">
        <div className="stat-row">
          <p className="stat-label">Attack:</p>
          <p className="stat-value">{attack}</p>
        </div>
        <div className="stat-row">
          <p className="stat-label">Defense:</p>
          <p className="stat-value">{defense}</p>
        </div>
        <div className="stat-row">
          <p className="stat-label">HP:</p>
          <p className="stat-value">{currentHP}</p>
        </div>
    </div>

      
    </span>
  );
};

/*
<div className="button-container">
        <button onClick={() => {
          console.log("🚀 ~ bulbizard se mange une patate");
          setCurrentHP(currentHP - 10);
        }}>
          Attaque
        </button>
      </div>*/ 
export default PokemonCard;