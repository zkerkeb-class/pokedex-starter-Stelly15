import pokemons from './assets/pokemons'
import PokemonCard from './components/PokemonCard'
import './App.css'

const bulbasaur = pokemons[0]

console.log("🚀 ~ bulbasaur:", bulbasaur)
console.log("🚀 ~ bulbasaur.name.french:", bulbasaur.name.french)
console.log("🚀 ~ bulbasaur.base.Attack:", bulbasaur.base.Attack)
console.log("🚀 ~ bulbasaur.base.Defense:", bulbasaur.base.Defense)
console.log("🚀 ~ bulbasaur.base.HP:", bulbasaur.base.HP)

function App() {
  return (
    <div>
      
        <PokemonCard 
          name={bulbasaur.name.french} 
          image={bulbasaur.image}
          attack={bulbasaur.base.Attack} 
          defense={bulbasaur.base.Defense}
          hp={bulbasaur.base.HP}
        />

    </div>
  )
}

export default App