import { useState, useEffect } from 'react';

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
    <div>
      <h1>{name}</h1>
      <img src={image} alt={name} />
      {types && types.map((type) => (
        <p key={type}>{type}</p>
      ))}
      <p>Attack: {attack}</p>
      <p>Defense: {defense}</p>
      <p>HP: {currentHP}</p>
      <button onClick={() => {
        console.log("🚀 ~ bulbizard se mange une patate");
        setCurrentHP(currentHP - 10);
      }}>
        Attaque
      </button>
    </div>
  );
};

export default PokemonCard;