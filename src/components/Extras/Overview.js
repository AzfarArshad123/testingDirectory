import { useState, useRef } from "react";
import FilterImage from "../filter.webp";
import HighLogo from "images/logos/High.webp";
import LowLogo from "images/logos/Low.webp";
import {
  Container,
  Box,
  Typography,
  Grid,
  Dialog,
  DialogTitle,
  IconButton,
  DialogContent,
  DialogActions,
  Button,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Popover,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CircleIcon from "@mui/icons-material/Circle";
import CloseIcon from "@mui/icons-material/Close";
import CheckBoxOutlineBlankSharpIcon from "@mui/icons-material/CheckBoxOutlineBlankSharp";
import CheckBoxSharpIcon from "@mui/icons-material/CheckBoxSharp";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
function Overview() {
  // constructor(props) {
  //   super(props);
  //   state = {
  //     assets: 24,
  //     open: false,
  //     anchorEl: null,
  //     sortAnchorEl: null,
  //     hovAnchorEl: null,
  //   };
  //   myRef = React.createRef(null);
  // }
  const myRef = useRef(null);
  const [state, setState] = useState({
    assets: 24,
    open: false,
    anchorEl: null,
    sortAnchorEl: null,
    hovAnchorEl: null,
  });

  const handleClickOpen = () => {
    setState({ open: true });
  };

  const handleClose = () => {
    setState({ open: false });
  };
  const handleClick = (event) => {
    setState({ anchorEl: event.currentTarget });
  };
  const handleClose1 = () => {
    setState({ anchorEl: null });
  };
  const handleClickFocus = () => {
    myRef.current.focus();
  };
  const handleClickSort = (event) => {
    setState({ sortAnchorEl: event.currentTarget });
  };
  const handleCloseSort = () => {
    setState({ sortAnchorEl: null });
  };
  const handleHoverPopoverOpen = (event) => {
    setState({ hovAnchorEl: event.currentTarget });
  };
  const handleHoverPopoverClose = () => {
    setState({ hovAnchorEl: null });
  };

  const searchOpen = Boolean(state.anchorEl);
  const open = Boolean(state.sortAnchorEl);
  const hovopen = Boolean(state.hovAnchorEl);
  return (
    <Container>
      <Box className="positionstatic">
        <Box pt={3.25}>
          <Grid container>
            <Grid md={7.195} xs={12}>
              <Typography
                className="assetsHeading gBlack grey font30"
                variant="body"
              >
                {state.assets + " "}
                Active Assets
              </Typography>
            </Grid>
            <Grid item className="gridCol" pt={1.4} md={0.87} xs={12} pr={0.25}>
              <CircleIcon
                className="cOrange"
                sx={{
                  width: "10px !important",
                  height: "10px !important",
                  margin: "3px 4px 3px 20px !important",
                  color: "#ffdd7f !important",
                }}
                // sx={{
                //   width: "13px",
                //   height: "13px",
                //   paddingTop: "3.5px",
                //   marginRight: "4px",
                // }}
              />
              <Typography className="fontset grey font14" pr={2.5}>
                Intake
              </Typography>
            </Grid>
            <Grid
              item
              className="gridCol"
              pt={1.4}
              md={1.585}
              xs={12}
              pr={0.25}
            >
              <CircleIcon
                className="cIcon"
                // sx={{
                //   width: "13px",
                //   height: "13px",
                //   color: "#FFDC7B",
                //   paddingTop: "3.5px",
                //   marginRight: "4px",
                // }}
              />
              <Typography className="fontset grey font14" pr={2.5}>
                Under Approval
              </Typography>
            </Grid>
            <Grid item className="gridCol" pt={1.4} md={1.41} xs={12} pr={0.25}>
              <CircleIcon
                className="cIcon1"
                // sx={{
                //   width: "13px",
                //   height: "13px",
                //   color: "#C9DB85",
                //   paddingTop: "3.5px",
                //   marginRight: "4px",
                // }}
              />
              <Typography className="fontset grey font14" pr={2.5}>
                In Production
              </Typography>
            </Grid>
            <Grid item className="gridCol" pt={1.4} md={0.94} xs={12}>
              <CircleIcon
                className="cIcon2"
                // sx={{
                //   width: "13px",
                //   height: "13px",
                //   color: "#7AC79D",
                //   paddingTop: "3.5px",
                //   marginRight: "4px",
                // }}
              />
              <Typography className="fontset grey font14">
                Prep Final
              </Typography>
            </Grid>
          </Grid>
        </Box>
        {/* current status menu */}
        <Grid
          container
          className="gridcol"
          pt={2.4375}
          // sx={{ borderBottom: "1px solid", borderColor: "#cecece" }}
        >
          <Grid item md={2.5} xs={12} pt={"11.5px"}>
            <Typography
              variant="h7"
              // sx={{
              //   paddingRight: "110px",
              // }}
              className="gBold font14 grey"
            >
              CURRENT STATUS
            </Typography>
          </Grid>
          <Grid item md={0.2} pt={"10px"} sx={{ cursor: "pointer" }}>
            <img src={HighLogo} alt="hp" className="logoImage" />
          </Grid>
          <Grid item md={1} pt={"10px"}>
            <Typography
              variant="body"
              className="fontset font12 grey"
              pr={2.5}
              // sx={{ cursor: "pointer" }}
            >
              High Priority
            </Typography>
          </Grid>
          <Grid item md={0.2} pt={"12px"} sx={{ cursor: "pointer" }}>
            <img src={LowLogo} alt="lp" className="logoImage" />
          </Grid>
          <Grid item md={1} pt={"10px"}>
            <Typography
              // sx={{ cursor: "pointer" }}
              className="fontset grey font12"
              variant="body"
              pr={2.5}
            >
              Low Priority
            </Typography>
          </Grid>
          <Grid item md={4.8}></Grid>
          <Grid
            item
            md={1.37}
            // sx={{ display: "flex" }}
            className="selectButton"
            onClick={handleClickOpen}
          >
            <Box
              className="bBlue"
              // sx={{
              //   height: "30px",
              //   width: "30px",
              //   borderRadius: "50%",
              //   textAlign: "center",
              //   color: "white !important",
              // }}
              ml={1}
              mt={0.25}
            >
              <Typography
                className="fontset1 font1"
                // sx={{
                //   color: "#F5FFFF",
                //   marginTop: "6px",
                //   marginLeft: "1.8px",
                // }}
              >
                10+
              </Typography>
            </Box>
            <Typography className="fontset font14 grey" ml={0.5} mt={"10px"}>
              FILTER
            </Typography>

            <img
              src={FilterImage}
              alt="Filter"
              className="filterImage"
              // style={{ marginTop: "12px", paddingRight: "20px" }}
            />
          </Grid>
          <Grid
            className="gridmargin"
            md={0.22}
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
            md={0.7}
            sx={{
              pt: 1.3,
              pb: 0.3,
              pl: 0.5,
              pr: 0.5,
              display: "-webkit-flex",
            }}
            onClick={handleClickSort}
            className="selectButton"
          >
            <Typography className="fontset grey font14">SORT</Typography>
            <ExpandMoreIcon
              className="expandmicon"
              // sx={{
              //   color: "#1E70B9",
              //   marginTop: "-2.5px",
              //   display: "block",
              //   paddingRight: "7px",
              // }}
            />
          </Grid>
        </Grid>
      </Box>
      {/* Filter Modal */}
      <Dialog
        className="dialogs"
        open={state.open}
        onClose={handleClose}
        maxWidth={"md"}
        fullWidth={true}
        scroll={"paper"}
        id="filterDialog"
        // sx={{ borderRadius: "50px" }}
      >
        <DialogTitle>
          <Grid container>
            <Grid item md={11.6} sx={{ textAlign: "center" }}>
              <Typography className="gBold grey font14" pt={0.4}>
                FILTER
              </Typography>
            </Grid>
            <Grid item md={0.4}>
              <IconButton onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </Grid>
            <Grid
              className="gridbottom"
              item
              md={12}
              mt={0.5}
              // sx={{ borderBottom: 1, borderColor: "#4a4a4a" }}
            ></Grid>
          </Grid>
        </DialogTitle>
        <DialogContent>
          <Grid
            className="griddivider"
            container
            mt={3}
            // sx={{ borderBottom: 1, borderColor: "divider" }}
          >
            <Grid md={12} mb={1.5}>
              <Typography className="gBold grey font16">Status</Typography>
            </Grid>
            <Grid item md={6} sx={{ display: "flex" }} mb={1.5}>
              <FormGroup>
                <FormControlLabel
                  className="filtercheck"
                  classes={{
                    label: "checklabels",
                  }}
                  control={
                    <Checkbox
                      icon={
                        <CheckBoxOutlineBlankSharpIcon
                          className="csharpIc"
                          // sx={{
                          //   width: "16px",
                          //   height: "16px",
                          //   color: "#216FB4",
                          // }}
                        />
                      }
                      checkedIcon={
                        <CheckBoxSharpIcon
                          className="csharpIc"
                          // sx={{
                          //   width: "16px",
                          //   height: "16px",
                          //   color: "#216FB4",
                          // }}
                        />
                      }
                    />
                  }
                  label="Request Intake"
                />
              </FormGroup>
            </Grid>

            <Grid item md={6} sx={{ display: "flex" }} mb={1.5}>
              <FormGroup>
                <FormControlLabel
                  className="filtercheck"
                  classes={{
                    label: "checklabels",
                  }}
                  control={
                    <Checkbox
                      icon={
                        <CheckBoxOutlineBlankSharpIcon
                          className="csharpIc"
                          // sx={{
                          //   width: "16px",
                          //   height: "16px",
                          //   color: "#216FB4",
                          // }}
                        />
                      }
                      checkedIcon={
                        <CheckBoxSharpIcon
                          className="csharpIc"
                          // sx={{
                          //   width: "16px",
                          //   height: "16px",
                          //   color: "#216FB4",
                          // }}
                        />
                      }
                    />
                  }
                  label="Request Under Approval"
                />
              </FormGroup>
            </Grid>

            <Grid item md={6} sx={{ display: "flex" }} mb={1.5}>
              <FormGroup>
                <FormControlLabel
                  className="filtercheck"
                  classes={{
                    label: "checklabels",
                  }}
                  control={
                    <Checkbox
                      icon={
                        <CheckBoxOutlineBlankSharpIcon
                          className="csharpIc"
                          // sx={{
                          //   width: "16px",
                          //   height: "16px",
                          //   color: "#216FB4",
                          // }}
                        />
                      }
                      checkedIcon={
                        <CheckBoxSharpIcon
                          className="csharpIc"
                          // sx={{
                          //   width: "16px",
                          //   height: "16px",
                          //   color: "#216FB4",
                          // }}
                        />
                      }
                    />
                  }
                  label="Request Intake"
                />
              </FormGroup>
            </Grid>

            <Grid item md={6} sx={{ display: "flex" }} mb={1.5}>
              <FormGroup>
                <FormControlLabel
                  className="filtercheck"
                  classes={{
                    label: "checklabels",
                  }}
                  control={
                    <Checkbox
                      icon={
                        <CheckBoxOutlineBlankSharpIcon
                          className="csharpIc"
                          // sx={{
                          //   width: "16px",
                          //   height: "16px",
                          //   color: "#216FB4",
                          // }}
                        />
                      }
                      checkedIcon={
                        <CheckBoxSharpIcon
                          className="csharpIc"
                          // sx={{
                          //   width: "16px",
                          //   height: "16px",
                          //   color: "#216FB4",
                          // }}
                        />
                      }
                    />
                  }
                  label="Request Under Approval"
                />
              </FormGroup>
            </Grid>
            <Grid md={12} mb={3}>
              <Button className="underlined viewButton">View All</Button>
            </Grid>
          </Grid>
          <Grid
            className="griddivider"
            container
            mt={3}
            // sx={{ borderBottom: 1, borderColor: "divider" }}
          >
            <Grid md={12} mb={1.5}>
              <Typography className="gBold grey font16">
                Request Type
              </Typography>
            </Grid>
            <Grid
              className="selectButton"
              item
              md={4}
              //sx={{ display: "flex" }}
              mb={1.5}
            >
              <FormGroup>
                <FormControlLabel
                  className="filtercheck"
                  classes={{
                    label: "checklabels",
                  }}
                  control={
                    <Checkbox
                      icon={
                        <CheckBoxOutlineBlankSharpIcon
                          className="csharpIc"
                          // sx={{
                          //   width: "16px",
                          //   height: "16px",
                          //   color: "#216FB4",
                          // }}
                        />
                      }
                      checkedIcon={
                        <CheckBoxSharpIcon
                          className="csharpIc"
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
            </Grid>

            <Grid
              item
              md={4}
              className="selectButton"
              // sx={{ display: "flex" }}
              mb={1.5}
            >
              <FormGroup>
                <FormControlLabel
                  className="filtercheck"
                  classes={{
                    label: "checklabels",
                  }}
                  control={
                    <Checkbox
                      icon={
                        <CheckBoxOutlineBlankSharpIcon
                          className="csharpIc"
                          // sx={{
                          //   width: "16px",
                          //   height: "16px",
                          //   color: "#216FB4",
                          // }}
                        />
                      }
                      checkedIcon={
                        <CheckBoxSharpIcon
                          className="csharpIc"
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
            </Grid>

            <Grid
              item
              md={4}
              className="selectButton"
              //sx={{ display: "flex" }}
              mb={1.5}
            >
              <FormGroup>
                <FormControlLabel
                  className="filtercheck"
                  classes={{
                    label: "checklabels",
                  }}
                  control={
                    <Checkbox
                      icon={
                        <CheckBoxOutlineBlankSharpIcon
                          className="csharpIc"
                          // sx={{
                          //   width: "16px",
                          //   height: "16px",
                          //   color: "#216FB4",
                          // }}
                        />
                      }
                      checkedIcon={
                        <CheckBoxSharpIcon
                          className="csharpIc"
                          // sx={{
                          //   width: "16px",
                          //   height: "16px",
                          //   color: "#216FB4",
                          // }}
                        />
                      }
                    />
                  }
                  label="Spanish Review"
                />
              </FormGroup>
            </Grid>

            <Grid
              item
              md={4}
              className="selectButton"
              //sx={{ display: "flex" }}
              mb={1.5}
            >
              <FormGroup>
                <FormControlLabel
                  className="filtercheck"
                  classes={{
                    label: "checklabels",
                  }}
                  control={
                    <Checkbox
                      icon={
                        <CheckBoxOutlineBlankSharpIcon
                          className="csharpIc"
                          // sx={{
                          //   width: "16px",
                          //   height: "16px",
                          //   color: "#216FB4",
                          // }}
                        />
                      }
                      checkedIcon={
                        <CheckBoxSharpIcon
                          className="csharpIc"
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
            </Grid>
            <Grid
              item
              md={4}
              className="selectButton"
              //sx={{ display: "flex" }}
              mb={1.5}
            >
              <FormGroup>
                <FormControlLabel
                  className="filtercheck"
                  classes={{
                    label: "checklabels",
                  }}
                  control={
                    <Checkbox
                      icon={
                        <CheckBoxOutlineBlankSharpIcon
                          className="csharpIc"
                          // sx={{
                          //   width: "16px",
                          //   height: "16px",
                          //   color: "#216FB4",
                          // }}
                        />
                      }
                      checkedIcon={
                        <CheckBoxSharpIcon
                          className="csharpIc"
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
            </Grid>

            <Grid
              item
              md={4}
              className="selectButton"
              //sx={{ display: "flex" }}
              mb={3}
            >
              <FormGroup>
                <FormControlLabel
                  className="filtercheck"
                  classes={{
                    label: "checklabels",
                  }}
                  control={
                    <Checkbox
                      icon={
                        <CheckBoxOutlineBlankSharpIcon
                          className="csharpIc"
                          // sx={{
                          //   width: "16px",
                          //   height: "16px",
                          //   color: "#216FB4",
                          // }}
                        />
                      }
                      checkedIcon={
                        <CheckBoxSharpIcon
                          className="csharpIc"
                          // sx={{
                          //   width: "16px",
                          //   height: "16px",
                          //   color: "#216FB4",
                          // }}
                        />
                      }
                    />
                  }
                  label="Logos & Lockups"
                />
              </FormGroup>
            </Grid>
          </Grid>
          <Grid
            container
            mt={3}
            className="griddivider"
            //sx={{ borderBottom: 1, borderColor: "divider" }}
          >
            <Grid item md={12} mb={1.5}>
              <Typography className="gBold grey font14">
                Partner, Affiliation or Consortium
              </Typography>
            </Grid>
            <Grid item md={12} mb={2}>
              <Typography className="fontset font12 grey">
                Looking for assets by a particular partner, affiliation, or
                consortium? Use search.
              </Typography>
            </Grid>
            <Grid item md={6} mb={2} onClick={handleClick}>
              <div className="search-box">
                <a className="search-btn">
                  <i>
                    <SearchIcon
                      className="searchHeight"
                      // sx={{ height: "16px", width: "16px" }}
                    />
                  </i>
                </a>
                <input
                  className="search-txt"
                  type="text"
                  name=""
                  placeholder="Search"
                  disabled
                />
              </div>
            </Grid>
            <Grid md={6}></Grid>

            <Grid md={12} mt={2} mb={2}>
              <Typography className="gbItalic font12">
                Commonly Searched
              </Typography>
            </Grid>

            <Grid
              item
              md={4}
              className="selectButton"
              //sx={{ display: "flex" }}
              mb={1.5}
            >
              <FormGroup>
                <FormControlLabel
                  className="filtercheck"
                  classes={{
                    label: "checklabels",
                  }}
                  control={
                    <Checkbox
                      icon={
                        <CheckBoxOutlineBlankSharpIcon
                          className="csharpIc"
                          // sx={{
                          //   width: "16px",
                          //   height: "16px",
                          //   color: "#216FB4",
                          // }}
                        />
                      }
                      checkedIcon={
                        <CheckBoxSharpIcon
                          className="csharpIc"
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
            </Grid>

            <Grid
              item
              md={4}
              className="selectButton"
              //sx={{ display: "flex" }}
              mb={1.5}
            >
              <FormGroup>
                <FormControlLabel
                  className="filtercheck"
                  classes={{
                    label: "checklabels",
                  }}
                  control={
                    <Checkbox
                      icon={
                        <CheckBoxOutlineBlankSharpIcon
                          className="csharpIc"
                          // sx={{
                          //   width: "16px",
                          //   height: "16px",
                          //   color: "#216FB4",
                          // }}
                        />
                      }
                      checkedIcon={
                        <CheckBoxSharpIcon
                          className="csharpIc"
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
            </Grid>

            <Grid
              item
              md={4}
              className="selectButton"
              //sx={{ display: "flex" }}
              mb={1.5}
            >
              <FormGroup>
                <FormControlLabel
                  className="filtercheck"
                  classes={{
                    label: "checklabels",
                  }}
                  control={
                    <Checkbox
                      icon={
                        <CheckBoxOutlineBlankSharpIcon
                          className="csharpIc"
                          // sx={{
                          //   width: "16px",
                          //   height: "16px",
                          //   color: "#216FB4",
                          // }}
                        />
                      }
                      checkedIcon={
                        <CheckBoxSharpIcon
                          className="csharpIc"
                          // sx={{
                          //   width: "16px",
                          //   height: "16px",
                          //   color: "#216FB4",
                          // }}
                        />
                      }
                    />
                  }
                  label="Spanish Review"
                />
              </FormGroup>
            </Grid>

            <Grid
              item
              md={4}
              className="selectButton"
              //sx={{ display: "flex" }}
              mb={1.5}
            >
              <FormGroup>
                <FormControlLabel
                  className="filtercheck"
                  classes={{
                    label: "checklabels",
                  }}
                  control={
                    <Checkbox
                      icon={
                        <CheckBoxOutlineBlankSharpIcon
                          className="csharpIc"
                          // sx={{
                          //   width: "16px",
                          //   height: "16px",
                          //   color: "#216FB4",
                          // }}
                        />
                      }
                      checkedIcon={
                        <CheckBoxSharpIcon
                          className="csharpIc"
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
            </Grid>
            <Grid
              item
              md={4}
              className="selectButton"
              //sx={{ display: "flex" }}
              mb={1.5}
            >
              <FormGroup>
                <FormControlLabel
                  className="filtercheck"
                  classes={{
                    label: "checklabels",
                  }}
                  control={
                    <Checkbox
                      icon={
                        <CheckBoxOutlineBlankSharpIcon
                          className="csharpIc"
                          // sx={{
                          //   width: "16px",
                          //   height: "16px",
                          //   color: "#216FB4",
                          // }}
                        />
                      }
                      checkedIcon={
                        <CheckBoxSharpIcon
                          className="csharpIc"
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
            </Grid>

            <Grid
              item
              md={4}
              className="selectButton"
              //sx={{ display: "flex" }}
              mb={3}
            >
              <FormGroup>
                <FormControlLabel
                  className="filtercheck"
                  classes={{
                    label: "checklabels",
                  }}
                  control={
                    <Checkbox
                      icon={
                        <CheckBoxOutlineBlankSharpIcon
                          className="csharpIc"
                          // sx={{
                          //   width: "16px",
                          //   height: "16px",
                          //   color: "#216FB4",
                          // }}
                        />
                      }
                      checkedIcon={
                        <CheckBoxSharpIcon
                          className="csharpIc"
                          // sx={{
                          //   width: "16px",
                          //   height: "16px",
                          //   color: "#216FB4",
                          // }}
                        />
                      }
                    />
                  }
                  label="Logos & Lockups"
                />
              </FormGroup>
            </Grid>
            <Grid md={12} mb={3}>
              <Button className="underlined viewButton">View All</Button>
            </Grid>
            <Grid
              container
              mt={3}
              className="griddivider"
              //sx={{ borderBottom: 1, borderColor: "divider" }}
            >
              <Grid item md={12} mb={1.5}>
                <Typography className="gBold grey font14">Requester</Typography>
              </Grid>
              <Grid item md={12} mb={2}>
                <Typography className="fontset font12 grey">
                  Looking for assets by a requester? Use search.
                </Typography>
              </Grid>
              <Grid item md={6} mb={2} onClick={handleClick}>
                <div className="search-box">
                  <a className="search-btn">
                    <i>
                      <SearchIcon
                        className="searchHeight"
                        //sx={{ height: "16px", width: "16px" }}
                      />
                    </i>
                  </a>
                  <input
                    className="search-txt"
                    type="text"
                    name=""
                    placeholder="Search"
                    disabled
                  />
                </div>
              </Grid>
              <Grid md={5}></Grid>

              <Grid md={12} mt={2} mb={2}>
                <Typography className="gbItalic font12">
                  Commonly Searched
                </Typography>
              </Grid>
              <Grid
                item
                md={4}
                className="selectButton"
                //sx={{ display: "flex" }}
                mb={1.5}
              >
                <FormGroup>
                  <FormControlLabel
                    className="filtercheck"
                    classes={{
                      label: "checklabels",
                    }}
                    control={
                      <Checkbox
                        icon={
                          <CheckBoxOutlineBlankSharpIcon
                            className="csharpIc"
                            // sx={{
                            //   width: "16px",
                            //   height: "16px",
                            //   color: "#216FB4",
                            // }}
                          />
                        }
                        checkedIcon={
                          <CheckBoxSharpIcon
                            className="csharpIc"
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
              </Grid>

              <Grid
                item
                md={4}
                className="selectButton"
                //sx={{ display: "flex" }}
                mb={1.5}
              >
                <FormGroup>
                  <FormControlLabel
                    className="filtercheck"
                    classes={{
                      label: "checklabels",
                    }}
                    control={
                      <Checkbox
                        icon={
                          <CheckBoxOutlineBlankSharpIcon
                            className="csharpIc"
                            // sx={{
                            //   width: "16px",
                            //   height: "16px",
                            //   color: "#216FB4",
                            // }}
                          />
                        }
                        checkedIcon={
                          <CheckBoxSharpIcon
                            className="csharpIc"
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
              </Grid>

              <Grid
                item
                md={4}
                className="selectButton"
                //sx={{ display: "flex" }}
                mb={1.5}
              >
                <FormGroup>
                  <FormControlLabel
                    className="filtercheck"
                    classes={{
                      label: "checklabels",
                    }}
                    control={
                      <Checkbox
                        icon={
                          <CheckBoxOutlineBlankSharpIcon
                            className="csharpIc"
                            // sx={{
                            //   width: "16px",
                            //   height: "16px",
                            //   color: "#216FB4",
                            // }}
                          />
                        }
                        checkedIcon={
                          <CheckBoxSharpIcon
                            className="csharpIc"
                            // sx={{
                            //   width: "16px",
                            //   height: "16px",
                            //   color: "#216FB4",
                            // }}
                          />
                        }
                      />
                    }
                    label="Spanish Review"
                  />
                </FormGroup>
              </Grid>

              <Grid
                item
                md={4}
                className="selectButton"
                //sx={{ display: "flex" }}
                mb={1.5}
              >
                <FormGroup>
                  <FormControlLabel
                    className="filtercheck"
                    classes={{
                      label: "checklabels",
                    }}
                    control={
                      <Checkbox
                        icon={
                          <CheckBoxOutlineBlankSharpIcon
                            className="csharpIc"
                            // sx={{
                            //   width: "16px",
                            //   height: "16px",
                            //   color: "#216FB4",
                            // }}
                          />
                        }
                        checkedIcon={
                          <CheckBoxSharpIcon
                            className="csharpIc"
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
              </Grid>
              <Grid
                item
                md={4}
                className="selectButton"
                //sx={{ display: "flex" }}
                mb={1.5}
              >
                <FormGroup>
                  <FormControlLabel
                    className="filtercheck"
                    classes={{
                      label: "checklabels",
                    }}
                    control={
                      <Checkbox
                        icon={
                          <CheckBoxOutlineBlankSharpIcon
                            className="csharpIc"
                            // sx={{
                            //   width: "16px",
                            //   height: "16px",
                            //   color: "#216FB4",
                            // }}
                          />
                        }
                        checkedIcon={
                          <CheckBoxSharpIcon
                            className="csharpIc"
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
              </Grid>

              <Grid
                item
                md={4}
                className="selectButton"
                //sx={{ display: "flex" }}
                mb={3}
              >
                <FormGroup>
                  <FormControlLabel
                    className="filtercheck"
                    classes={{
                      label: "checklabels",
                    }}
                    control={
                      <Checkbox
                        icon={
                          <CheckBoxOutlineBlankSharpIcon
                            className="csharpIc"
                            // sx={{
                            //   width: "16px",
                            //   height: "16px",
                            //   color: "#216FB4",
                            // }}
                          />
                        }
                        checkedIcon={
                          <CheckBoxSharpIcon
                            className="csharpIc"
                            // sx={{
                            //   width: "16px",
                            //   height: "16px",
                            //   color: "#216FB4",
                            // }}
                          />
                        }
                      />
                    }
                    label="Logos & Lockups"
                  />
                </FormGroup>
              </Grid>

              <Grid md={12} mb={3}>
                <Button className="underlined viewButton">View All</Button>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Grid
            container
            className="griddivider"
            //sx={{ borderTop: 1, borderColor: "#4a4a4a" }}
          >
            <Grid item md={2} mt={2}>
              <Button className="underlined clearButton">Clear All</Button>
            </Grid>
            <Grid md={6.2}></Grid>
            <Grid md={3.8} mt={2} mb={2}>
              <Button
                variant="contained"
                className="buttoncol"
                // sx={{
                //   backgroundColor: "#216fb4",
                //   textTransform: "none",
                //   borderRadius: "4px",
                // }}
              >
                <Typography className="gMedium font16">
                  Show 300+ assets
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </DialogActions>
      </Dialog>

      {/* Detail Body */}

      <Box className="bodystart pagebody">
        <Grid container pt={3.75}>
          <Grid item md={2.5} sx={{ paddingBottom: "20px" }}>
            <Typography className="gBold grey font14">
              Prep final files
            </Typography>
          </Grid>
          <Grid md={9.5} sx={{ paddingBottom: "20px" }}>
            <Box
              className="selectButton"
              //sx={{ display: "flex" }}
            >
              <img src={HighLogo} alt="hp" className="logoImage" />
              <Typography
                pl={0.75}
                className="fontset assetlink grey font12"
                sx={{
                  textDecoration: "underline",
                }}
              >
                Modified Asset Request_FQHC_CHC_BirthdayPostcard_SPA_W123456{" "}
                {">"}
              </Typography>
            </Box>
            <Box
              className="rectangleCopy lightGreenBackground"
              //sx={{ width: "580px" }}
              onMouseEnter={handleHoverPopoverOpen}
              onMouseLeave={handleHoverPopoverClose}
            ></Box>
          </Grid>
          <Grid item md={2.5} sx={{ paddingBottom: "20px" }}>
            <Typography className="gBold grey font14">
              Prep final files
            </Typography>
          </Grid>
          <Grid md={9.5} sx={{ paddingBottom: "20px" }}>
            <Box
              className="selectButton"
              //sx={{ display: "flex" }}
            >
              <img src={HighLogo} alt="hp" className="logoImage" />
              <Typography
                pl={0.75}
                className="fontset assetlink grey font12"
                sx={{
                  textDecoration: "underline",
                }}
              >
                Modified Asset Request_FQHC_CHC_BirthdayPostcard_SPA_W123456{" "}
                {">"}
              </Typography>
            </Box>
            <Box
              className="rectangleCopy lightGreenBackground"
              sx={{ width: "580px" }}
              onMouseEnter={handleHoverPopoverOpen}
              onMouseLeave={handleHoverPopoverClose}
            ></Box>
          </Grid>
        </Grid>
      </Box>
      <Grid container>
        <Grid
          item
          md={2.5}
          mt={4}
          className="gridheight"
          // sx={{
          //   borderRight: " 1px solid",
          //   borderColor: "#a4a4a4",
          //   height: "4px",
          // }}
        ></Grid>
        <Grid
          item
          md={2.92}
          mt={4}
          className="gridheight"
          // sx={{
          //   borderRight: " 1px solid",
          //   borderColor: "#a4a4a4",
          //   height: "4px",
          // }}
        ></Grid>
        <Grid
          item
          md={2}
          mt={4}
          className="gridheight"
          // sx={{
          //   borderRight: " 1px solid",
          //   borderColor: "#a4a4a4",
          //   height: "4px",
          // }}
        ></Grid>
        <Grid
          item
          md={2}
          mt={4}
          className="gridheight"
          // sx={{
          //   borderRight: " 1px solid",
          //   borderColor: "#a4a4a4",
          //   height: "4px",
          // }}
        ></Grid>
        <Grid
          item
          md={12}
          className="gridwidth"
          //sx={{ borderTop: 1, borderColor: "#a4a4a4", width: "100%" }}
        ></Grid>
        <Grid item md={3}></Grid>
        <Grid item md={2.152}></Grid>
        <Grid item md={1} mt={1.5}>
          <Typography
            className="fontset grey font14"
            sx={{
              letterSpacing: "-0.3px",
            }}
          >
            20 days
          </Typography>
        </Grid>
        <Grid item md={1} mt={1.5}></Grid>
        <Grid item md={1} mt={1.5}>
          <Typography
            className="fontset grey font14"
            sx={{
              letterSpacing: "-0.3px",
            }}
          >
            40 days
          </Typography>
        </Grid>
        <Grid item md={1} mt={1.5}></Grid>
        <Grid item md={1} mt={1.5}>
          <Typography
            className="fontset grey font14"
            sx={{
              letterSpacing: "-0.3px",
            }}
          >
            60 days+
          </Typography>
        </Grid>
      </Grid>
      {/* <Search Popover> */}
      <Popover
        className="popover"
        id="searchPopover"
        open={searchOpen}
        anchorEl={state.anchorEl}
        onClose={handleClose1}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        // sx={{
        //   backgroundColor: "transparent !important",
        //   boxShadow: "0px 0px !important",
        // }}
      >
        <div className="search-bx">
          <a className="search-btn">
            <i id="searchclick" onClick={handleClickFocus}>
              <SearchIcon
                className="searchHeight"
                sx={{ height: "16px", width: "16px" }}
              />
            </i>
          </a>

          <input
            className="search-text"
            type="text"
            name=""
            placeholder="Search"
            ref={myRef}
          />
        </div>

        <Box className="searchlist">
          <List classes={{ Typography: "searchlisttyp" }}>
            <ListItem disablePadding>
              <ListItemButton disableRipple className="searchlistbutton">
                <ListItemText primary="Request" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton disableRipple className="searchlistbutton">
                <ListItemText primary="NIH" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton disableRipple className="searchlistbutton">
                <ListItemText primary="Intake" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton disableRipple className="searchlistbutton">
                <ListItemText primary="Approval" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton disableRipple className="searchlistbutton">
                <ListItemText primary="Review" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Popover>

      {/* <Sort Popover> */}

      <Popover
        id="sortPopover"
        open={open}
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
                className="buttonclose"
                // sx={{
                //   zIndex: 1,
                //   marginTop: "-53px",
                //   marginLeft: "-4.4px",
                //   height: "20px",
                //   "&:hover": {
                //     background: "transparent",
                //   },
                // }}
                disableRipple
              >
                <Typography
                  // mr={0.5}
                  className="fontset grey font14"
                >
                  SORT
                </Typography>
                <ExpandLessIcon
                  className="expandicon"
                  //sx={{ color: "#1E70B9", marginTop: "-1px" }}
                />
              </Button>
            </Grid>{" "}
            <Grid item md={12} mb={2} sx={{ marginTop: "-20px", zIndex: 2 }}>
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
                          className="csharpIc"
                          // sx={{
                          //   width: "16px",
                          //   height: "16px",
                          //   color: "#216FB4",
                          // }}
                        />
                      }
                      checkedIcon={
                        <CheckBoxSharpIcon
                          className="csharpIc"
                          // sx={{
                          //   width: "16px",
                          //   height: "16px",
                          //   color: "#216FB4",
                          // }}
                        />
                      }
                    />
                  }
                  label="Status"
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
                          className="csharpIc"
                          // sx={{
                          //   width: "16px",
                          //   height: "16px",
                          //   color: "#216FB4",
                          // }}
                        />
                      }
                      checkedIcon={
                        <CheckBoxSharpIcon
                          className="csharpIc"
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
                          className="csharpIc"
                          // sx={{
                          //   width: "16px",
                          //   height: "16px",
                          //   color: "#216FB4",
                          // }}
                        />
                      }
                      checkedIcon={
                        <CheckBoxSharpIcon
                          className="csharpIc"
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
                          className="csharpIc"
                          // sx={{
                          //   width: "16px",
                          //   height: "16px",
                          //   color: "#216FB4",
                          // }}
                        />
                      }
                      checkedIcon={
                        <CheckBoxSharpIcon
                          className="csharpIc"
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
                          className="csharpIc"
                          // sx={{
                          //   width: "16px",
                          //   height: "16px",
                          //   color: "#216FB4",
                          // }}
                        />
                      }
                      checkedIcon={
                        <CheckBoxSharpIcon
                          className="csharpIc"
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
      {/* Hover Popover */}
      <Popover
        id="mouse-over-popover1"
        sx={{
          pointerEvents: "none",
        }}
        open={hovopen}
        anchorEl={state.hovAnchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "left",
        }}
        onClose={handleHoverPopoverClose}
        disableRestoreFocus
      >
        <Grid container className="bubblegrid">
          <Grid item md={12}>
            <Typography
              className="gBold font12"
              sx={{
                lineHeight: "16px",
                letterSpacing: "-0.17px",
              }}
            >
              MAR_FQHC_CHC_BirthdayPostcard_SPA_W123456
            </Typography>
          </Grid>
          <Grid
            item
            md={4}
            sx={{ borderTop: 2, borderColor: "#6cace4" }}
          ></Grid>
          <Grid item md={8}></Grid>
          <Grid item md={12}>
            <Typography
              className="fontset purple font12"
              sx={{
                lineHeight: "16px",
                letterSpacing: "-0.17px",
              }}
            >
              Today: 64 days
            </Typography>
          </Grid>
        </Grid>
      </Popover>
    </Container>
  );
}

export default Overview;
