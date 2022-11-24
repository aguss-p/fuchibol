import { Grid } from "@mui/material";
// import Footer from "./footer";
import Navbar from "../elements/navbar";
import React from "react";

const Layout = ({ children }: any) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
};
export default Layout;
