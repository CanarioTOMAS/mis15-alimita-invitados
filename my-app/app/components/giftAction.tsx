'use client'
import React, { useState } from 'react';
import { Typography, Button, Popover, Box, IconButton } from '@mui/material';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import CloseIcon from '@mui/icons-material/Close';
const GiftComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
  
    const handleClick = (event:any) => {
      setIsOpen(!isOpen);
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setIsOpen(false);
    };
  
    return (
      <div style={{color:'white',paddingTop:20,paddingBottom:100,textAlign:'center'}}>
        <Typography variant="h5">
          El mejor regalo para mí es tu compañía, pero si quieres obsequiarme algo, te dejo una posibilidad dentro de este regalo.
          ¡Haz click en el regalo!
        </Typography>
        <Button onClick={handleClick} sx={{ position: 'relative',fontSize:30,color:isOpen?'white':'black',bgcolor:'white',mt:3 }}>
          <CardGiftcardIcon sx={{ animation: isOpen ? 'jump 0.3s ease' : '' ,fontSize:100}} />
        </Button>
        <Popover
          open={isOpen}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <Box p={2}>
            <Typography variant="body2">
              ¡Felicidades! Has abierto el regalo. Aquí hay algunos datos:
              ALIAS: CBU:
            </Typography>
            <IconButton aria-label="exit" onClick={handleClose}>
            <CloseIcon ></CloseIcon>
</IconButton>
            
          </Box>
        </Popover>
        <style>
          {`
          @keyframes jump {
            0% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0); }
          }
          `}
        </style>
      </div>
    );
};

export default GiftComponent;
