'use client'
import * as React from "react";
import TextField from "@mui/material/TextField";

export default function NewPerson() {

  return (
    <React.Fragment>
        <TextField
            autoFocus
            required
            margin="dense"
            id="nameAndSurnameProblem"
            name="nameAndSurnameProblem"
            label="Nombre y Apellido"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="phone"
            name="phone"
            label="phone"
            type="text"
            fullWidth
            variant="standard"
          />

    </React.Fragment>
  );
}
