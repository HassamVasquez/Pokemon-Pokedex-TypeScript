import React, { useState } from "react";
import axios from "axios";
import PokemonData from "./PokemonData";
import LoadingScreen from "./LoadingScreen";
import ErrorScreen from "./ErrorScreen";
import { Container, TextField, Button } from "@mui/material";

const Pokedex: React.FC = () => {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonData, setPokemonData] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`
      );
      setPokemonData(response.data);
      setLoading(false);
    } catch (error) {
      setError("¡Error al obtener los datos del Pokémon!");
      setLoading(false);
    }
  };

  const handleRetry = () => {
    setError("");
    setPokemonData(null);
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: 10 }}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nombre del Pokémon"
          value={pokemonName}
          onChange={(e) => setPokemonName(e.target.value)}
          fullWidth
          variant="outlined"
          sx={{ marginBottom: 2 }}
        />
        <Button type="submit" variant="contained" color="primary">
          Buscar
        </Button>
      </form>

      {loading && <LoadingScreen />}
      {error && <ErrorScreen error={error} onRetry={handleRetry} />}
      {pokemonData && <PokemonData data={pokemonData} />}
    </Container>
  );
};

export default Pokedex;
