"use client";
import { Box, Typography, Grid, Container } from "@mui/material";
import React, { useEffect, useState } from "react";

export const Timer = ({ initialTime }: { initialTime: number }) => {
  const calculateTimeLeft = () => {
    const difference = initialTime  - +new Date();
    let timeLeft: {
      days: number;
      hours: number;
      minutes: number;
      seconds: number;
    } = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });
  return (
    <Box
      component="section"
      sx={{
        p: 2,
        height: 350,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid container sx={{textAlign:'center'}}>
        <Grid item xs={3}>

        <Container sx={{ 
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 'calc(100vh - 4rem)',
      }} >
      <Box         sx={{
          display: 'grid',
          alignItems: 'center',
          justifyContent: 'center',
          transform: 'skew(0, -10deg)',
        }}
>
        <Typography variant="h1" sx={{
            color: '#fde9ff',
            fontWeight: 900,
            textTransform: 'uppercase',
            fontSize: 'clamp(3rem, 10vw, 6rem)',
            lineHeight: '0.75em',
            textAlign: 'center',
            textShadow:
            '3px 1px 1px rgba(0, 0, 0, 0.9), 2px 2px 1px rgba(0, 0, 0, 0.7), 4px 2px 1px rgba(0, 0, 0, 0.9), 3px 3px 1px rgba(0, 0, 0, 0.7), 5px 3px 1px rgba(0, 0, 0, 0.9), 4px 4px 1px rgba(0, 0, 0, 0.7), 6px 4px 1px rgba(0, 0, 0, 0.9), 5px 5px 1px rgba(0, 0, 0, 0.7), 7px 5px 1px rgba(0, 0, 0, 0.9), 6px 6px 1px rgba(0, 0, 0, 0.7), 8px 6px 1px rgba(0, 0, 0, 0.9), 7px 7px 1px rgba(0, 0, 0, 0.7), 9px 7px 1px rgba(0, 0, 0, 0.9)',

          }}>
          <Box component="span"   sx={{
            display: 'block',
            position: 'relative',
            '&:before': {
              content: 'attr(data-text)',
              position: 'absolute',
              textShadow:
                '2px 2px 1px #2e2d2d, -1px -1px 1px #363636, -2px 2px 1px #2e2d2d, 1px -1px 1px #4f4f4f',
              zIndex: 1,
            },
            
            '&:nth-child(2)': {
              paddingLeft: '2.25rem',
            },
          }}>
            {timeLeft.days<10?`0${timeLeft.days}`:`${timeLeft.days}`}
          </Box>
        </Typography>
          <Typography variant="h5" sx={{marginTop:'20px',fontSize: '20px',fontFamily:'Mate',color:"white"}}>Días</Typography>
      </Box>
    </Container>
         
        </Grid>
        <Grid item xs={3}>
      
        <Container sx={{ 
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 'calc(100vh - 4rem)',
      }} >
      <Box         sx={{
          display: 'grid',
          alignItems: 'center',
          justifyContent: 'center',
          transform: 'skew(0, -10deg)',
        }}
>
        <Typography variant="h1" sx={{
            color: '#fde9ff',
            fontWeight: 900,
            textTransform: 'uppercase',
            fontSize: 'clamp(3rem, 10vw, 6rem)',
            lineHeight: '0.75em',
            textAlign: 'center',
            textShadow:
            '3px 1px 1px rgba(0, 0, 0, 0.9), 2px 2px 1px rgba(0, 0, 0, 0.7), 4px 2px 1px rgba(0, 0, 0, 0.9), 3px 3px 1px rgba(0, 0, 0, 0.7), 5px 3px 1px rgba(0, 0, 0, 0.9), 4px 4px 1px rgba(0, 0, 0, 0.7), 6px 4px 1px rgba(0, 0, 0, 0.9), 5px 5px 1px rgba(0, 0, 0, 0.7), 7px 5px 1px rgba(0, 0, 0, 0.9), 6px 6px 1px rgba(0, 0, 0, 0.7), 8px 6px 1px rgba(0, 0, 0, 0.9), 7px 7px 1px rgba(0, 0, 0, 0.7), 9px 7px 1px rgba(0, 0, 0, 0.9)',

          }}>
          <Box component="span"   sx={{
            display: 'block',
            position: 'relative',
            '&:before': {
              content: 'attr(data-text)',
              position: 'absolute',
              textShadow:
                '2px 2px 1px #2e2d2d, -1px -1px 1px #363636, -2px 2px 1px #2e2d2d, 1px -1px 1px #4f4f4f',
              zIndex: 1,
            },
            
            '&:nth-child(2)': {
              paddingLeft: '2.25rem',
            },
          }}>
            {timeLeft.hours<10?`0${timeLeft.hours}`:`${timeLeft.hours}`}
          </Box>
        </Typography>
      <Typography variant="h5" sx={{marginTop:'20px',fontSize: '20px',fontFamily:'Mate',color:"white"}}>Horas</Typography>
      </Box>
    </Container>
        </Grid>
        <Grid item xs={3}>
        
        <Container sx={{ 
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 'calc(100vh - 4rem)',
      }} >
      <Box         sx={{
          display: 'grid',
          alignItems: 'center',
          justifyContent: 'center',
          transform: 'skew(0, -10deg)',
        }}
>
        <Typography variant="h1" sx={{
            color: '#fde9ff',
            fontWeight: 900,
            textTransform: 'uppercase',
            fontSize: 'clamp(3rem, 10vw, 6rem)',
            lineHeight: '0.75em',
            textAlign: 'center',
            textShadow:
            '3px 1px 1px rgba(0, 0, 0, 0.9), 2px 2px 1px rgba(0, 0, 0, 0.7), 4px 2px 1px rgba(0, 0, 0, 0.9), 3px 3px 1px rgba(0, 0, 0, 0.7), 5px 3px 1px rgba(0, 0, 0, 0.9), 4px 4px 1px rgba(0, 0, 0, 0.7), 6px 4px 1px rgba(0, 0, 0, 0.9), 5px 5px 1px rgba(0, 0, 0, 0.7), 7px 5px 1px rgba(0, 0, 0, 0.9), 6px 6px 1px rgba(0, 0, 0, 0.7), 8px 6px 1px rgba(0, 0, 0, 0.9), 7px 7px 1px rgba(0, 0, 0, 0.7), 9px 7px 1px rgba(0, 0, 0, 0.9)',

          }}>
          <Box component="span"   sx={{
            display: 'block',
            position: 'relative',
            '&:before': {
              content: 'attr(data-text)',
              position: 'absolute',
              textShadow:
                '2px 2px 1px #2e2d2d, -1px -1px 1px #363636, -2px 2px 1px #2e2d2d, 1px -1px 1px #4f4f4f',
              zIndex: 1,
            },
            
            '&:nth-child(2)': {
              paddingLeft: '2.25rem',
            },
          }}>
            {timeLeft.minutes<10?`0${timeLeft.minutes}`:`${timeLeft.minutes}`}
          </Box>
        </Typography>
      <Typography variant="h5" sx={{marginTop:'20px',fontSize: '20px',fontFamily:'Mate',color:"white"}}>Minutos</Typography>
      </Box>
          </Container>
        </Grid>
        <Grid item xs={3}>
        
        <Container sx={{ 
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 'calc(100vh - 4rem)',
      }} >
      <Box         sx={{
          display: 'grid',
          alignItems: 'center',
          justifyContent: 'center',
          transform: 'skew(0, -10deg)',
        }}
>
        <Typography variant="h1" sx={{
            color: '#fde9ff',
            fontWeight: 900,
            textTransform: 'uppercase',
            fontSize: 'clamp(3rem, 10vw, 6rem)',
            lineHeight: '0.75em',
            textAlign: 'center',
            textShadow:
            '3px 1px 1px rgba(0, 0, 0, 0.9), 2px 2px 1px rgba(0, 0, 0, 0.7), 4px 2px 1px rgba(0, 0, 0, 0.9), 3px 3px 1px rgba(0, 0, 0, 0.7), 5px 3px 1px rgba(0, 0, 0, 0.9), 4px 4px 1px rgba(0, 0, 0, 0.7), 6px 4px 1px rgba(0, 0, 0, 0.9), 5px 5px 1px rgba(0, 0, 0, 0.7), 7px 5px 1px rgba(0, 0, 0, 0.9), 6px 6px 1px rgba(0, 0, 0, 0.7), 8px 6px 1px rgba(0, 0, 0, 0.9), 7px 7px 1px rgba(0, 0, 0, 0.7), 9px 7px 1px rgba(0, 0, 0, 0.9)',

          }}>
          <Box component="span"   sx={{
            display: 'block',
            position: 'relative',
            '&:before': {
              content: 'attr(data-text)',
              position: 'absolute',
              textShadow:
                '2px 2px 1px #2e2d2d, -1px -1px 1px #363636, -2px 2px 1px #2e2d2d, 1px -1px 1px #4f4f4f',
              zIndex: 1,
            },
            
            '&:nth-child(2)': {
              paddingLeft: '2.25rem',
            },
          }}>
            {timeLeft.seconds<10?`0${timeLeft.seconds}`:`${timeLeft.seconds}`}
          </Box>
        </Typography>
      <Typography variant="h5" sx={{marginTop:'20px',fontSize: '20px',fontFamily:'Mate',color:"white"}}>Segundos</Typography>
      </Box>
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
};
