import { Box, Grid, Typography } from "@mui/material";
import React, { Component } from "react";
import "../../Style/components/Extras/Footer.scss";
import { connect } from "react-redux";

import { FooterPosition } from "../../Action/Action";

function Footer() {
  return (
    <>
      <Grid container className="FooterCenter">
        <Grid item className="LeftFooterBox">
          <Typography
            className="All-of-Us-and-the-Al"
            //sx={{ fontSize: "12px" }}
          >
            <Box component="span" className="text-style-1">
              All of Us 
            </Box>
            and there 
            <Box component="span" className="text-style-2">
              All of Us 
            </Box>
            logo are registered service mark of the U.S Department of Health and
            Human Services.
            <br />
            <Typography className="All-of-Us-and-the-Al FooterLeft">
              <Box component="span" className="text-style-3">
                ap.support@allofuscomms.org
                <br />
              </Box>
              Copyright © 2023 
              <Box component="span" className="text-style-4">
                Terms and Conditions
              </Box>
            </Typography>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
export default Footer;
