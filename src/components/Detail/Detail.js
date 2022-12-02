import React, { Component } from "react";
import HighLogo from "../Images/logos/High.webp";
import Triangleup from "../Images/Icons/Triangleup.webp";
import LowLogo from "../Images/logos/Low.webp";
import jsPDF from "jspdf";
import * as htmlToImage from "html-to-image";
import CheckBoxOutlineBlankSharpIcon from "@mui/icons-material/CheckBoxOutlineBlankSharp";
import CheckBoxSharpIcon from "@mui/icons-material/CheckBoxSharp";

import {
  Container,
  Box,
  Typography,
  Grid,
  Popover,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
  Popper,
  Fade,
  Paper,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import CircleIcon from "@mui/icons-material/Circle";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

function Detail() {
  const [state, setState] = useState({
    assets: 4,
    reqanchorEl: null,
    width: "100%",
    intakeWidth: "20%",
    intakeWidth1: "10%",
    intakeWidth2: "30%",
    intakeWidth3: "5%",
    uApprovalWidth: "30%",
    inProdWidth: "10%",
    inProdWidth1: "20%",
    inProdWidth2: "25%",
    inProdWidth3: "30%",
    pFinalWidth: "30%",
    pFinalWidth1: "10%",
    pFinalWidth2: "30%",
    pFinalWidth3: "10%",
    expand: true,
    popanchorEl: null,
    open1: false,
    lTypography: null,
    sortAnchorEl: null,
    statusAnchorEl: null,
  });

  const handleClickStatus = (event) => {
    setState({ statusAnchorEl: event.currentTarget });
  };
  const handleCloseStatus = () => {
    setState({ statusAnchorEl: null });
  };
  const handleClickSort = (event) => {
    setState({ sortAnchorEl: event.currentTarget });
  };
  const handleCloseSort = () => {
    setState({ sortAnchorEl: null });
  };
  const handleClick = (event) => {
    setState({ reqanchorEl: event.currentTarget });
  };
  const handleClose = () => {
    setState({ reqanchorEl: null });
  };

  const setDisplay = () => {
    document.querySelector(".accordian1").classList.add("accordian1display");
    document.querySelector(".vmore").classList.add("viewmhide");
  };

  const setDisplay2 = () => {
    document.querySelector(".accordian1").classList.remove("accordian1display");
    document.querySelector(".vmore").classList.remove("viewmhide");
  };
  const handleClickpop = (event) => {
    setState({ popanchorEl: event.currentTarget });
    setState({ open1: !state.open1 });
    let timer = setTimeout(() => {
      setState({ open1: false });
    }, 1500);
  };

  const printDocument = () => {
    htmlToImage
      .toPng(document.getElementById("accordian1"), { quality: 1 })
      .then(function (dataUrl) {
        var link = document.createElement("a");
        link.download = "my-image-name.jpeg";
        const pdf = new jsPDF("landscape", "pt", "a4", "true");

        pdf.addImage(dataUrl, "PNG", -53, 30);
        pdf.save("download.pdf");
      });
  };

  const reqopen = Boolean(state.reqanchorEl);
  const sortOpen = Boolean(state.sortAnchorEl);
  const statusOpen = Boolean(state.statusAnchorEl);
  return (
    <Container>
      <Box className="positionstatic">
        <Box mt={8.4}>
          <Grid container>
            <Grid md={6.3941} xs={12}>
              <Typography
                className="assetsHeading gBlack"
                variant="body"
                //sx={{ fontSize: "30px", color: "#4A4A4A" }}
              >
                {state.assets + " "}
                Active Assets
              </Typography>
            </Grid>
            <Grid item className="gridCol" mt={1.4} md={0.9} xs={12}>
              <CircleIcon
                className="circle"
                // sx={{
                //   width: "10px",
                //   height: "10px",
                //   color: "#F7AB71",
                //   marginTop: "6px",
                // }}
              />
              <Typography
                className="fontset"
                //sx={{ fontSize: "14px" }}
                mr={2}
              >
                Intakess
              </Typography>
            </Grid>
            <Grid item className="gridCol" mt={1.4} md={1.8359} xs={12}>
              <CircleIcon
                className="circles"
                // sx={{
                //   width: "10px",
                //   height: "10px",
                //   color: "#FFDC7B",
                //   marginTop: "6px",
                // }}
              />
              <Typography
                className="fontset"
                //sx={{ fontSize: "14px" }}
                mr={2}
              >
                Under Approval
              </Typography>
            </Grid>
            <Grid item className="gridCol" mt={1.4} md={1.67} xs={12}>
              <CircleIcon
                className="colorgreen"
                // sx={{
                //   width: "10px",
                //   height: "10px",
                //   color: "#C9DB85",
                //   marginTop: "6px",
                // }}
              />
              <Typography
                className="fontset"
                //sx={{ fontSize: "14px" }}
                mr={2}
              >
                In Production
              </Typography>
            </Grid>
            <Grid item className="gridCol" mt={1.4} md={1.1} xs={12}>
              <CircleIcon
                className="colorblue"
                // sx={{
                //   width: "10px",
                //   height: "10px",
                //   color: "#7AC79D",
                //   marginTop: "6px",
                // }}
              />
              <Typography className="fontset" sx={{ fontSize: "14px" }}>
                Prep Final
              </Typography>
            </Grid>
          </Grid>
        </Box>
        {/* current status menu */}
        <Grid
          container
          className="containers"
          //sx={{ borderBottom: 1, borderColor: "divider", marginTop: 6 }}
        >
          <Grid item md={2.6} xs={12} mt={"10px"}>
            <Typography
              variant="h7"
              //sx={{ fontSize: "14px", color: "#4A4A4A" }}
              className="gBold"
            >
              CURRENT STATUS
            </Typography>
          </Grid>

          <Grid item md={1.55} mt={"10px"}>
            <img src={HighLogo} alt="hp" className="logoImage" />
            <Typography
              variant="body"
              className="fontsetx"
              // sx={{
              //   fontSize: "12px",
              //   color: "#4A4A4A",
              // }}
            >
              High Priority
            </Typography>
          </Grid>
          <Grid item md={1.55} mt={"10px"}>
            <img src={LowLogo} alt="lp" className="logoImage" />
            <Typography
              className="fontsetx"
              variant="body"
              //sx={{ fontSize: "12px", color: "#4A4A4A" }}
            >
              Low Priority
            </Typography>
          </Grid>
          <Grid item md={1.8}></Grid>
          <Grid
            item
            md={2}
            sx={{ pt: 1.3, pb: 0.3, pl: 0.5, pr: 0.5, display: "flex" }}
            className="selectButton"
            onClick={handleClick}
          >
            <Typography
              ml={1.7}
              className="fontsets"
              //sx={{ color: "#4A4A4A", fontSize: "14px" }}
            >
              REQUEST TYPE
            </Typography>
            <ExpandMoreIcon
              className="expandIcon"
              //sx={{ color: "#1E70B9", marginTop: "-1px" }}
            />
          </Grid>
          <Grid
            item
            md={1.3}
            sx={{ pt: 1.3, pb: 0.3, display: "flex" }}
            className="selectButton"
            onClick={handleClickStatus}
          >
            <Typography
              className="fontsets"
              //sx={{ color: "#4A4A4A", fontSize: "14px" }}
            >
              STATUS
            </Typography>
            <ExpandMoreIcon sx={{ color: "#1E70B9", marginTop: "-1px" }} />
          </Grid>
          <Grid
            item
            md={1}
            sx={{ pt: 1.3, pb: 0.3, pl: 0.5, pr: 0.5, display: "flex" }}
            onClick={handleClickSort}
            className="selectButton"
          >
            <Typography
              className="fontsets"
              //sx={{ color: "#4A4A4A", fontSize: "14px", marginLeft: "-8px" }}
            >
              SORT
            </Typography>
            <ExpandMoreIcon sx={{ color: "#1E70B9", marginTop: "-1px" }} />
          </Grid>
        </Grid>
      </Box>

      {/* body starting */}
      <Box className="bodystart pagebody">
        <Grid container mt={6}>
          <Grid item md={2.6}>
            <Typography
              className="gBolds"
              variant="body"
              // sx={{
              //   fontSize: "20px",
              //   color: "#262163",
              //   letterSpacing: "-0.2px",
              // }}
            >
              Prep Final Files
            </Typography>
          </Grid>
          <Grid item md={9.4} sx={{ display: "flex" }}>
            <img src={LowLogo} alt="lp" className="logoImage" />
            <Typography
              mt={-1}
              className="gMedium"
              // sx={{
              //   fontSize: "16px",
              //   color: "#4A4A4A",
              // }}
            >
              Modified Asset Request_FQHC_CHC_BirthdayPostcard_SPA_W123456
            </Typography>
          </Grid>
          <Grid
            sx={{ cursor: "pointer", display: "flex" }}
            item
            mt={2}
            md={1.9}
            onClick={() => {
              setDisplay();
            }}
          >
            <Typography
              className="fontset"
              sx={{ fontSize: "14px", color: "#262163" }}
            >
              VIEW MORE
            </Typography>

            <img
              style={{
                marginLeft: "5px",
                marginTop: "3px",
                height: "14px",
                width: "14px",
              }}
              src={Triangleup}
              alt="hp"
              className="logoImage"
            />

            {/* <ArrowDropDownIcon
                mb={30}
                sx={{ color: "#1D70BE", fontSize: 30 }}
              /> */}
          </Grid>
          <Grid item md={0.7} mt={2}></Grid>
          <Grid
            item
            md={8.5}
            mt={2}
            xs={12}
            sx={{
              display: "flex",
            }}
          >
            <Box className="line"></Box>
            <Box
              sx={{
                display: "flex",
                bgcolor: "#EDEDF5",
                width: "100%",
                height: "20px",
              }}
            >
              <Box
                sx={{
                  bgcolor: "#F7AB71",
                  width: state.intakeWidth,
                  height: "100%",
                }}
              ></Box>
              <Box
                sx={{
                  bgcolor: "#FFDC7B",
                  width: state.uApprovalWidth,
                  height: "100%",
                }}
              ></Box>
              <Box
                sx={{
                  bgcolor: "#C9DB85",
                  width: state.inProdWidth,
                  height: "100%",
                }}
              ></Box>
              <Box
                sx={{
                  bgcolor: "#7AC79D",
                  width: state.pFinalWidth,
                  height: "100%",
                }}
              ></Box>
            </Box>
          </Grid>

          <Grid item md={2.5}></Grid>
          <Grid item md={0.3} mb={2} sx={{ textAlign: "center" }}>
            <div>
              <Typography
                className="fontset"
                variant="body"
                sx={{ fontSize: 12, color: "#262163" }}
              >
                FEB 22
              </Typography>
            </div>
          </Grid>
          <Grid item md={8.5}></Grid>
          <Grid id="accordian1" item md={11.8} ml={1} mb={2}>
            {/* "Accordian 1 " */}

            <Accordion
              // id="accordian1"
              className="accordian1"
              expanded={state.expand}
            >
              <AccordionSummary
                expandIcon={" "}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Box onClick={setDisplay2}>
                  {" "}
                  <Typography
                    variant="body"
                    className="fontset"
                    sx={{
                      fontSize: 15,
                      color: "#262163",
                    }}
                  >
                    VIEW LESS
                  </Typography>
                  <ArrowDropUpIcon
                    sx={{ mb: "-12px", color: "#1D70BE", fontSize: 32 }}
                  />
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container>
                  <Grid item md={10.6}></Grid>
                  <Grid
                    onClick={printDocument}
                    item
                    md={0.5}
                    sx={{
                      color: "#1D70BE",
                      alignContent: "center",
                      cursor: "pointer",
                    }}
                  >
                    <SaveAltIcon />
                    <Typography
                      sx={{
                        fontSize: 10,
                        fontWeight: "bold",
                      }}
                      className="fontset"
                    >
                      PDF
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    md={0.9}
                    sx={{
                      color: "#1D70BE",
                      textAlign: "center",
                      cursor: "pointer",
                    }}
                    onClick={handleClickpop}
                  >
                    <Popper
                      className="sucesspopper"
                      open={state.open1}
                      anchorEl={state.popanchorEl}
                      placement={"top-end"}
                      transition
                    >
                      {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                          <Grid container>
                            <Grid item md={12}>
                              <Paper className="popperPaper">
                                <Grid container>
                                  <Grid
                                    item
                                    md={3.2}
                                    pr={0.5}
                                    pt={1}
                                    pb={1}
                                    pl={1}
                                  >
                                    <CheckCircleIcon
                                      sx={{
                                        color: "white",
                                        fontSize: 40,
                                      }}
                                    />
                                  </Grid>
                                  <Grid
                                    item
                                    md={8.8}
                                    pr={1}
                                    pt={1}
                                    pb={1}
                                    className="alignleft"
                                  >
                                    <Typography
                                      sx={{
                                        fontSize: 13,
                                        fontWeight: "bold",
                                      }}
                                      className="fontset"
                                    >
                                      Success!
                                    </Typography>
                                    <Typography
                                      sx={{
                                        fontSize: 12,
                                        // fontWeight: "bold",
                                      }}
                                      className="fontset"
                                    >
                                      Link copied to clipboard.
                                    </Typography>
                                  </Grid>
                                </Grid>
                              </Paper>
                            </Grid>
                          </Grid>
                        </Fade>
                      )}
                    </Popper>
                    {/* <ArrowDropDownIcon /> */}

                    <ContentCopyIcon />
                    <Typography
                      sx={{
                        fontSize: 10,
                        fontWeight: "bold",
                      }}
                      className="fontset"
                    >
                      COPY LINK
                    </Typography>
                  </Grid>
                  <Grid item md={5} mr={5} ml={5}>
                    {/* date wise track grid   */}
                    <Grid
                      container
                      id="downloadcontent"
                      ml={2}
                      className="mycontainer dwcontent"
                    >
                      {" "}
                      <Grid item md={2.155}>
                        <Typography
                          sx={{
                            fontSize: "12px",
                            color: "#4A4A4A",
                          }}
                          className="gBold"
                        >
                          03/31/22
                        </Typography>
                      </Grid>
                      <Grid className="mycontainer" item md={0.5}>
                        <CircleIcon
                          className="mycontainer"
                          sx={{
                            fontSize: "13px",
                            color: "#7AC79D",
                            marginTop: "6.5px",
                            position: "absolute",
                            zIndex: 1,
                          }}
                        />
                      </Grid>
                      <Grid item md={9} ml={1} mt={0.5}>
                        <Typography
                          className="gBold"
                          sx={{
                            lineHeight: "16PX",
                            fontSize: "16px",
                            color: "#262163",
                          }}
                        >
                          Prep Final Files
                        </Typography>
                      </Grid>
                      <Grid item md={2.35}></Grid>
                      <Grid
                        item
                        className="mycontainer"
                        sx={{
                          borderLeft: 2,
                          borderColor: "divider",
                        }}
                        md={0.18}
                      ></Grid>
                      <Grid item md={9} ml={1.5} mt={1} mb={1}>
                        <Typography
                          className="gbItalic"
                          sx={{
                            fontSize: "12px",
                            color: "#4A4A4A",
                            lineHeight: "16px",
                            letterSpacing: "0.1px",
                          }}
                        >
                          Production Prep Final Files
                        </Typography>
                      </Grid>
                      <Grid item md={2.155}>
                        <Typography
                          sx={{
                            fontSize: "12px",
                            color: "#4A4A4A",
                            lineHeight: "16px",
                            letterSpacing: "-0.2px",
                          }}
                          className="gBold"
                        >
                          03/31/22
                        </Typography>
                      </Grid>
                      <Grid item md={0.5}>
                        <CircleIcon
                          sx={{
                            position: "absolute",
                            zIndex: 1,
                            fontSize: "13px",
                            color: "#C9DB85",
                            marginTop: "6.5px",
                          }}
                        />
                      </Grid>
                      <Grid item md={9} ml={1} sx={{ display: "flex" }}>
                        <Typography
                          className="gMedium"
                          variant="body"
                          sx={{
                            fontSize: "14px",
                            color: "#262163",
                            letterSpacing: "-0.2px",
                          }}
                        >
                          NIH Final Review
                        </Typography>
                        <Typography
                          ml={2}
                          sx={{
                            fontSize: "14px",
                            letterSpacing: "-0.2px",
                            color: "#262262",
                          }}
                        >
                          (4 d)
                        </Typography>
                      </Grid>
                      <Grid item md={2.35} marginTop={-5}></Grid>
                      <Grid
                        item
                        sx={{
                          borderLeft: 2,
                          borderColor: "divider",
                        }}
                        md={0.18}
                      ></Grid>
                      <Grid item md={9} ml={1.5} mt={1} mb={1}>
                        <Typography
                          className="gbItalic"
                          sx={{
                            fontSize: "12px",
                            lineHeight: "16px",
                            letterSpacing: "-0.1px",
                            color: "#4A4A4A",
                          }}
                        >
                          Low Res Files Sent to NIH for Approval
                        </Typography>
                      </Grid>
                      <Grid item md={2.155}>
                        <Typography
                          sx={{
                            fontSize: "12px",
                            color: "#4A4A4A",
                            lineHeight: "16px",
                            letterSpacing: "-0.2px",
                          }}
                          className="gBold"
                        >
                          03/31/22
                        </Typography>
                      </Grid>
                      <Grid item md={0.5}>
                        <CircleIcon
                          sx={{
                            position: "absolute",
                            zIndex: 1,
                            fontSize: "13px",
                            color: "#C9DB85",
                            marginTop: "6.5px",
                          }}
                        />
                      </Grid>
                      <Grid item md={9} ml={1} sx={{ display: "flex" }}>
                        <Typography
                          className="gMedium"
                          variant="body"
                          sx={{
                            fontSize: "14px",
                            color: "#262163",
                            letterSpacing: "-0.2px",
                          }}
                        >
                          NIH Final Review
                        </Typography>
                        <Typography
                          ml={2}
                          sx={{
                            fontSize: "14px",
                            letterSpacing: "-0.2px",
                            color: "#262262",
                          }}
                        >
                          (4 d)
                        </Typography>
                      </Grid>
                      <Grid item md={2.35} marginTop={-5}></Grid>
                      <Grid
                        item
                        sx={{
                          borderLeft: 2,
                          borderColor: "divider",
                        }}
                        md={0.18}
                      ></Grid>
                      <Grid item md={9} ml={1.5} mt={1} mb={1}>
                        <Typography
                          className="gbItalic"
                          sx={{
                            fontSize: "12px",
                            lineHeight: "16px",
                            letterSpacing: "-0.1px",
                            color: "#4A4A4A",
                          }}
                        >
                          Low Res Files Sent to NIH for Approval
                        </Typography>
                      </Grid>
                      <Grid item md={2.155}>
                        <Typography
                          sx={{
                            fontSize: "12px",
                            color: "#4A4A4A",
                            lineHeight: "16px",
                            letterSpacing: "-0.2px",
                          }}
                          className="gBold"
                        >
                          03/31/22
                        </Typography>
                      </Grid>
                      <Grid item md={0.5}>
                        <CircleIcon
                          sx={{
                            position: "absolute",
                            zIndex: 1,
                            fontSize: "13px",
                            color: "#C9DB85",
                            marginTop: "6.5px",
                          }}
                        />
                      </Grid>
                      <Grid item md={9} ml={1} sx={{ display: "flex" }}>
                        <Typography
                          className="gMedium"
                          variant="body"
                          sx={{
                            fontSize: "14px",
                            color: "#262163",
                            letterSpacing: "-0.2px",
                          }}
                        >
                          NIH Final Review
                        </Typography>
                        <Typography
                          ml={2}
                          sx={{
                            fontSize: "14px",
                            letterSpacing: "-0.2px",
                            color: "#262262",
                          }}
                        >
                          (4 d)
                        </Typography>
                      </Grid>
                      <Grid item md={2.35} marginTop={-5}></Grid>
                      <Grid
                        item
                        sx={{
                          borderLeft: 2,
                          borderColor: "divider",
                        }}
                        md={0.18}
                      ></Grid>
                      <Grid item md={9} ml={1.5} mt={1} mb={1}>
                        <Typography
                          className="gbItalic"
                          sx={{
                            fontSize: "12px",
                            lineHeight: "16px",
                            letterSpacing: "-0.1px",
                            color: "#4A4A4A",
                          }}
                        >
                          Low Res Files Sent to NIH for Approval
                        </Typography>
                      </Grid>
                      <Grid item md={2.155}>
                        <Typography
                          sx={{
                            fontSize: "12px",
                            color: "#4A4A4A",
                            lineHeight: "16px",
                            letterSpacing: "-0.2px",
                          }}
                          className="gBold"
                        >
                          03/31/22
                        </Typography>
                      </Grid>
                      <Grid item md={0.5}>
                        <CircleIcon
                          sx={{
                            position: "absolute",
                            zIndex: 1,
                            fontSize: "13px",
                            color: "#C9DB85",
                            marginTop: "6.5px",
                          }}
                        />
                      </Grid>
                      <Grid item md={9} ml={1} sx={{ display: "flex" }}>
                        <Typography
                          className="gMedium"
                          variant="body"
                          sx={{
                            fontSize: "14px",
                            color: "#262163",
                            letterSpacing: "-0.2px",
                          }}
                        >
                          NIH Final Review
                        </Typography>
                        <Typography
                          ml={2}
                          sx={{
                            fontSize: "14px",
                            letterSpacing: "-0.2px",
                            color: "#262262",
                          }}
                        >
                          (4 d)
                        </Typography>
                      </Grid>
                      <Grid item md={2.35} marginTop={-5}></Grid>
                      <Grid
                        item
                        sx={{
                          borderLeft: 2,
                          borderColor: "divider",
                        }}
                        md={0.18}
                      ></Grid>
                      <Grid item md={9} ml={1.5} mt={1} mb={1}>
                        <Typography
                          className="gbItalic"
                          sx={{
                            fontSize: "12px",
                            lineHeight: "16px",
                            letterSpacing: "-0.1px",
                            color: "#4A4A4A",
                          }}
                        >
                          Low Res Files Sent to NIH for Approval
                        </Typography>
                      </Grid>
                      <Grid item md={2.155}>
                        <Typography
                          sx={{
                            fontSize: "12px",
                            color: "#4A4A4A",
                            lineHeight: "16px",
                            letterSpacing: "-0.2px",
                          }}
                          className="gBold"
                        >
                          03/31/22
                        </Typography>
                      </Grid>
                      <Grid item md={0.5}>
                        <CircleIcon
                          sx={{
                            position: "absolute",
                            zIndex: 1,
                            fontSize: "13px",
                            color: "#C9DB85",
                            marginTop: "6.5px",
                          }}
                        />
                      </Grid>
                      <Grid item md={9} ml={1} sx={{ display: "flex" }}>
                        <Typography
                          className="gMedium"
                          variant="body"
                          sx={{
                            fontSize: "14px",
                            color: "#262163",
                            letterSpacing: "-0.2px",
                          }}
                        >
                          NIH Final Review
                        </Typography>
                        <Typography
                          ml={2}
                          sx={{
                            fontSize: "14px",
                            letterSpacing: "-0.2px",
                            color: "#262262",
                          }}
                        >
                          (4 d)
                        </Typography>
                      </Grid>
                      <Grid item md={2.35} marginTop={-5}></Grid>
                      <Grid
                        item
                        sx={{
                          borderLeft: 2,
                          borderColor: "divider",
                        }}
                        md={0.18}
                      ></Grid>
                      <Grid item md={9} ml={1.5} mt={1} mb={1}>
                        <Typography
                          className="gbItalic"
                          sx={{
                            fontSize: "12px",
                            lineHeight: "16px",
                            letterSpacing: "-0.1px",
                            color: "#4A4A4A",
                          }}
                        >
                          Low Res Files Sent to NIH for Approval
                        </Typography>
                      </Grid>
                      <Grid item md={2.155}>
                        <Typography
                          sx={{
                            fontSize: "12px",
                            color: "#4A4A4A",
                            lineHeight: "16px",
                            letterSpacing: "-0.2px",
                          }}
                          className="gBold"
                        >
                          03/31/22
                        </Typography>
                      </Grid>
                      <Grid item md={0.5}>
                        <CircleIcon
                          sx={{
                            position: "absolute",
                            zIndex: 1,
                            fontSize: "13px",
                            color: "#C9DB85",
                            marginTop: "6.5px",
                          }}
                        />
                      </Grid>
                      <Grid item md={9} ml={1} sx={{ display: "flex" }}>
                        <Typography
                          className="gMedium"
                          variant="body"
                          sx={{
                            fontSize: "14px",
                            color: "#262163",
                            letterSpacing: "-0.2px",
                          }}
                        >
                          NIH Final Review
                        </Typography>
                        <Typography
                          ml={2}
                          sx={{
                            fontSize: "14px",
                            letterSpacing: "-0.2px",
                            color: "#262262",
                          }}
                        >
                          (4 d)
                        </Typography>
                      </Grid>
                      <Grid item md={2.35} marginTop={-5}></Grid>
                      <Grid
                        item
                        sx={{
                          borderLeft: 2,
                          borderColor: "divider",
                        }}
                        md={0.18}
                      ></Grid>
                      <Grid item md={9} ml={1.5} mt={1} mb={1}>
                        <Typography
                          className="gbItalic"
                          sx={{
                            fontSize: "12px",
                            lineHeight: "16px",
                            letterSpacing: "-0.1px",
                            color: "#4A4A4A",
                          }}
                        >
                          Low Res Files Sent to NIH for Approval
                        </Typography>
                      </Grid>
                      <Grid item md={2.155}>
                        <Typography
                          sx={{
                            fontSize: "12px",
                            color: "#4A4A4A",
                            lineHeight: "16px",
                            letterSpacing: "-0.2px",
                          }}
                          className="gBold"
                        >
                          03/31/22
                        </Typography>
                      </Grid>
                      <Grid item md={0.5}>
                        <CircleIcon
                          sx={{
                            position: "absolute",
                            zIndex: 1,
                            fontSize: "13px",
                            color: "#C9DB85",
                            marginTop: "6.5px",
                          }}
                        />
                      </Grid>
                      <Grid item md={9} ml={1} sx={{ display: "flex" }}>
                        <Typography
                          className="gMedium"
                          variant="body"
                          sx={{
                            fontSize: "14px",
                            color: "#262163",
                            letterSpacing: "-0.2px",
                          }}
                        >
                          NIH Final Review
                        </Typography>
                        <Typography
                          ml={2}
                          sx={{
                            fontSize: "14px",
                            letterSpacing: "-0.2px",
                            color: "#262262",
                          }}
                        >
                          (4 d)
                        </Typography>
                      </Grid>
                      <Grid item md={2.35} marginTop={-5}></Grid>
                      <Grid
                        item
                        sx={{
                          borderLeft: 2,
                          borderColor: "divider",
                        }}
                        md={0.18}
                      ></Grid>
                      <Grid item md={9} ml={1.5} mt={1} mb={1}>
                        <Typography
                          className="gbItalic"
                          sx={{
                            fontSize: "12px",
                            lineHeight: "16px",
                            letterSpacing: "-0.1px",
                            color: "#4A4A4A",
                          }}
                        >
                          Low Res Files Sent to NIH for Approval
                        </Typography>
                      </Grid>
                      <Grid item md={2.155}>
                        <Typography
                          sx={{
                            fontSize: "12px",
                            color: "#4A4A4A",
                            lineHeight: "16px",
                            letterSpacing: "-0.2px",
                          }}
                          className="gBold"
                        >
                          03/31/22
                        </Typography>
                      </Grid>
                      <Grid item md={0.5}>
                        <CircleIcon
                          sx={{
                            position: "absolute",
                            zIndex: 1,
                            fontSize: "13px",
                            color: "#C9DB85",
                            marginTop: "6.5px",
                          }}
                        />
                      </Grid>
                      <Grid item md={9} ml={1} sx={{ display: "flex" }}>
                        <Typography
                          className="gMedium"
                          variant="body"
                          sx={{
                            fontSize: "14px",
                            color: "#262163",
                            letterSpacing: "-0.2px",
                          }}
                        >
                          NIH Final Review
                        </Typography>
                        <Typography
                          ml={2}
                          sx={{
                            fontSize: "14px",
                            letterSpacing: "-0.2px",
                            color: "#262262",
                          }}
                        >
                          (4 d)
                        </Typography>
                      </Grid>
                      <Grid item md={2.35} marginTop={-5}></Grid>
                      <Grid
                        item
                        sx={{
                          borderLeft: 2,
                          borderColor: "divider",
                        }}
                        md={0.18}
                      ></Grid>
                      <Grid item md={9} ml={1.5} mt={1} mb={1}>
                        <Typography
                          className="gbItalic"
                          sx={{
                            fontSize: "12px",
                            lineHeight: "16px",
                            letterSpacing: "-0.1px",
                            color: "#4A4A4A",
                          }}
                        >
                          Low Res Files Sent to NIH for Approval
                        </Typography>
                      </Grid>
                      <Grid item md={2.155}>
                        <Typography
                          sx={{
                            fontSize: "12px",
                            color: "#4A4A4A",
                            lineHeight: "16px",
                            letterSpacing: "-0.2px",
                          }}
                          className="gBold"
                        >
                          03/31/22
                        </Typography>
                      </Grid>
                      <Grid item md={0.5}>
                        <CircleIcon
                          sx={{
                            position: "absolute",
                            zIndex: 1,
                            fontSize: "13px",
                            color: "#C9DB85",
                            marginTop: "6.5px",
                          }}
                        />
                      </Grid>
                      <Grid item md={9} ml={1} sx={{ display: "flex" }}>
                        <Typography
                          className="gMedium"
                          variant="body"
                          sx={{
                            fontSize: "14px",
                            color: "#262163",
                            letterSpacing: "-0.2px",
                          }}
                        >
                          NIH Final Review
                        </Typography>
                        <Typography
                          ml={2}
                          sx={{
                            fontSize: "14px",
                            letterSpacing: "-0.2px",
                            color: "#262262",
                          }}
                        >
                          (4 d)
                        </Typography>
                      </Grid>
                      <Grid item md={2.35} marginTop={-5}></Grid>
                      <Grid item md={0.18}></Grid>
                      <Grid item md={9} ml={1.5} mt={1} mb={1}>
                        <Typography
                          className="gbItalic"
                          sx={{
                            fontSize: "12px",
                            lineHeight: "16px",
                            letterSpacing: "-0.1px",
                            color: "#4A4A4A",
                          }}
                        >
                          Low Res Files Sent to NIH for Approval
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Divider
                    orientation="vertical"
                    sx={{ backgroundColor: "#6BACE4" }}
                    flexItem
                  />
                  <Grid item md={5.3} ml={4}>
                    <Grid container id="accordian2">
                      <Grid item md={12} mb={1}>
                        <Typography
                          variant="body"
                          sx={{
                            fontSize: 13,
                            fontWeight: "bold",
                            color: "#4A4A4A",
                          }}
                          className="fontset"
                        >
                          Asset Overview
                        </Typography>
                      </Grid>
                      <Grid item md={4.6}>
                        {" "}
                        <Typography
                          variant="body"
                          className="fontset"
                          sx={{
                            fontSize: 12,
                            color: "#4A4A4A",
                          }}
                        >
                          Type:
                        </Typography>
                      </Grid>
                      <Grid item md={7.4}>
                        <Typography
                          variant="body"
                          className="fontset"
                          sx={{
                            fontSize: 12,
                            color: "#262163",
                          }}
                        >
                          Outdoor Signage
                        </Typography>
                      </Grid>
                      <Grid item md={4.6} mt={1}>
                        {" "}
                        <Typography
                          variant="body"
                          className="fontset"
                          sx={{
                            fontSize: 12,
                            color: "#4A4A4A",
                          }}
                        >
                          Format:
                        </Typography>
                      </Grid>
                      <Grid item md={7.4} mt={1}>
                        <Typography
                          variant="body"
                          className="fontset"
                          sx={{
                            fontSize: 12,
                            color: "#262163",
                          }}
                        >
                          Digital
                        </Typography>
                      </Grid>
                      <Grid item md={12} mb={1} mt={2}>
                        <Typography
                          variant="body"
                          sx={{
                            fontSize: 13,
                            fontWeight: "bold",
                            color: "#4A4A4A",
                          }}
                          className="fontset"
                        >
                          Request Overview
                        </Typography>
                      </Grid>
                      <Grid item md={4.6}>
                        {" "}
                        <Typography
                          variant="body"
                          className="fontset"
                          sx={{
                            fontSize: 12,
                            color: "#4A4A4A",
                          }}
                        >
                          Requester:
                        </Typography>
                      </Grid>
                      <Grid item md={7.4}>
                        <Typography
                          variant="body"
                          className="fontset"
                          sx={{
                            fontSize: 12,
                            color: "#262163",
                          }}
                        >
                          Cathrine Peltz
                        </Typography>
                      </Grid>
                      <Grid item md={4.6} mt={1}>
                        {" "}
                        <Typography
                          variant="body"
                          className="fontset"
                          sx={{
                            fontSize: 12,
                            color: "#4A4A4A",
                          }}
                        >
                          Affiliation:
                        </Typography>
                      </Grid>
                      <Grid item md={7.4} mt={1}>
                        <Typography
                          variant="body"
                          className="fontset"
                          sx={{
                            fontSize: 12,
                            color: "#262163",
                          }}
                        >
                          Trans American Consortium
                        </Typography>
                      </Grid>
                      <Grid item md={4.6} mt={1} mb={2}>
                        {" "}
                        <Typography
                          variant="body"
                          className="fontset"
                          sx={{
                            fontSize: 12,
                            color: "#4A4A4A",
                          }}
                        >
                          Partner:
                        </Typography>
                      </Grid>
                      <Grid item md={7.4} mt={1} mb={1}>
                        <Typography
                          variant="body"
                          className="fontset"
                          sx={{
                            fontSize: 12,
                            color: "#262163",
                          }}
                        >
                          Henry Ford Health System
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        md={12}
                        sx={{
                          borderBottom: 1,
                          borderColor: "divider",
                        }}
                        mr={5}
                        mb={2}
                      ></Grid>
                      <Grid item md={4.6} mt={1} mb={1}>
                        {" "}
                        <Typography
                          variant="body"
                          className="fontset"
                          sx={{
                            fontSize: 12,
                            color: "#4A4A4A",
                          }}
                        >
                          Request Type:
                        </Typography>
                      </Grid>
                      <Grid item md={7.4} mt={1} mb={1}>
                        <Typography
                          variant="body"
                          className="fontset"
                          sx={{
                            fontSize: 12,
                            color: "#262163",
                          }}
                        >
                          MAR (Modified Asset Request)
                        </Typography>
                      </Grid>
                      <Grid item md={4.6} mb={1}>
                        {" "}
                        <Typography
                          variant="body"
                          className="fontset"
                          sx={{
                            fontSize: 12,
                            color: "#4A4A4A",
                          }}
                        >
                          Request ID:
                        </Typography>
                      </Grid>
                      <Grid item md={7.4}>
                        <Typography
                          variant="body"
                          className="fontset"
                          sx={{
                            fontSize: 12,
                            color: "#262163",
                          }}
                        >
                          W123456
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        md={12}
                        sx={{
                          borderBottom: 1,
                          borderColor: "divider",
                        }}
                        mr={5}
                        mb={2}
                      ></Grid>
                      <Grid item md={4.6} mt={1} mb={1}>
                        {" "}
                        <Typography
                          variant="body"
                          className="fontset"
                          sx={{
                            fontSize: 12,
                            color: "#4A4A4A",
                          }}
                        >
                          Wondros Contract:
                        </Typography>
                      </Grid>
                      <Grid item md={7.4} mt={1} mb={1}>
                        <Typography
                          variant="body"
                          className="fontset"
                          sx={{
                            fontSize: 12,
                            color: "#262163",
                          }}
                        >
                          Rosselle Sandoval
                        </Typography>
                      </Grid>
                      <Grid item md={4.6} mb={1}>
                        {" "}
                        <Typography
                          variant="body"
                          className="fontset"
                          sx={{
                            fontSize: 12,
                            color: "#4A4A4A",
                          }}
                        >
                          Contact Email
                        </Typography>
                      </Grid>
                      <Grid item md={7.4}>
                        <Typography
                          variant="body"
                          className="fontset"
                          sx={{
                            fontSize: 12,
                            color: "#262163",
                          }}
                        >
                          roselle@wondros.com
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid
            sx={{ borderBottom: 1, borderColor: "divider", width: "100%" }}
          ></Grid>
        </Grid>
      </Box>
      <Grid container>
        <Grid
          item
          md={12}
          mt={3}
          sx={{ borderTop: 1, borderColor: "#BEBEBE", width: "100%" }}
        ></Grid>
        <Grid item md={2.152}></Grid>
        <Grid item md={1} mt={1.5}></Grid>
        <Grid item md={1} mt={1.5}>
          <Typography sx={{ color: "transparent" }}>Center</Typography>
        </Grid>
        <Grid item md={1} mt={1.5}></Grid>
        <Grid item md={1} mt={1.5}></Grid>
        <Grid item md={1} mt={1.5}></Grid>
      </Grid>

      {/* <Sort Popover> */}

      <Popover
        id="sortPopover"
        open={sortOpen}
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
                //className="handlesort"
                sx={{
                  zIndex: 1,
                  marginTop: "-48px",
                  marginLeft: "-3.5px",
                  height: "20px",
                }}
              >
                <Typography
                  // mr={0.5}
                  //className="fontsets"
                  className="fontset"
                  sx={{ color: "#4A4A4A", fontSize: "14px" }}
                >
                  SORT
                </Typography>
                <ExpandLessIcon sx={{ color: "#1E70B9", marginTop: "-1px" }} />
              </Button>
            </Grid>{" "}
            <Grid item md={12} mb={2} sx={{ marginTop: "-20px", zIndex: 2 }}>
              <FormGroup>
                <FormControlLabel
                  className="fontset"
                  sx={{ pt: 2.95, ml: "10px", pr: 2.95 }}
                  control={
                    <Checkbox
                      icon={
                        <CheckBoxOutlineBlankSharpIcon
                          sx={{
                            width: "16px",
                            height: "16px",
                            color: "#216FB4",
                          }}
                        />
                      }
                      checkedIcon={
                        <CheckBoxSharpIcon
                          sx={{
                            width: "16px",
                            height: "16px",
                            color: "#216FB4",
                          }}
                        />
                      }
                    />
                  }
                  label="Status"
                />
              </FormGroup>
              <FormGroup>
                <FormControlLabel
                  sx={{ pt: 0.8, ml: "10px", pr: 1 }}
                  control={
                    <Checkbox
                      icon={
                        <CheckBoxOutlineBlankSharpIcon
                          sx={{
                            width: "16px",
                            height: "16px",
                            color: "#216FB4",
                          }}
                        />
                      }
                      checkedIcon={
                        <CheckBoxSharpIcon
                          sx={{
                            width: "16px",
                            height: "16px",
                            color: "#216FB4",
                          }}
                        />
                      }
                    />
                  }
                  label="Newest Requests"
                />
              </FormGroup>
              <FormGroup>
                <FormControlLabel
                  sx={{ pt: 0.8, ml: "10px", pr: 1 }}
                  control={
                    <Checkbox
                      icon={
                        <CheckBoxOutlineBlankSharpIcon
                          sx={{
                            width: "16px",
                            height: "16px",
                            color: "#216FB4",
                          }}
                        />
                      }
                      checkedIcon={
                        <CheckBoxSharpIcon
                          sx={{
                            width: "16px",
                            height: "16px",
                            color: "#216FB4",
                          }}
                        />
                      }
                    />
                  }
                  label="Oldest Requests"
                />
              </FormGroup>
              <FormGroup>
                <FormControlLabel
                  sx={{ pt: 0.8, ml: "10px", pr: 1 }}
                  control={
                    <Checkbox
                      icon={
                        <CheckBoxOutlineBlankSharpIcon
                          sx={{
                            width: "16px",
                            height: "16px",
                            color: "#216FB4",
                          }}
                        />
                      }
                      checkedIcon={
                        <CheckBoxSharpIcon
                          sx={{
                            width: "16px",
                            height: "16px",
                            color: "#216FB4",
                          }}
                        />
                      }
                    />
                  }
                  label="High Priority"
                />
              </FormGroup>
              <FormGroup>
                <FormControlLabel
                  sx={{ pt: 0.8, ml: "10px", pr: 1 }}
                  control={
                    <Checkbox
                      icon={
                        <CheckBoxOutlineBlankSharpIcon
                          sx={{
                            width: "16px",
                            height: "16px",
                            color: "#216FB4",
                          }}
                        />
                      }
                      checkedIcon={
                        <CheckBoxSharpIcon
                          sx={{
                            width: "16px",
                            height: "16px",
                            color: "#216FB4",
                          }}
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

      {/* Status Popover */}

      <Popover
        id="statusPopover"
        open={statusOpen}
        anchorEl={state.statusAnchorEl}
        onClose={handleCloseStatus}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Box sx={{ display: "flex", mr: "210px" }}>
          {" "}
          <Box className="statusBox">
            <Grid className="statusPopperContainer" container>
              <Grid item md={8.45}></Grid>
              <Grid item md={1.6}>
                <Button
                  onClick={handleCloseStatus}
                  sx={{
                    zIndex: 1,
                    marginTop: "-48px",
                    marginLeft: "9.5px",
                    height: "20px",
                  }}
                >
                  <Typography
                    // mr={0.5}
                    className="fontset"
                    sx={{ color: "#4A4A4A", fontSize: "14px" }}
                  >
                    STATUS
                  </Typography>
                  <ExpandLessIcon
                    sx={{ color: "#1E70B9", marginTop: "-1px" }}
                  />
                </Button>
              </Grid>
              <Grid item md={1.95}>
                <Button className="underlined">Clear All</Button>
              </Grid>
              <Grid item md={0.2}></Grid>
              <Grid item md={5.8} mb={3}>
                <FormGroup>
                  <FormControlLabel
                    className="fontset"
                    sx={{ pt: 2.95, ml: "10px", pr: 2.95 }}
                    control={
                      <Checkbox
                        icon={
                          <CheckBoxOutlineBlankSharpIcon
                            sx={{
                              width: "16px",
                              height: "16px",
                              color: "#216FB4",
                            }}
                          />
                        }
                        checkedIcon={
                          <CheckBoxSharpIcon
                            sx={{
                              width: "16px",
                              height: "16px",
                              color: "#216FB4",
                            }}
                          />
                        }
                      />
                    }
                    label="Request Intake"
                  />
                </FormGroup>
                <FormGroup>
                  <FormControlLabel
                    className="fontset"
                    sx={{ pt: 2.95, ml: "10px", pr: 2.95 }}
                    control={
                      <Checkbox
                        icon={
                          <CheckBoxOutlineBlankSharpIcon
                            sx={{
                              width: "16px",
                              height: "16px",
                              color: "#216FB4",
                            }}
                          />
                        }
                        checkedIcon={
                          <CheckBoxSharpIcon
                            sx={{
                              width: "16px",
                              height: "16px",
                              color: "#216FB4",
                            }}
                          />
                        }
                      />
                    }
                    label="In Production"
                  />
                </FormGroup>
                <FormGroup>
                  <FormControlLabel
                    className="fontset"
                    sx={{ pt: 2.95, ml: "10px", pr: 2.95 }}
                    control={
                      <Checkbox
                        icon={
                          <CheckBoxOutlineBlankSharpIcon
                            sx={{
                              width: "16px",
                              height: "16px",
                              color: "#216FB4",
                            }}
                          />
                        }
                        checkedIcon={
                          <CheckBoxSharpIcon
                            sx={{
                              width: "16px",
                              height: "16px",
                              color: "#216FB4",
                            }}
                          />
                        }
                      />
                    }
                    label="Prep Final Files"
                  />
                </FormGroup>
              </Grid>
              <Grid item md={0.2}></Grid>
              <Grid item md={5.8}>
                <FormGroup>
                  <FormControlLabel
                    className="fontset"
                    sx={{ pt: 2.95, ml: "10px", pr: 2.95 }}
                    control={
                      <Checkbox
                        icon={
                          <CheckBoxOutlineBlankSharpIcon
                            sx={{
                              width: "16px",
                              height: "16px",
                              color: "#216FB4",
                            }}
                          />
                        }
                        checkedIcon={
                          <CheckBoxSharpIcon
                            sx={{
                              width: "16px",
                              height: "16px",
                              color: "#216FB4",
                            }}
                          />
                        }
                      />
                    }
                    label="Request Intake"
                  />
                </FormGroup>
                <FormGroup>
                  <FormControlLabel
                    className="fontset"
                    sx={{ pt: 2.95, ml: "10px", pr: 2.95 }}
                    control={
                      <Checkbox
                        icon={
                          <CheckBoxOutlineBlankSharpIcon
                            sx={{
                              width: "16px",
                              height: "16px",
                              color: "#216FB4",
                            }}
                          />
                        }
                        checkedIcon={
                          <CheckBoxSharpIcon
                            sx={{
                              width: "16px",
                              height: "16px",
                              color: "#216FB4",
                            }}
                          />
                        }
                      />
                    }
                    label="In Production"
                  />
                </FormGroup>
                <FormGroup>
                  <FormControlLabel
                    className="fontset"
                    sx={{ pt: 2.95, ml: "10px", pr: 2.95 }}
                    control={
                      <Checkbox
                        icon={
                          <CheckBoxOutlineBlankSharpIcon
                            sx={{
                              width: "16px",
                              height: "16px",
                              color: "#216FB4",
                            }}
                          />
                        }
                        checkedIcon={
                          <CheckBoxSharpIcon
                            sx={{
                              width: "16px",
                              height: "16px",
                              color: "#216FB4",
                            }}
                          />
                        }
                      />
                    }
                    label="Prep Final Files"
                  />
                </FormGroup>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Popover>

      {/* request type popover */}
      <Popover
        id="popoverBorder"
        open={reqopen}
        anchorEl={state.reqanchorEl}
        onClose={handleClose}
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
                onClick={handleClose}
                sx={{
                  zIndex: 1,
                  marginTop: "-46px",
                  marginLeft: "1px",
                  height: "20px",
                  width: "155px",
                }}
              >
                <Typography
                  // mr={0.5}
                  className="fontset"
                  sx={{ color: "#4A4A4A", fontSize: "14px" }}
                >
                  REQUEST TYPE
                </Typography>
                <ExpandLessIcon sx={{ color: "#1E70B9", marginTop: "-1px" }} />
              </Button>
            </Grid>
            <Grid item md={1.9}></Grid>
            <Grid item md={4.1}>
              <Button className="underlined">Clear All</Button>
            </Grid>
            <Grid item md={12} mb={3}>
              <FormGroup>
                <FormControlLabel
                  sx={{ pt: 0.8, pl: 2.95, pr: 2.95 }}
                  control={
                    <Checkbox
                      icon={
                        <CheckBoxOutlineBlankSharpIcon
                          sx={{
                            width: "16px",
                            height: "16px",
                            color: "#216FB4",
                          }}
                        />
                      }
                      checkedIcon={
                        <CheckBoxSharpIcon
                          sx={{
                            width: "16px",
                            height: "16px",
                            color: "#216FB4",
                          }}
                        />
                      }
                    />
                  }
                  label="Request Intake."
                />
              </FormGroup>
              <FormGroup>
                <FormControlLabel
                  sx={{ pt: 0.8, pl: 2.95, pr: 2.95 }}
                  control={
                    <Checkbox
                      icon={
                        <CheckBoxOutlineBlankSharpIcon
                          sx={{
                            width: "16px",
                            height: "16px",
                            color: "#216FB4",
                          }}
                        />
                      }
                      checkedIcon={
                        <CheckBoxSharpIcon
                          sx={{
                            width: "16px",
                            height: "16px",
                            color: "#216FB4",
                          }}
                        />
                      }
                    />
                  }
                  label="Request Under Approval."
                />
              </FormGroup>
              <FormGroup>
                <FormControlLabel
                  sx={{ pt: 0.8, pl: 2.95, pr: 2.95 }}
                  control={
                    <Checkbox
                      icon={
                        <CheckBoxOutlineBlankSharpIcon
                          sx={{
                            width: "16px",
                            height: "16px",
                            color: "#216FB4",
                          }}
                        />
                      }
                      checkedIcon={
                        <CheckBoxSharpIcon
                          sx={{
                            width: "16px",
                            height: "16px",
                            color: "#216FB4",
                          }}
                        />
                      }
                    />
                  }
                  label="Spanish Review or Transition."
                />
              </FormGroup>
              <FormGroup>
                <FormControlLabel
                  sx={{ pt: 0.8, pl: 2.95, pr: 2.95 }}
                  control={
                    <Checkbox
                      icon={
                        <CheckBoxOutlineBlankSharpIcon
                          sx={{
                            width: "16px",
                            height: "16px",
                            color: "#216FB4",
                          }}
                        />
                      }
                      checkedIcon={
                        <CheckBoxSharpIcon
                          sx={{
                            width: "16px",
                            height: "16px",
                            color: "#216FB4",
                          }}
                        />
                      }
                    />
                  }
                  label="Logos and Lockups."
                />
              </FormGroup>
            </Grid>
          </Grid>
        </Box>
      </Popover>

      {/* prepfinal progress bar popover */}
    </Container>
  );
}

export default Detail;
