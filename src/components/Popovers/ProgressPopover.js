import React, { useEffect, useState } from "react";
import { Popover, Grid, Typography } from "@mui/material";

function ProgressPopover({ label, duration, extraDetails, pfinalanchorEl, popOverOpen}) {
  return (
    <Popover
      id="mouse-over-progress"
      sx={{
        pointerEvents: "none !important",
      }}
      open={popOverOpen}
      anchorEl={pfinalanchorEl}
      anchorOrigin={{
        vertical: "center",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    //   onClose={handlepfinalPopoverClose}
      disableRestoreFocus
      classes={{ paper: "pfinalPaper" }}
    >
      <Grid container>
        <Grid item md={12}>
          <Typography className="gBold font12" sx={{ lineHeight: "16px" }}>
            {label}
          </Typography>
        </Grid>
        <Grid
          item
          mt={0.5}
          md={6}
          sx={{ height: "1px", backgroundColor: "#6cace4" }}
        ></Grid>
        <Grid item mt={0.5} md={6}></Grid>
        {extraDetails !== "" && (
          <Grid item md={12} mt={1}>
            <Typography
              className="fontset purple font12"
              sx={{
                lineHeight: "16px",
                letterSpacing: "-0.17px",
              }}
            >
              {extraDetails}
            </Typography>
          </Grid>
        )}
        <Grid item md={12} mt={0.5}>
          <Typography
            className="fontset purple font12"
            sx={{
              lineHeight: "16px",
              letterSpacing: "-0.17px",
            }}
          >
            {duration}
          </Typography>
        </Grid>
      </Grid>
    </Popover>
  );
}

export default ProgressPopover;
