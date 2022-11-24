import { Divider, Grid, Stack } from "@mui/material";
import { NextPage } from "next";
import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import SportsAnimation from "../../components/elements/sportsAnimation";
import ClockAnimation from "../../components/elements/clockAnimation";
import Ripple from "../../components/elements/rippleEffect";
import SwipeableStepper from "../../components/elements/carousel";
import Layout from "../../components/layout";
// background: linear-gradient(
//   180deg,
//   hsla(145, 44%, 37%, 1) 86%,
//   hsla(190, 53%, 56%, 1) 100%
// );
const HeaderContainer = styled.div`
  font-family: Roboto;
  font-size: 28px;
  width: auto;
  background: #191e29;
  letter-spacing: 10px;
  height: 12vh;
`;
const BodyContainer = styled.div`
  width: 100%;
  height: 100%;
  background: hsla(190, 53%, 56%, 1) 100%;
`;
const Title = styled.div`
  font-family: Roboto;
  font-size: 30px;
  width: auto;
  letter-spacing: 2px;
  color: white;
  text-transform: uppercase;
`;
const HeaderOption = styled.div`
  font-family: Roboto;
  font-size: 18px;
  width: auto;
  color: white;
  text-transform: uppercase;
`;
const MainText = styled.div`
  font-family: Roboto;
  font-size: 24px;
  font-weight: 700;
  width: auto;
  letter-spacing: 2px;
  color: green;
  text-align: center;
  text-transform: uppercase;
`;
const FeatureButton = styled.button`
  position: relative;
  height: 40px;
  width: 40%;
  border: 1px solid transparent;
  border-radius: 25px;
  background-color: blue;
  color: white;
  overflow: hidden;
`;
const CarouselComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const Home: NextPage = () => {
  return (
    <Layout></Layout>
    // <Grid container>
    //   <Grid item xs={12}>
    //     <HeaderContainer>
    //       <Stack
    //         direction="row"
    //         alignItems="center"
    //         justifyContent="space-between"
    //         padding={1}
    //       >
    //         <div style={{ display: "flex", alignItems: "center" }}>
    //           <Image
    //             src="/football-ball.png"
    //             alt="icon"
    //             width={100}
    //             height={100}
    //           />
    //           <Title>Fuchibol</Title>
    //         </div>
    //         <div style={{ display: "flex", gap: "10px" }}>
    //           <HeaderOption>Crea tu torneo</HeaderOption>
    //           <Divider />
    //           <HeaderOption>Quiz</HeaderOption>
    //         </div>
    //         <div style={{ display: "flex", gap: "10px" }}>
    //           <HeaderOption>Registrarse</HeaderOption>
    //           <Divider />
    //           <HeaderOption>Iniciar Sesión</HeaderOption>
    //         </div>
    //       </Stack>
    //     </HeaderContainer>
    //   </Grid>
    //   <Grid
    //     container
    //     xs={12}
    //     style={{
    //       background:
    //         "linear-gradient(180deg, hsla(221, 24%, 13%, 1) 0%, hsla(209, 57%, 17%, 1) 4%)",
    //       paddingTop: "50px",
    //       paddingBottom: "50px",
    //       height: "88vh",
    //     }}
    //   >
    //     <Grid item xs={1}></Grid>

    //     <Grid container padding={2} borderRadius={10} xs={10}>
    //       <Grid item xs={12} md={12}>
    //         <Stack
    //           height="70vh"
    //           padding={3}
    //           direction="column"
    //           alignItems="center"
    //           justifyContent="center"
    //           flexWrap="nowrap"
    //           overflow="hidden"
    //         >
    //           <SwipeableStepper
    //             sliders={[
    //               {
    //                 label: "Se acerca el mundial, completa tu fixture...",
    //                 component: <ClockAnimation />,
    //               },
    //               {
    //                 label:
    //                   " Haga sus predicciones, organice torneos y mucho más...",
    //                 component: <SportsAnimation />,
    //               },
    //               {
    //                 label: "Se acerca el mundial, completa tu fixture...",
    //                 component: <ClockAnimation />,
    //               },
    //             ]}
    //           />
    //         </Stack>
    //       </Grid>
    //     </Grid>
    //   </Grid>
    // </Grid>
  );
};

export default Home;
