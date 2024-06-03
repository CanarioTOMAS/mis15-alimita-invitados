import { Box, Typography } from "@mui/material";
import React from "react";

export const Welcome = () => {
  return (
    <Box
      component="section"
      sx={{ p: 3,pt:6 }}
    >
      
      <Typography variant="h4" sx={{textAlign:"center", fontFamily:"Mate",color:'white'}}> ¡Qué emoción tenerte aquí!</Typography>
        <br />
        <Typography variant="h6" sx={{ textAlign: "center", fontFamily: "Mate",color:'white' }}> Estoy más que feliz de darte la bienvenida a la celebración de
        mis 15 años.
        <br />
        Así que prepárate para disfrutar, crear recuerdos y celebrar este
        momento tan especial conmigo.
        <br /> </Typography>
        <Typography variant="h4" sx={{textAlign:"center", fontFamily:"Mate",color:'white'}}>¡Nos vemos en la fiesta!</Typography>

    
    </Box>

  );
};
