import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

interface PokemonDataProps {
  data: any;
}

const PokemonData: React.FC<PokemonDataProps> = ({ data }) => {
  return (
    <Card sx={{ marginTop: 2 }}>
    <CardMedia
      component="img"
      height="400"
      image={data.sprites.front_default}
      alt={data.name}
    />
    <CardContent>
      <Typography variant="h5" gutterBottom>
        {data.name}
      </Typography>
      {/* Mostrar otros detalles del Pokémon según tus necesidades */}
    </CardContent>
  </Card>
  );
};

export default PokemonData;
