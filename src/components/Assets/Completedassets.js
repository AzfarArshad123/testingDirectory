import React, { Component, useState } from "react";
import HighLogo from "images/logos/High.webp";
import LowLogo from "images/logos/Low.webp";
import Footer from "../Footer/Footer.js";
import img from "images/filter.svg";
import {
  Container,
  Box,
  Typography,
  Grid,
  Button,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Popover,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckBoxOutlineBlankSharpIcon from "@mui/icons-material/CheckBoxOutlineBlankSharp";
import CheckBoxSharpIcon from "@mui/icons-material/CheckBoxSharp";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import "../../Style/components/Completedassets/completedassets.scss";
function Completedassets() {
  const styles = {
    rectangleCopy2: {
      width: "497px",
    },
  };
  const [state, setState] = useState({
    assets: 24,
    open: false,
    anchorEl: null,
    reqanchorEl: null,
    sortAnchorEl: null,
  });
  // state = {
  //   assets: 24,
  //   open: false,
  //   anchorEl: null,
  //   reqanchorEl: null,
  //   sortAnchorEl: null,
  // };
  const handleClickOpen = () => {
    setState({ open: true });
  };

  const handleClose = () => {
    setState({ open: false });
  };
  const handlePopoverOpen = (event) => {
    setState({ anchorEl: event.currentTarget });
  };
  const handlePopoverClose = () => {
    setState({ anchorEl: null });
  };
  const handleClick = (event) => {
    setState({ reqanchorEl: event.currentTarget });
  };
  const handleClosereq = () => {
    setState({ reqanchorEl: null });
  };
  const handleClickSort = (event) => {
    setState({ sortAnchorEl: event.currentTarget });
  };
  const handleCloseSort = () => {
    setState({ sortAnchorEl: null });
  };

  const open = Boolean(state.anchorEl);
  const reqopen = Boolean(state.reqanchorEl);
  const sortOpen = Boolean(state.sortAnchorEl);

  return (
    <Container>
      <Box className="positionstatic">
        <Box pt={3.25}>
          <Grid container>
            <Grid xs={12}>
              <h1 variant="body">
                {state.assets + ""}
                Completed Assets
              </h1>
              <Typography className="last-30-days">(last 30 days)</Typography>
            </Grid>
          </Grid>
        </Box>

        {/* current status menu */}
        <Grid
          container
          className="gridcontainer"
          // sx={{
          //   borderBottom: "1px solid",
          //   borderColor: "#a4a4a4",
          //   paddingTop: 2.5,
          // }}
        >
          <Grid item md={1.25} mt={"10px"}>
            <img
              src={HighLogo}
              alt="hp"
              className="logoImage"
              // style={{ marginRight: "4px" }}
            />
            <Typography
              variant="body"
              className="high"
              //className="fontset font12 grey"
              // sx={{ cursor: "pointer" }}
            >
              High priority
            </Typography>
          </Grid>
          <Grid item md={8.05} mt={"10px"}>
            <img
              src={LowLogo}
              alt="lp"
              className="lowimg"
              //className="logoImage1"
              // style={{ marginBottom: "-5px", marginRight: "2px" }}
            />
            <Typography
              className="low"
              //className="fontset font12 grey"
              variant="body"
              // sx={{ cursor: "pointer" }}
            >
              Low priority
            </Typography>
          </Grid>

          <Grid
            item
            md={1.865}
            // sx={{ pt: 1.3, pb: 0.3, pl: 0.5, pr: 0.5, display: "flex" }}
            className="selectButton"
            onClick={handleClick}
          >
            <Typography ml={1.7} className="fontset font14 grey">
              FILTER
            </Typography>
            <img src={img} className="filterimg" />
          </Grid>
          <Grid
            md={0.22}
            className="gridmargin"
            // sx={{
            //   marginTop: "12px",
            //   borderLeft: "1px solid",
            //   height: "16px",
            //   borderColor: "#cecece",
            //   paddingRight: "19px",
            // }}
          ></Grid>
          <Grid
            item
            md={0.6}
            class="gridpadding"
            // sx={{
            //   pt: 1.3,
            //   pb: 0.3,
            //   pr: 0.5,
            //   display: "-webkit-flex",
            // }}
            onClick={handleClickSort}
            className="selectButton"
          >
            <Typography className="fontset font14 grey">SORT</Typography>
            <ExpandMoreIcon
              className="expandIcon"
              // sx={{
              //   color: "#1E70B9",

              //   width: "16px",
              //   height: "16px",
              //   margin: " 0 0 0 4px",
              //   padding: "5px 0 3px 1px",
              //   objectFit: "contain",
              //   marginTop: "-1px",
              // }}
            />
          </Grid>
        </Grid>
      </Box>

      {/* Detail Body */}

      <Box className="pagebody" mt={3.75}>
        <Grid container>
          <Grid
            item
            md={12}
            className="pdBottom"
            //sx={{ paddingBottom: "20px" }}
          >
            <Box
              className="flex"
              // sx={{ display: "flex" }}
            >
              <img src={HighLogo} alt="hp" className="logoImage" />
              <Typography
                pl={0.75}
                className="fontset1 assetlink1 grey1 font121"
                // sx={{
                //   textDecoration: "underline",
                // }}
              >
                Modified Asset Request_FQHC_CHC_BirthdayPostcard_SPA_W123456{" "}
                {">"}
              </Typography>
            </Box>
            <Box
              //className="rectangleCopy"
              sx={{ width: "457px", borderTop: "10px solid #069389" }}
              aria-owns={reqopen ? "mouse-over-popover1" : undefined}
              aria-haspopup="true"
              onMouseEnter={handlePopoverOpen}
              onMouseLeave={handlePopoverClose}
            ></Box>
          </Grid>
          <Grid
            item
            md={12}
            className="pdBottom"
            // sx={{ paddingBottom: "20px" }}
          >
            <Box
              className="flex"
              // sx={{ display: "flex" }}
            >
              <img src={HighLogo} alt="hp" className="logoImage" />
              <Typography
                className="fontset1 assetlink1 grey1 font121"
                pl={0.75}

                // sx={{
                //   textDecoration: "underline",
                // }}
              >
                Modified Assets Request_FQHC_CHC_BirthdayPostcard_SPA_W123456{" "}
                {">"}
              </Typography>
            </Box>
            <Box
              className="rectangleCopy2"
              // sx={{ width: "497px", backgroundColor: "#069389" }}
              aria-owns={reqopen ? "mouse-over-popover1" : undefined}
              aria-haspopup="true"
              onMouseEnter={handlePopoverOpen}
              onMouseLeave={handlePopoverClose}
            ></Box>
          </Grid>
          <Grid
            md={12}
            className="pdBottom"
            // sx={{ paddingBottom: "20px" }}
          >
            <Box
              className="flex"
              // sx={{ display: "flex" }}
            >
              <img src={HighLogo} alt="hp" className="logoImage" />
              <Typography
                className="fontset1 assetlink1 grey1 font121"
                pl={0.75}
                // sx={{
                //   textDecoration: "underline",
                // }}
              >
                Modified Asset Request_FQHC_CHC_BirthdayPostcard_SPA_W123456{" "}
                {">"}
              </Typography>
            </Box>
            <Box
              className="rectangleCopy3"
              // sx={{ width: "497px", backgroundColor: "#069389" }}
              aria-owns={reqopen ? "mouse-over-popover1" : undefined}
              aria-haspopup="true"
              onMouseEnter={handlePopoverOpen}
              onMouseLeave={handlePopoverClose}
            ></Box>
          </Grid>
          <Grid
            md={12}
            className="pdBottom"
            // sx={{ paddingBottom: "20px" }}
          >
            <Box className="flex" sx={{ display: "flex" }}>
              <img src={HighLogo} alt="hp" className="logoImage" />
              <Typography
                className="fontset1 assetlink1 grey1 font121"
                pl={0.75}
                // sx={{
                //   textDecoration: "underline",
                // }}
              >
                Modified Asset Request_FQHC_CHC_BirthdayPostcard_SPA_W123456{" "}
                {">"}
              </Typography>
            </Box>
            <Box
              className="rectangleCopy4"
              // sx={{ width: "527px", backgroundColor: "#069389" }}
              aria-owns={reqopen ? "mouse-over-popover1" : undefined}
              aria-haspopup="true"
              onMouseEnter={handlePopoverOpen}
              onMouseLeave={handlePopoverClose}
            ></Box>
          </Grid>
          <Grid
            md={12}
            className="pdBottom"
            // sx={{ paddingBottom: "20px" }}
          >
            <Box
              className="flex"
              // sx={{ display: "flex" }}
            >
              <img src={HighLogo} alt="hp" className="logoImage" />
              <Typography
                className="fontset1 assetlink1 grey1 font121"
                pl={0.75}
                // sx={{
                //   textDecoration: "underline",
                // }}
              >
                Modified Asset Request_FQHC_CHC_BirthdayPostcard_SPA_W123456{" "}
                {">"}
              </Typography>
            </Box>
            <Box
              className="rectangleCopy5"
              // sx={{ width: "677px", backgroundColor: "#069389" }}
              aria-owns={reqopen ? "mouse-over-popover1" : undefined}
              aria-haspopup="true"
              onMouseEnter={handlePopoverOpen}
              onMouseLeave={handlePopoverClose}
            ></Box>
          </Grid>
          <Grid
            md={12}
            className="pdBottom"
            // sx={{ paddingBottom: "20px" }}
          >
            <Box
              className="flex"
              // sx={{ display: "flex" }}
            >
              <img src={HighLogo} alt="hp" className="logoImage" />
              <Typography
                className="fontset1 assetlink1 grey1 font121"
                pl={0.75}
                // sx={{
                //   textDecoration: "underline",
                // }}
              >
                Modified Asset Request_FQHC_CHC_BirthdayPostcard_SPA_W123456{" "}
                {">"}
              </Typography>
            </Box>
            <Box
              className="rectangleCopy6"
              //sx={{ width: "557px", backgroundColor: "#069389" }}
              aria-owns={reqopen ? "mouse-over-popover1" : undefined}
              aria-haspopup="true"
              onMouseEnter={handlePopoverOpen}
              onMouseLeave={handlePopoverClose}
            ></Box>
          </Grid>
          <Grid
            md={12}
            className="pdBottom"
            // sx={{ paddingBottom: "20px" }}
          >
            <Box
              className="flex"
              // sx={{ display: "flex" }}
            >
              <img src={HighLogo} alt="hp" className="logoImage" />
              <Typography
                className="fontset1 assetlink1 grey1 font121"
                pl={0.75}
                // sx={{
                //   textDecoration: "underline",
                // }}
              >
                Modified Asset Request_FQHC_CHC_BirthdayPostcard_SPA_W123456{" "}
                {">"}
              </Typography>
            </Box>
            <Box
              className="rectangleCopy7"
              // sx={{ width: "477px", backgroundColor: "#069389" }}
              aria-owns={reqopen ? "mouse-over-popover1" : undefined}
              aria-haspopup="true"
              onMouseEnter={handlePopoverOpen}
              onMouseLeave={handlePopoverClose}
            ></Box>
          </Grid>
          <Grid
            md={12}
            className="pdBottom"
            //sx={{ paddingBottom: "20px" }}
          >
            <Box
              className="flex"
              //</Grid>sx={{ display: "flex" }}
            >
              <img src={HighLogo} alt="hp" className="logoImage" />
              <Typography
                className="fontset1 assetlink1 grey1 font121"
                pl={0.75}
                // sx={{
                //   textDecoration: "underline",
                // }}
              >
                Modified Asset Request_FQHC_CHC_BirthdayPostcard_SPA_W123456{" "}
                {">"}
              </Typography>
            </Box>
            <Box
              className="rectangleCopy8"
              // sx={{ width: "297px", backgroundColor: "#069389" }}
              aria-owns={reqopen ? "mouse-over-popover1" : undefined}
              aria-haspopup="true"
              onMouseEnter={handlePopoverOpen}
              onMouseLeave={handlePopoverClose}
            ></Box>
          </Grid>
          <Grid
            md={12}
            className="pdBottom"
            //sx={{ paddingBottom: "20px" }}
          >
            <Box
              className="flex"
              //</Grid>sx={{ display: "flex" }}
            >
              <img src={HighLogo} alt="hp" className="logoImage" />
              <Typography
                className="fontset1 assetlink1 grey1 font121"
                pl={0.75}
                // sx={{
                //   textDecoration: "underline",
                // }}
              >
                Modified Asset Request_FQHC_CHC_BirthdayPostcard_SPA_W123456{" "}
                {">"}
              </Typography>
            </Box>
            <Box
              className="rectangleCopy9"
              // sx={{ width: "197px", backgroundColor: "#069389" }}
              aria-owns={reqopen ? "mouse-over-popover1" : undefined}
              aria-haspopup="true"
              onMouseEnter={handlePopoverOpen}
              onMouseLeave={handlePopoverClose}
            ></Box>
          </Grid>
          <Grid
            md={12}
            className="pdBottom"
            //sx={{ paddingBottom: "20px" }}
          >
            <Box
              className="flex"
              //</Grid>sx={{ display: "flex" }}
            >
              <img src={HighLogo} alt="hp" className="logoImage" />
              <Typography
                className="fontset1 assetlink1 grey1 font121"
                pl={0.75}
                // sx={{
                //   textDecoration: "underline",
                // }}
              >
                Modified Asset Request_FQHC_CHC_BirthdayPostcard_SPA_W123456{" "}
                {">"}
              </Typography>
            </Box>
            <Box
              className="rectangleCopy10"
              // sx={{ width: "397px", backgroundColor: "#069389" }}
              aria-owns={reqopen ? "mouse-over-popover1" : undefined}
              aria-haspopup="true"
              onMouseEnter={handlePopoverOpen}
              onMouseLeave={handlePopoverClose}
            ></Box>
          </Grid>
          <Grid
            md={12}
            className="pdBottom"
            // sx={{ paddingBottom: "20px" }}
          >
            <Box
              className="flex"
              //sx={{ display: "flex" }}
            >
              <img src={HighLogo} alt="hp" className="logoImage" />
              <Typography
                className="fontset1 assetlink1 grey1 font121"
                pl={0.75}
                // sx={{
                //   textDecoration: "underline",
                // }}
              >
                Modified Asset Request_FQHC_CHC_BirthdayPostcard_SPA_W123456{" "}
                {">"}
              </Typography>
            </Box>
            <Box
              className="rectangleCopy11"
              // sx={{ width: "697px", backgroundColor: "#069389" }}
              aria-owns={reqopen ? "mouse-over-popover1" : undefined}
              aria-haspopup="true"
              onMouseEnter={handlePopoverOpen}
              onMouseLeave={handlePopoverClose}
            ></Box>
          </Grid>
          <Grid
            md={12}
            className="pdBottom"
            //sx={{ paddingBottom: "20px" }}
          >
            <Box
              className="flex"
              //sx={{ display: "flex" }}
            >
              <img src={HighLogo} alt="hp" className="logoImage" />
              <Typography
                className="fontset1 assetlink1 grey1 font121"
                pl={0.75}
                // sx={{
                //   textDecoration: "underline",
                // }}
              >
                Modified Asset Request_FQHC_CHC_BirthdayPostcard_SPA_W123456{" "}
                {">"}
              </Typography>
            </Box>
            <Box
              className="rectangleCopy11"
              // sx={{ width: "427px", backgroundColor: "#069389" }}
              aria-owns={reqopen ? "mouse-over-popover1" : undefined}
              aria-haspopup="true"
              onMouseEnter={handlePopoverOpen}
              onMouseLeave={handlePopoverClose}
            ></Box>
          </Grid>
          <Grid
            md={12}
            className="pdBottom"
            //sx={{ paddingBottom: "20px" }}
          >
            <Box
              className="flex"
              //sx={{ display: "flex" }}
            >
              <img src={HighLogo} alt="hp" className="logoImage" />
              <Typography
                className="fontset1 assetlink1 grey1 font121"
                pl={0.75}
                // sx={{
                //   textDecoration: "underline",
                // }}
              >
                Modified Asset Request_FQHC_CHC_BirthdayPostcard_SPA_W123456{" "}
                {">"}
              </Typography>
            </Box>
            <Box
              className="rectangleCopy2"
              //sx={{ width: "497px", backgroundColor: "#069389" }}
              aria-owns={reqopen ? "mouse-over-popover1" : undefined}
              aria-haspopup="true"
              onMouseEnter={handlePopoverOpen}
              onMouseLeave={handlePopoverClose}
            ></Box>
          </Grid>
        </Grid>
      </Box>

      <Grid container>
        <Grid
          item
          md={2.43}
          mt={4}
          className="gridcontainer"
          // sx={{
          //   borderRight: " 1px solid",
          //   borderColor: "#BEBEBE",
          //   height: "4px",
          // }}
        ></Grid>
        <Grid
          item
          md={1.994}
          mt={4}
          className="gridcontainer"
          // sx={{
          //   borderRight: " 1px solid",
          //   borderColor: "#BEBEBE",
          //   height: "4px",
          // }}
        ></Grid>
        <Grid
          item
          md={2}
          mt={4}
          className="gridcontainer"
          // sx={{
          //   borderRight: " 1px solid",
          //   borderColor: "#BEBEBE",
          //   height: "4px",
          // }}
        ></Grid>
        <Grid item md={12} sx={{ borderTop: 1, borderColor: "#4a4a4a" }}>
          <Grid container>
            <Grid item md={2.152}></Grid>
            <Grid item md={1} pt={"9px"}>
              <Typography
                className="fontset grey"
                // sx={{
                //   fontSize: "14px",
                //   letterSpacing: "-0.3px",
                // }}
              >
                20 days
              </Typography>
            </Grid>
            <Grid item md={1} pt={"9px"}></Grid>
            <Grid item md={1} pt={"9px"}>
              <Typography
                className="fontset grey"
                // sx={{
                //   fontSize: "14px",
                //   letterSpacing: "-0.3px",
                // }}
              >
                40 days
              </Typography>
            </Grid>
            <Grid item md={1} pt={"9px"}></Grid>
            <Grid item md={1} pt={"9px"}>
              <Typography
                className="fontset grey"
                // sx={{
                //   fontSize: "14px",
                //   letterSpacing: "-0.3px",
                // }}
              >
                60 days+
              </Typography>
            </Grid>
            <Grid md={10.5} pt={"19px"}>
              {" "}
              <Typography
                // sx={{
                //   lineHeight: "16px",
                // }}
                className="All-assets-are-uniq"
              >
                *All assets are unique. Typical durations are based on past
                projects and may not apply to yours.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Popover
        id="mouse-over-popover1"
        sx={{
          pointerEvents: "none",
        }}
        open={open}
        anchorEl={state.anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "left",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Grid container className="bubblegrid">
          <Grid item md={12}>
            <Typography
              className="MAR_FQHC_CHC_Birthda"
              // sx={{
              //   lineHeight: "16px",
              //   letterSpacing: "-0.17px",
              //   fontSize: "10px",
              // }}
            >
              MAR_FQHC_CHC_BirthdayPostcard_SPA_W123456
            </Typography>
          </Grid>
          <Grid
            item
            className="gridcolor"
            md={4}
            //sx={{ borderTop: 2, borderColor: "#6cace4" }}
          ></Grid>
          <Grid item md={8}></Grid>
          <Grid item md={12}>
            <Typography
              className="Today-64-days"
              //className="fontset purple font12"
              // sx={{
              //   lineHeight: "14px",
              //   letterSpacing: "-0.17px",
              // }}
            >
              Today: 64 days
            </Typography>
          </Grid>
        </Grid>
      </Popover>
      {/* Requset Type Popover */}
      <Popover
        id="popoverBorder"
        open={reqopen}
        anchorEl={state.reqanchorEl}
        onClose={handleClosereq}
        transitionDuration={1}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Box className="reqTypeBox">
          <Grid container className="reqContainer">
            <Grid item md={5.5}>
              <Button
                onClick={handleClosereq}
                className="gridButton"
                // sx={{
                //   zIndex: 1,
                //   marginTop: "-54px",
                //   marginLeft: "3px",
                //   height: "20px",
                //   width: "153px",
                //   "&:hover": {
                //     background: "transparent",
                //   },
                // }}
                disableRipple
              >
                <Typography
                  // mr={0.5}
                  className="fontset font14 grey"
                >
                  REQUEST TYPE
                </Typography>
                <ExpandLessIcon
                  className="expanicon"
                  //sx={{ color: "#1E70B9", marginTop: "-1px" }}
                />
              </Button>
            </Grid>
            <Grid item md={1.9}></Grid>
            <Grid item md={4.1}>
              <Button className="underlined">Clear All</Button>
            </Grid>
            <Grid item md={12} mb={3}>
              <FormGroup>
                <FormControlLabel
                  classes={{
                    label: "checklabels",
                  }}
                  sx={{ pt: 0.8, pl: 2.75 }}
                  control={
                    <Checkbox
                      icon={
                        <CheckBoxOutlineBlankSharpIcon
                          className="checkboxsharp"
                          // sx={{
                          //   width: "16px",
                          //   height: "16px",
                          //   color: "#216FB4",
                          // }}
                        />
                      }
                      checkedIcon={
                        <CheckBoxSharpIcon
                        // sx={{
                        //   width: "16px",
                        //   height: "16px",
                        //   color: "#216FB4",
                        // }}
                        />
                      }
                    />
                  }
                  label="New Asset Request"
                />
              </FormGroup>
              <FormGroup>
                <FormControlLabel
                  classes={{
                    label: "checklabels",
                  }}
                  sx={{ pt: 0.8, pl: 2.75 }}
                  control={
                    <Checkbox
                      icon={
                        <CheckBoxOutlineBlankSharpIcon
                        // sx={{
                        //   width: "16px",
                        //   height: "16px",
                        //   color: "#216FB4",
                        // }}
                        />
                      }
                      checkedIcon={
                        <CheckBoxSharpIcon
                        // sx={{
                        //   width: "16px",
                        //   height: "16px",
                        //   color: "#216FB4",
                        // }}
                        />
                      }
                    />
                  }
                  label="Modified Asset Request"
                />
              </FormGroup>
              <FormGroup>
                <FormControlLabel
                  classes={{
                    label: "checklabels",
                  }}
                  sx={{ pt: 0.8, pl: 2.75 }}
                  control={
                    <Checkbox
                      icon={
                        <CheckBoxOutlineBlankSharpIcon
                        // sx={{
                        //   width: "16px",
                        //   height: "16px",
                        //   color: "#216FB4",
                        // }}
                        />
                      }
                      checkedIcon={
                        <CheckBoxSharpIcon
                        // sx={{
                        //   width: "16px",
                        //   height: "16px",
                        //   color: "#216FB4",
                        // }}
                        />
                      }
                    />
                  }
                  label="Spanish Review or Translation"
                />
              </FormGroup>
              <FormGroup>
                <FormControlLabel
                  classes={{
                    label: "checklabels",
                  }}
                  sx={{ pt: 0.8, pl: 2.75 }}
                  control={
                    <Checkbox
                      icon={
                        <CheckBoxOutlineBlankSharpIcon
                        // sx={{
                        //   width: "16px",
                        //   height: "16px",
                        //   color: "#216FB4",
                        // }}
                        />
                      }
                      checkedIcon={
                        <CheckBoxSharpIcon
                        // sx={{
                        //   width: "16px",
                        //   height: "16px",
                        //   color: "#216FB4",
                        // }}
                        />
                      }
                    />
                  }
                  label="Testimonial"
                />
              </FormGroup>
              <FormGroup>
                <FormControlLabel
                  classes={{
                    label: "checklabels",
                  }}
                  sx={{ pt: 0.8, pl: 2.75 }}
                  control={
                    <Checkbox
                      icon={
                        <CheckBoxOutlineBlankSharpIcon
                        // sx={{
                        //   width: "16px",
                        //   height: "16px",
                        //   color: "#216FB4",
                        // }}
                        />
                      }
                      checkedIcon={
                        <CheckBoxSharpIcon
                        // sx={{
                        //   width: "16px",
                        //   height: "16px",
                        //   color: "#216FB4",
                        // }}
                        />
                      }
                    />
                  }
                  label="Logos and Lockups"
                />
              </FormGroup>
              <FormGroup>
                <FormControlLabel
                  classes={{
                    label: "checklabels",
                  }}
                  sx={{ pt: 0.8, pl: 2.75 }}
                  control={
                    <Checkbox
                      icon={
                        <CheckBoxOutlineBlankSharpIcon
                        // sx={{
                        //   width: "16px",
                        //   height: "16px",
                        //   color: "#216FB4",
                        // }}
                        />
                      }
                      checkedIcon={
                        <CheckBoxSharpIcon
                        // sx={{
                        //   width: "16px",
                        //   height: "16px",
                        //   color: "#216FB4",
                        // }}
                        />
                      }
                    />
                  }
                  label="Partner Spotlight"
                />
              </FormGroup>
            </Grid>{" "}
          </Grid>
        </Box>
      </Popover>
      {/* Sort Popover */}
      <Popover
        id="sortPopover"
        open={sortOpen}
        transitionDuration={1}
        anchorEl={state.sortAnchorEl}
        onClose={handleCloseSort}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Box className="popperbox">
          {" "}
          <Grid container className="poppercontainer">
            {" "}
            <Grid item md={7}></Grid>{" "}
            <Grid item md={5}>
              {" "}
              <Button
                onClick={handleCloseSort}
                className="closeSort"
                // sx={{
                //   zIndex: 1,
                //   marginTop: "-53px",
                //   marginLeft: "0.8px",
                //   height: "20px",
                //   "&:hover": {
                //     background: "transparent",
                //   },
                // }}
                disableRipple
              >
                <Typography mr={0.5} className="Sort">
                  SORT
                </Typography>
                <ExpandLessIcon
                  className="setexpand"
                  sx={{
                    color: "#1E70B9",

                    width: "16px",
                    height: "16px",
                    margin: " 0 0 0 4px",
                    padding: "5px 0 3px 1px",
                    objectFit: "contain",
                    marginTop: "-1px",
                  }}
                />
              </Button>
            </Grid>{" "}
            <Grid
              item
              md={12}
              mb={2}
              className="newgrid"
              // sx={{ marginTop: "-20px", zIndex: 2 }}
            >
              <FormGroup>
                <FormControlLabel
                  classes={{
                    label: "checklabels",
                  }}
                  sx={{ pt: 2.95, ml: "10px", pr: 2.95 }}
                  control={
                    <Checkbox
                      icon={
                        <CheckBoxOutlineBlankSharpIcon
                          className="checkboxsharp"
                          // sx={{
                          //   width: "16px",
                          //   height: "16px",
                          //   color: "#216FB4",
                          // }}
                        />
                      }
                      checkedIcon={
                        <CheckBoxSharpIcon
                          className="checkboxsharp"
                          // sx={{
                          //   width: "16px",
                          //   height: "16px",
                          //   color: "#216FB4",
                          // }}
                        />
                      }
                    />
                  }
                  label="Newest Requests"
                />
              </FormGroup>

              <FormGroup>
                <FormControlLabel
                  classes={{
                    label: "checklabels",
                  }}
                  sx={{ pt: 0.8, ml: "10px", pr: 1 }}
                  control={
                    <Checkbox
                      icon={
                        <CheckBoxOutlineBlankSharpIcon
                          className="checkboxsharp"
                          // sx={{
                          //   width: "16px",
                          //   height: "16px",
                          //   color: "#216FB4",
                          // }}
                        />
                      }
                      checkedIcon={
                        <CheckBoxSharpIcon
                          className="checkboxsharp"
                          // sx={{
                          //   width: "16px",
                          //   height: "16px",
                          //   color: "#216FB4",
                          // }}
                        />
                      }
                    />
                  }
                  label="Oldest Requests"
                />
              </FormGroup>
              <FormGroup>
                <FormControlLabel
                  classes={{
                    label: "checklabels",
                  }}
                  sx={{ pt: 0.8, ml: "10px", pr: 1 }}
                  control={
                    <Checkbox
                      icon={
                        <CheckBoxOutlineBlankSharpIcon
                          className="checkboxsharp"
                          // sx={{
                          //   width: "16px",
                          //   height: "16px",
                          //   color: "#216FB4",
                          // }}
                        />
                      }
                      checkedIcon={
                        <CheckBoxSharpIcon
                          className="checkboxsharp"
                          // sx={{
                          //   width: "16px",
                          //   height: "16px",
                          //   color: "#216FB4",
                          // }}
                        />
                      }
                    />
                  }
                  label="High Priority"
                />
              </FormGroup>
              <FormGroup>
                <FormControlLabel
                  classes={{
                    label: "checklabels",
                  }}
                  sx={{ pt: 0.8, ml: "10px", pr: 1 }}
                  control={
                    <Checkbox
                      icon={
                        <CheckBoxOutlineBlankSharpIcon
                          className="checkboxsharp"
                          // sx={{
                          //   width: "16px",
                          //   height: "16px",
                          //   color: "#216FB4",
                          // }}
                        />
                      }
                      checkedIcon={
                        <CheckBoxSharpIcon
                          className="checkboxsharp"
                          // sx={{
                          //   width: "16px",
                          //   height: "16px",
                          //   color: "#216FB4",
                          // }}
                        />
                      }
                    />
                  }
                  label="Low Priority"
                />
              </FormGroup>
            </Grid>
          </Grid>
        </Box>
      </Popover>
      <Footer />
    </Container>
  );
}

export default Completedassets;
