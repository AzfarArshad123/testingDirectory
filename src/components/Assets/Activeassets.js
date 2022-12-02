import React, { Component } from "react";
import { Container, Box, Typography, Grid } from "@mui/material";
import AddBoxSharpIcon from "@mui/icons-material/AddBoxSharp";
import IndeterminateCheckBoxSharpIcon from "@mui/icons-material/IndeterminateCheckBoxSharp";
import Detailview from "../Detail/Detailview";
import Overview from "../Extras/Overview";
import "../../Style/components/Activeassets/activeassets.scss";
import Footer from "../Footer/Footer.js";
function Activeassets() {
  //const state = {};
  const displayoverview = () => {
    document.querySelector(".detail").classList.add("dnone");
    document.querySelector(".overview").classList.remove("dnone");
    document.querySelector(".detailIcon").classList.remove("fade");
    document.querySelector(".overviewIcon").classList.add("fade");
  };
  const displaydetail = () => {
    document.querySelector(".detail").classList.remove("dnone");
    document.querySelector(".overview").classList.add("dnone");
    document.querySelector(".overviewIcon").classList.remove("fade");
    document.querySelector(".detailIcon").classList.add("fade");
  };
  return (
    <Box>
      <Box className="detail">
        <Detailview />
      </Box>
      <Box className=" dnone">
        <Overview />
      </Box>
      <Container>
        {" "}
        <Box className="footer">
          <Grid container>
            <Grid item md={10.5}></Grid>
            <Grid
              item
              className="activeAssets"
              md={0.8}
              // sx={
              //   {
              //     // color: "#1D70BE",
              //     // alignContent: "center",
              //     // textAlign: "center",
              //   }
              // }
            >
              <AddBoxSharpIcon
                className="detailIcon fade"
                // sx={{
                //   height: "24px",
                //   width: "24px",
                //   cursor: "pointer",
                // }}
                onClick={displaydetail}
              />
            </Grid>
            <Grid
              className="grid"
              item
              md={0.7}
              // sx={{
              //   alignContent: "center",
              //   textAlign: "center",
              // }}
            >
              <IndeterminateCheckBoxSharpIcon
                className="overviewButton"
                // sx={{
                //   color: "#1D70BE",
                //   height: "24px",
                //   width: "24px",
                //   cursor: "pointer",
                // }}
                onClick={displayoverview}
              />
            </Grid>
            <Grid item md={10.7} sx={{ marginTop: "-4px" }}>
              {" "}
              <Typography
                // sx={
                //   {
                //     //color: "#7D7D7D",
                //   }
                // }
                className="All-assets-are-uniq"
              >
                *All assets are unique. Typical durations are based on past
                projects and may not apply to yours.
              </Typography>
            </Grid>
            <Grid item md={0.65}>
              <Typography
                // sx={
                //   {
                //     fontSize: "10px",
                //     color: "#216fb4",
                //     letterSpacing: "-0.08px",
                //     marginTop: "-4px",
                //     paddingLeft: "2px",
                //   }
                // }
                className="detailViewtext"
              >
                DETAIL
              </Typography>
            </Grid>
            <Grid item md={0.6}>
              <Typography
                // sx={
                //   {
                //     fontSize: "10px",
                //     color: "#216fb4",
                //     letterSpacing: "-0.08px",
                //     marginTop: "-4px",
                //   }
                // }
                className="overViewtext"
              >
                OVERVIEW
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}
export default Activeassets;
