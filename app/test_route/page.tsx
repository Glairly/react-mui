"use client";
import {
  Box,
  Container,
  CssBaseline,
  Divider,
  Grid,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import { PortCard, PortCardProps } from "./portCard";

import "./animate.css";

const defaultValue = [
  {
    title: "Agoda",
    subHeader: "Intenrship FullStack Web Dev June 2022 - June 2023 ",
    imageUrls: "https://glairly.github.io/agoda.png",
    cardContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    title: "Tamsang-Tamsong",
    subHeader: "FullStack Web Dev Jan 2022 - June 2022",
    imageUrls: "https://glairly.github.io/liff.png",
    cardContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    title: "Tac Dosage Calculator",
    subHeader: "Product Owner Feb 2022",
    imageUrls: "https://glairly.github.io/tac.png",
    cardContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
] as PortCardProps[];

const Test_route_segment = () => {
  const defaultTheme = createTheme();

  const [data, setData] = React.useState(defaultValue);

  const profileSrc =
    "https://scontent.fbkk22-7.fna.fbcdn.net/v/t39.30808-6/347610620_599060812184689_436539206477618355_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGanqOfjYkAGXNZQNiy3VedvcxOCPKk60K9zE4I8qTrQmpr6DODVOYhU34FclltMP5Lzq36e6CB3zn0l9EsxKvc&_nc_ohc=vtm0PbpjLh4AX-pwzSd&_nc_zt=23&_nc_ht=scontent.fbkk22-7.fna&oh=00_AfAJOPzghQ9h5ZdIUj8_zKRX73sP-LF1Z_a67_qRI1JoOA&oe=647F0547";

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <main>
        <div className="flex min-h-screen flex-col items-center p-24">
          <Box>
            <Container>
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
                fontFamily={"Google Sans"}
                className="hero-title"
              >
                <p>Welcome!</p>
                <p> to My lovely Portfolio</p>
              </Typography>
            </Container>
          </Box>
          <Box sx={{ py: 8 }}>
            <Container>
              <Image
                src={profileSrc}
                alt=""
                width={256}
                height={256}
                className="rounded-full mx-auto"
              />
              <Typography
                component="h3"
                variant="h4"
                align="center"
                color="text.primary"
                gutterBottom
                fontFamily={"Google Sans"}
                sx={{ my: 4 }}
              >
                My name is Wongvarit Pancharoen! <br />
                You can call me Oak! 🌳
              </Typography>

              <Typography
                component="h3"
                variant="h4"
                align="center"
                color="text.primary"
                gutterBottom
                fontFamily={"Google Sans"}
                sx={{ my: 4 }}
              >
               💻 FullStack Web-Developer
              </Typography>
            </Container>
          </Box>
          <Container>
            <Divider>
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
                fontFamily={"Google Sans"}
              >
                My Experience
              </Typography>
            </Divider>
            <Grid container spacing={4}>
              {data.map((i, j) => (
                <Grid key={j} item xs={12}>
                  <PortCard {...i} />
                </Grid>
              ))}
            </Grid>
          </Container>
        </div>
      </main>
      <footer>
        <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
          <Typography variant="h6" align="center" gutterBottom>
            That&apos;s It!!
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            component="p"
          >
            Something here to give the footer a purpose!
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            {new Date().getFullYear()}
          </Typography>
        </Box>
      </footer>
    </ThemeProvider>
  );
};

export default Test_route_segment;
