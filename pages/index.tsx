import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Head from "next/head";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <div>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
      </div>
      <CssBaseline />
      <div className={styles.container}>
        <Link href="/home" passHref>
          Home
        </Link>
      </div>
    </>
  );
};

export default Home;
