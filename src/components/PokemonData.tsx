import React, { useState, useEffect } from "react";
import { Card, CardContent, CardMedia, Typography, Chip, Table, TableBody, TableCell, TableContainer, TableRow, Paper, Container } from "@mui/material";
import "../index.css";

interface PokemonDataProps {
    data: any | null;
}

const PokemonData: React.FC<PokemonDataProps> = ({ data }) => {
    const [loading, setLoading] = useState(true);

    // Simulamos el tiempo de carga con useEffect
    useEffect(() => {
        setLoading(true);
        const timeoutId = setTimeout(() => {
            setLoading(false);
        }, 1000); // Simulamos un segundo de carga (puedes ajustar este valor)
        return () => clearTimeout(timeoutId);
    }, [data]);

    if (loading) {
        // Mostrar pantalla de carga
        return (<h2>Cargando...</h2>);
    }
    return (
        <div>
            {data ? (
                <Card className="pokemon-card">
                    <div className="pokemon-image-container">
                        <CardMedia
                            component="img"
                            style={{ width: "250px", height: "250px" }}
                            image={data.sprites.front_default}
                            alt={data.name}
                            className="pokemon-image"
                        />
                    </div>
                    <CardContent>
                        <Typography variant="h5" gutterBottom>
                            {data.name}
                        </Typography>
                        <div className="pokemon-types">
                            {data.types.map((type: any) => (
                                <Chip
                                    key={type.type.name}
                                    label={type.type.name}
                                    variant="outlined"
                                    size="small"
                                    className="pokemon-type"
                                />
                            ))}
                        </div>
                        <TableContainer component={Paper} elevation={0} className="pokemon-table">
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>HP</TableCell>
                                        <TableCell>{data.stats[0].base_stat}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Ataque</TableCell>
                                        <TableCell>{data.stats[1].base_stat}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Defensa</TableCell>
                                        <TableCell>{data.stats[2].base_stat}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </CardContent>
                </Card>
            ) : null}
        </div>
    );
};

export default PokemonData;
