import React from "react";
import { CircularProgress, Typography } from "@mui/material";

const LoadingScreen: React.FC = () => {
  return (
    <div style={{ textAlign: "center", marginTop: 40 }}>
      <CircularProgress />
      <Typography variant="body1" color="text.secondary">
        Cargando...
      </Typography>
    </div>
  );
};

export default LoadingScreen;

