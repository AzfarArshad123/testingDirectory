import { Box, Popper, Fade, Paper, Typography } from "@mui/material";
import React, { Component } from "react";

function Tabs() {
  const [state, setState] = useState({ anchorEl: null, open: true });
  const handleClick = (event) => {
    setState({ anchorEl: event.currentTarget });
    setState({ open: !state.open });
  };
  const handleClose = (event) => {
    setState({ anchorEl: null });
    setState({ open: !state.open });
  };

  return (
    <Box>
      <div
        style={{
          height: "150px",
          width: "300px",
          backgroundColor: "green",
          marginTop: "150px",
          marginLeft: "60px",
        }}
        onClick={handleClick}
      ></div>
      <div
        style={{
          height: "150px",
          width: "300px",
          backgroundColor: "blue",
          marginTop: "150px",
          marginLeft: "60px",
        }}
        onClick={handleClose}
      ></div>
      <Popper
        open={state.open}
        anchorEl={state.anchorEl}
        placement={"top-start"}
        transition
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper sx={{ backgroundColor: "red" }}>
              <Typography sx={{ p: 2 }}>The content of the Popper.</Typography>
            </Paper>
          </Fade>
        )}
      </Popper>
    </Box>
  );
}

export default Tabs;
