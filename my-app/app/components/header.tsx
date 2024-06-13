import React from "react";
import Image from "../../public/Imagen1-Alma.jpeg";
import { Box, Container, Typography } from "@mui/material";

export const Header = () => {
  return (
    <Box
      component="section"
      sx={{
        p: 2,
        height: 350,
        backgroundImage: `url(${Image.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: 'relative', // Asegúrate de que el Box sea el contenedor relativo
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.4)', // Ajusta la opacidad según sea necesario
          zIndex: 1, // Asegúrate de que la superposición esté encima del fondo pero debajo del contenido
        },
      }}
    >
      <Container sx={{ textAlign: "Center" , position: 'relative', zIndex: 2}}>
        <Typography
          variant="h1"
          fontFamily={"Libre Baskerville"}
          fontWeight={700}
          fontSize={"5rem"}
          sx={{
            background: 'linear-gradient(45deg, #e0e0e0, #ffffff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 5px rgba(255, 255, 255, 0.5), 0 0 10px rgba(192, 192, 192, 0.5)',
            fontWeight: 'bold',
          }}
        >
          MIS 15 ALMA
        </Typography>
      </Container>
    </Box>
  );
};
