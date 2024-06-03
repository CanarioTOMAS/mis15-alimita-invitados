"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  ButtonGroup,
} from "@mui/material";
import NewPerson from "./newPerson";

export default function FormAssist() {
  const [open, setOpen] = React.useState(false);
  const [age1, setAge1] = React.useState("");
  const [age2, setAge2] = React.useState("");
  const [age3, setAge3] = React.useState("");
  const [age4, setAge4] = React.useState("");

  const handleChange1 = (event: SelectChangeEvent) => {
    setAge1(event.target.value as string);
  };

  const handleChange2 = (event: SelectChangeEvent) => {
    setAge2(event.target.value as string);
  };

  const handleChange3 = (event: SelectChangeEvent) => {
    setAge3(event.target.value as string);
  };

  const handleChange4 = (event: SelectChangeEvent) => {
    setAge4(event.target.value as string);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());
            const mayores17 = formJson.mayores17;
            const adolescentes = formJson.adolescentes;
            const menores13 = formJson.menores13;
            const menores3 = formJson.menores3;
            console.log(formJson);
            console.log(mayores17);
            console.log(adolescentes);
            console.log(menores13);
            console.log(menores3);
            handleClose();
          },
        }}
      >
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="nameAndSurname"
            name="nameAndSurname"
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
            label="phone "
            type="text"
            fullWidth
            variant="standard"
          />
          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel id="mayores17">Mayores de 17 años</InputLabel>
            <Select
              labelId="mayores17"
              id="mayores17"
              value={age1}
              label="Mayores de 17 años"
              name="mayores17"
              onChange={handleChange1}
            >
              {[0, 1, 2, 3, 4, 5].map((value) => (
                <MenuItem key={value} value={value}>
                  {value}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel id="adolescentes">Adolescentes (14-16 años)</InputLabel>
            <Select
              labelId="adolescentes"
              id="adolescentes"
              name="adolescentes"
              value={age2}
              label="Adolescentes (14-16 años)"
              onChange={handleChange2}
            >
              {[0, 1, 2, 3, 4, 5].map((value) => (
                <MenuItem key={value} value={value}>
                  {value}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel id="menores13">Menores de 13 años</InputLabel>
            <Select
              labelId="menores13"
              id="menores13"
              name="menores13"
              value={age3}
              label="Menores de 13 años"
              onChange={handleChange3}
            >
              {[0, 1, 2, 3, 4, 5].map((value) => (
                <MenuItem key={value} value={value}>
                  {value}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel id="menores3">Menores de 3 años</InputLabel>
            <Select
              labelId="menores3"
              id="menores3"
              name="menores3"
              value={age4}
              label="Menores de 3 años"
              onChange={handleChange4}
            >
              {[0, 1, 2, 3, 4, 5].map((value) => (
                <MenuItem key={value} value={value}>
                  {value}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <ButtonGroup variant="text" aria-label="Basic button group">
            <Button>SI</Button>
            <Button>NO</Button>
          </ButtonGroup>
          <NewPerson></NewPerson>
          <Button variant="text">+ Agregar persona</Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Subscribe</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
