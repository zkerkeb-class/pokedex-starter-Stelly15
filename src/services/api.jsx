// Importation des modules nécessaires
import axios from 'axios'; 
import { BrowserRouter as Router, Routes, Route, useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import HomePage from './pages/HomePage';
import PokemonDetail from './pages/PokemonDetail';
import CreatePokemon from './pages/CreatePokemon';
import EditPokemon from './pages/EditPokemon';

// Définition de l'URL de base de l'API (à remplacer par l'URL réelle de votre API)
const API_BASE_URL = 'https://localhost:3000/api'; 

// Création d'une instance Axios avec une configuration par défaut
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Fonction pour récupérer tous les Pokémons depuis l'API
export const getAllPokemons = async () => {
  try {
    const response = await api.get('/pokemons');
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des Pokémons', error);
    throw error;
  }
};

// Fonction pour récupérer un Pokémon spécifique par son ID
export const getPokemonById = async (id) => {
  try {
    const response = await api.get(`/pokemons/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Erreur lors de la récupération du Pokémon ID: ${id}`, error);
    throw error;
  }
};

// Fonction pour créer un nouveau Pokémon en envoyant des données à l'API
export const createPokemon = async (data) => {
  try {
    const response = await api.post('/pokemons', data);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la création du Pokémon', error);
    throw error;
  }
};

// Fonction pour mettre à jour un Pokémon existant par son ID
export const updatePokemon = async (id, data) => {
  try {
    const response = await api.put(`/pokemons/${id}`, data);
    return response.data;
  } catch (error) {
    console.error(`Erreur lors de la mise à jour du Pokémon ID: ${id}`, error);
    throw error;
  }
};

// Fonction pour supprimer un Pokémon par son ID
export const deletePokemon = async (id) => {
  try {
    const response = await api.delete(`/pokemons/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Erreur lors de la suppression du Pokémon ID: ${id}`, error);
    throw error;
  }
};

// Composant pour gérer les états de chargement et les erreurs
const withLoading = (WrappedComponent) => {
  return (props) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      setLoading(false);
    }, []);

    if (loading) return <p>Chargement...</p>;
    if (error) return <p>Erreur : {error.message}</p>;

    return <WrappedComponent {...props} />;
  };
};

// Configuration du routage avec React Router
function api() {
  return (
    <Router>
      <Routes>
        {/* Route pour la page d'accueil listant tous les Pokémon */}
        <Route path="/" element={<HomePage />} />
        {/* Route pour afficher les détails d'un Pokémon spécifique */}
        <Route path="/pokemon/:id" element={withLoading(PokemonDetail)} />
        {/* Route pour créer un nouveau Pokémon */}
        <Route path="/create" element={withLoading(CreatePokemon)} />
        {/* Route pour modifier un Pokémon existant */}
        <Route path="/edit/:id" element={withLoading(EditPokemon)} />
      </Routes>
    </Router>
  );
}

export default api;
