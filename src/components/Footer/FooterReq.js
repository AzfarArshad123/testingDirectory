import { Box, Grid, Typography } from "@mui/material";
import React, { Component } from "react";
import "../../Style/components/Extras/FooterReq.scss";
import { connect } from "react-redux";

import { FooterPosition } from "../../Action/Action";

function Footer() {
  return (
    <>
      <Grid container className="FooterCenterR">
        <Grid item className="LeftFooterBox">
          <Typography
            className="All-of-Us-is-a-regis"
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
            <Typography className="apsupportallofusco">
              <Box component="span" className="text-style-3">
                ap.support@allofuscomms.org |
              </Box>
              <Box component="span" className="text-style-2">
                Copyright © 2023
              </Box>

              <Box component="span" className="text-style-3">
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
