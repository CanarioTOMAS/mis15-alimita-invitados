import Image from "next/image";
import { Header } from "./components/header";
import { Timer } from "./components/timer";
import { Welcome } from "./components/welcome";
import { Dresscode } from "./components/dresscode";
import { Location } from "./components/location";
import MusicPlayer from "./components/musicController";
import GiftComponent from "./components/giftAction";
import FormAssist from "./components/formAsistencia";
import GiftBox from "./components/exampleGift";
import Box from "@mui/material/Box";
import ImagenAlma from "../public/Imagen2-Alma.jpeg";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Grid,
  Typography,
} from "@mui/material";
export default function Home() {
  return (
    <div>
      <Header></Header>
      <Welcome></Welcome>
      <Timer initialTime={new Date("2024-07-20T00:00:00").getTime()}></Timer>
      <Box
        sx={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          src={ImagenAlma}
          alt="Mis 15 - ALMA"
          style={{
            width: "100%",
            maskImage:
              "linear-gradient(to bottom, transparent, black 30%, black 20% ,transparent )",
          }}
        />
      </Box>
      <Grid
        container
        marginTop={"20%"}
        marginBottom={"20%"}
        zIndex={200}
        color={"white"}
      >
        <Grid item xs={12} md={4} p={6}>
          <Dresscode></Dresscode>
        </Grid>
        <Grid item xs={12} md={4} p={6}>
          <Location></Location>
        </Grid>
        <Grid item xs={12} md={4} p={6}>
          <Card
            sx={{
              background: "radial-gradient(circle, #eeeeee 0%, #d7d7d7 100%)",
            }}
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
                  height="2.5sem"
                  style={{ margin: "auto" }}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M7.5 21.5v-9.034q-1.16-.177-1.965-1.064q-.804-.886-.804-2.171V2.5h1v6.73H7.5V2.5h1v6.73h1.77V2.5h1v6.73q0 1.286-.805 2.172q-.806.887-1.965 1.064V21.5zm9.23 0v-8h-2.46V7q0-1.671.942-2.96q.944-1.29 2.519-1.501V21.5z"
                  />
                </svg>
                MENÚ
              </Typography>
              <Typography variant="body1" fontFamily={"Libre Baskerville"}>
                Recordá, si tenes algun problema alimentición hacemelo saber
              </Typography>
            </CardContent>
            <CardActions sx={{ textAlign: "center", m: "auto" }}>
              <Button
                sx={{ bgcolor: "black", color: "white", borderRadius: 60 }}
                fullWidth
                href="https://www.google.com/maps/dir//Pres.+Juan+Domingo+Per%C3%B3n+542,+R%C3%ADo+Tercero,+C%C3%B3rdoba/@-32.1616128,-64.1953845,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x95cd6f32b36c0191:0xafbad8a8d350358e!2m2!1d-64.1130126!2d-32.1616067?entry=ttu"
              >
                VER MENÚ
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <Box
        sx={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          zIndex:200
        }}
      >
        <Image
          src={ImagenAlma}
          alt="Mis 15 - ALMA"
          style={{
            width: "100%",
            maskImage:
              "linear-gradient(to bottom, transparent, black 30%, black 20% ,transparent )",
          }}
        />
      </Box>
      <GiftComponent></GiftComponent>
      {/* <FormAssist></FormAssist> */}
      <MusicPlayer></MusicPlayer>
    </div>
  );
}
