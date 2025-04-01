import "./index.css"; // Importation du fichier CSS pour le style de la barre de recherche

// Liste des types de Pokémon disponibles pour le filtrage
const typesList = [
    "Bug", "Dark", "Dragon", "Electric", "Fairy", "Fighting", "Fire",
    "Flying", "Ghost", "Grass", "Ground", "Ice", "Normal", "Poison",
    "Psychic", "Rock", "Steel", "Water"
];
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

const SearchBar = ({ search, setSearch, types, setTypes }) => {
  return (
    <div className="search-container"> {/* Conteneur principal de la barre de recherche */}
      
      <div className="title">
    <h1>Pokédex</h1>
    <h2>Attrapez-les tous !</h2>
  </div>
      
      
      <input
        value={search} // Valeur actuelle de la recherche
        onChange={(e) => {
            setSearch(e.target.value) // Met à jour l'état de la recherche lorsque l'utilisateur tape
        }}
        type="text"
        placeholder="Rechercher un pokemon" // Texte affiché lorsque l'input est vide
        className="search-bar" // Classe CSS pour le style de l'input
      />

      
      <div className="type-container"> {/* Conteneur des boutons de type */}
        {typesList.map((type) => {
            return <button 
            className={types.includes(type) ? 'active' : ''} // Ajoute la classe 'active' si le type est sélectionné
            onClick={() => { // Gère la sélection/désélection des types
              if(types.includes(type)){
                setTypes(types.filter((t) => t !== type)) // Retire le type s'il est déjà sélectionné
              } else {
                setTypes([...types, type]) // Ajoute le type s'il n'est pas encore sélectionné
              }
            }}
            // Applique la couleur de fond selon le type
            key={type} style={{backgroundColor: typeColors[type]}}>
              {type}
           </button> // Affichage du bouton avec le nom du type
        })}
      </div>

      
    </div>
  );
};

export default SearchBar; // Exportation du composant SearchBar pour être utilisé ailleurs
