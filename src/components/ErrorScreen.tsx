import React from "react";
import { Button, Typography } from "@mui/material";

interface ErrorScreenProps {
  error: string;
  onRetry: () => void; // Agregamos una prop onRetry que será una función para manejar el reintentar
}

const ErrorScreen: React.FC<ErrorScreenProps> = ({ error, onRetry }) => {
  return (
    <div style={{ textAlign: "center", marginTop: 40 }}>
    <Typography variant="body1" color="error">
      Error: {error}
    </Typography>
    <Button onClick={onRetry} variant="contained" color="primary">
      Intentar de nuevo
    </Button>
  </div>
  );
};

export default ErrorScreen;
