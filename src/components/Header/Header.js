import React, { useState, useEffect } from "react";
import AssetTrackerLogo from "images/logos/AssetTrackerLogo.webp";
import CircleIcon from "@mui/icons-material/Circle";
import Activeassets from "../Assets/Activeassets";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Grid,
  Tab,
  Menu,
  MenuItem,
  Divider,
} from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Getstarted from "../Extras/Getstarted";
import Completedassets from "../Assets/Completedassets";
import Requestsop from "../Assets/Requestsops";
import { API_URL } from "../../api/endpoints";
import { useOktaAuth } from "@okta/okta-react";
import LoadingSVG from "images/Icons/spinner.svg";

function Header() {
  const [state, setState] = useState({
    value: "2",
    anchorEl: null,
  });

  const handleChange = (event, value) => {
    setState({ value: value });
  };
  const activeAssets = () => {
    setState({ value: "2" });
  };
  const handleClick = (e) => {
    setState({ anchorEl: e.currentTarget });
  };
  const handleClose = (e) => {
    setState({ anchorEl: null });
  };

  const open = Boolean(state.anchorEl);

  return (
    <Box component="header">
      <Box sx={{ flexGrow: 1 }} mb={8}>
        <AppBar
          sx={{
            backgroundColor: "#ffffff",
            color: "black",
            boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.1) !important",
          }}
        >
          <Toolbar  sx={{ backgroundColor: "#ffffff !important",}}
            >
            <Grid container>
              <Grid
                item
                sx={{
                  display: {
                    xs: "flex",
                    lg: "none",
                    md: "none",
                    xl: "none",
                  },
                }}
              >
                <Grid
                  id="aslogo"
                  classsName="Assettrackerlogres"
                  item
                  xs={5}
                  sx={{
                    marginTop: "8px",

                    marginBottom: "8px",
                  }}
                >
                  <img
                    src={AssetTrackerLogo}
                    alt="hp"
                    className="AssetTrackerLogo"
                  />
                </Grid>
                <Grid item xs={7}>
                  <Grid
                    container
                    sx={{
                      display: {
                        xs: "flex",
                        lg: "none",
                        md: "none",
                        xl: "none",
                      },
                    }}
                  >
                    <Grid item xs={2}></Grid>
                    <Grid item xs={6} mt={0.5}>
                      <Button
                        id="commsButton"
                        className="gMedium"
                        variant="outlined"
                        sx={{
                          paddingTop: "13px",
                          width: "103px",
                          height: "32px",
                          fontSize: "8px",
                          color: "#4a4a4a",
                          mt: "1px",
                          border: "solid 1px #216fb4",
                        }}
                      >
                        Comms Portal
                      </Button>
                    </Grid>
                    <Grid mt={1} xs={4} sx={{ alignContent: "center" }}>
                      <CircleIcon
                        sx={{
                          marginLeft: "20px",
                          height: "30px",
                          width: "30px",
                          display: {
                            xs: "block",
                            lg: "none",
                            md: "none",
                            xl: "none",
                          },
                        }}
                      />
                      <Typography
                        className="gMedium"
                        sx={{
                          marginLeft: "15px",
                          fontSize: "9px",
                          color: "#4a4a4a",
                        }}
                      >
                        First Last
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                pl={"135px"}
                pr={"170.5px"}
                id="aslogo"
                classsName="Assettrackerlogres"
                item
                xs={3}
                md={1.5}
                sx={{
                  display: {
                    xs: "none",
                    lg: "block",
                    md: "block",
                    xl: "block",
                  },
                  paddingTop: "8px",

                  paddingBottom: "8px",
                }}
              >
                <img
                  onClick={activeAssets}
                  src={AssetTrackerLogo}
                  alt="hp"
                  className="AssetTrackerLogo"
                  style={{
                    width: "120px",
                    height: "50px",
                    cursor: "pointer",
                  }}
                />
              </Grid>
              <Grid
                item
                md={0.01}
                sx={{
                  display: {
                    xs: "none",
                    lg: "block",
                    md: "block",
                    xl: "block",
                  },
                }}
              ></Grid>
              <Grid item md={5.25} mr={4}>
                <Grid container sx={{ display: "flex", float: "right" }}>
                  <Grid md={12}>
                    <TabContext value={state.value}>
                      <TabList
                        onChange={handleChange}
                        aria-label="lab API tabs example"
                        TabIndicatorProps={{
                          sx: {
                            backgroundColor: "#6cace4",
                            marginBottom: "21px",
                          },
                        }}
                        classes={{
                          scroller: "tabs_scroller",
                        }}
                      >
                        <Tab
                          className="headerTabs headerTabs1"
                          label="GET STARTED"
                          value="1"
                        />
                        <Tab
                          className="headerTabs headerTabs2"
                          label="ACTIVE ASSETS"
                          value="2"
                        />
                        <Tab
                          className="headerTabs headerTabs3"
                          label="COMPLETED ASSETS"
                          value="3"
                        />
                        <Tab
                          className="headerTabs headerTabs4"
                          label="REQUESTS SOPs"
                          value="4"
                        />
                      </TabList>
                    </TabContext>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                md={1.3611}
                xs={4}
                pt={"16px"}
                sx={{
                  display: {
                    xs: "none",
                    lg: "block",
                    md: "block",
                    xl: "block",
                  },
                }}
              >
                <Button
                  id="commsButton"
                  variant="outlined"
                  sx={{
                    width: "103px",
                    fontSize: "9px",
                    color: "#4a4a4a",
                    border: "solid 1px #216fb4",
                    textTransform: "capitalize",
                    padding: "9px 0px 8px 0px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "12px !important",
                      textTransform: "capitalize",
                      marginTop: "-3px",
                      fontWeight: "bold !important",
                      fontFamily: "GothamBook !important",
                      color: "#4a4aa",
                    }}
                  >
                    {" "}
                    Comms Portal
                  </Typography>
                </Button>
              </Grid>
              <Grid
                pt={"7px"}
                pb={"7px"}
                md={0.54}
                xs={3}
                sx={{
                  display: {
                    xs: "none",
                    lg: "block",
                    md: "block",
                    xl: "block",
                  },
                }}
              >
                <CircleIcon
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  sx={{
                    height: "50px",
                    width: "50px",
                    paddingRight: "11px",
                    cursor: "pointer",
                  }}
                />
              </Grid>
              <Grid
                pt={3.125}
                md={0.6}
                sx={{
                  display: {
                    xs: "none",
                    lg: "block",
                    md: "block",
                    xl: "block",
                  },
                }}
              >
                <Typography
                  className="gMedium"
                  sx={{
                    fontSize: "12px",
                    color: "#4a4a4a",
                    marginTop: "-2px",
                  }}
                >
                  First Last
                </Typography>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>

      {/* <Application Body>*/}

      <TabContext value={state.value}>
        <TabPanel value="1">
          <Getstarted />
        </TabPanel>
        <TabPanel value="2">
          <Activeassets />
        </TabPanel>
        <TabPanel value="3">
          <Completedassets />
        </TabPanel>
        <TabPanel value="4">
          <Requestsop />
        </TabPanel>
      </TabContext>
      <Menu
        id="basic-menu"
        anchorEl={state.anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem
          sx={{
            "&:hover": {
              background: "transparent !important",
            },
            "&:active": {
              background: "transparent",
            },
          }}
          disableRipple
          className="menuitem"
        >
          <Typography className="fontset font12 grey">Signed in as</Typography>
          <Typography className="font14 fontset">aarona@wondros.com</Typography>
        </MenuItem>
        <Divider />
        <MenuItem
          sx={{
            "&:hover": {
              background: "transparent",
            },
            "&:active": {
              background: "transparent",
            },
          }}
          disableRipple
          className="menuitem"
        >
          <Typography className="fontset font12 grey">Full name</Typography>
          <Typography className="font14 fontset">Aaron Angel</Typography>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose} className="menuitem1">
          <Typography className="font14 fontset">Sign out</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
}

export default Header;
