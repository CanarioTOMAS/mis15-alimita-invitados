"use client";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";

export const Dresscode = () => {
  return (
    <Card
      sx={{
        // background: 'radial-gradient(circle, #eeeeee 0%, #d7d7d7 100%)',
        boxShadow: "10px 10px 5px 0px rgba(217,217,217,0.5)",
        borderRadius: "20px",
      }}
      className="bg-[url('../public/13.png')] bg-cover"
    >
      <CardContent sx={{ textAlign: "center" }}>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontFamily: "Mate",
            color: "black",
            fontWeight: 700,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2.5em"
            height="2.5em"
            style={{ margin: "auto" }}
            viewBox="0 0 256 256"
          >
            <path
              fill="currentColor"
              d="M214.7 209.7a2 2 0 0 0-.11-.25l-45.48-96.86l20.5-32.18a2 2 0 0 0 .11-.18a16 16 0 0 0 0-16.46c-.09-.16-.2-.32-.3-.47L168 32.7V8a8 8 0 0 0-16 0v24.42L146.74 39a24 24 0 0 1-37.48 0L104 32.42V8a8 8 0 0 0-16 0v24.7L66.58 63.3c-.1.15-.21.31-.3.47a16 16 0 0 0 0 16.46a2 2 0 0 0 .11.18l20.5 32.18l-45.48 96.86a2 2 0 0 0-.11.25A16 16 0 0 0 56 232h144a16 16 0 0 0 14.71-22.3ZM80 72l16.43-23.43l.33.42a40 40 0 0 0 62.48 0l.33-.42L176 72l-20.38 32h-55.23ZM56 216l45.07-96h53.84L200 216Z"
            />
          </svg>
          DRESS CODE
        </Typography>
        <Typography variant="h4" fontFamily={"Libre Baskerville"}>
          ELEGANTE
        </Typography>
        <Typography variant="body1" fontFamily={"Libre Baskerville"}>
          No ir de plateado ni dorado
        </Typography>
      </CardContent>
    </Card>
  );
};
