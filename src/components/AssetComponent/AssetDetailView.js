import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
  Accordion,
  AccordionDetails,
  Divider,
  Popper,
  Fade,
  Paper,
  Button,
  Collapse,
} from "@mui/material";
import HighLogo from "images/logos/High.webp";
import Triangleup from "images/Icons/Triangleup.webp";
import Triangledown from "images/Icons/Triangledown.webp";
import LowLogo from "images/logos/Low.webp";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ContentCopySharpIcon from "@mui/icons-material/ContentCopySharp";
import SaveAltSharpIcon from "@mui/icons-material/SaveAltSharp";
import CircleIcon from "@mui/icons-material/Circle";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import jsPDF from "jspdf";
import { Anchor } from "@mui/icons-material";
import { ProgressPopover } from "components/Popovers";
import * as htmlToImage from "html-to-image";
import { Link } from "react-router-dom";
import "../../Style/components/Activeassets/assetdetailview.scss";
function AssetDetailView({ asset, statusValues }) {
  const [openDetails, setOpenDetails] = useState(false);
  const [progressAnchor, setProgressAnchor] = useState(null);
  const [popOverOpen, setPopOverOpen] = useState(false);
  const [popOverTitle, setPopOverTitle] = useState("");
  const [popOverDuration, setpopOverDuration] = useState("");
  const [extraDetails, setExtraDetails] = useState("");
  const [openCopyPopup, setOpenCopyPopup] = useState(false);
  const [anchorCopy, setAnchorCopy] = useState(null);
  const detailPopOverMouseIn = (event) => {
    setProgressAnchor(event.currentTarget);
    setPopOverOpen(true);
  };
  const detailPopOverMouseOut = (event) => {
    setProgressAnchor(null);
    setPopOverOpen(false);
  };

  const handleClickpop = (event) => {
    setAnchorCopy(event.currentTarget);
    setOpenCopyPopup(true);
    setTimeout(() => {
      setOpenCopyPopup(false);
    }, 1500);
  };

  const printDocument = () => {
    // htmlToImage
    //   .toPng(document.getElementById("accordian1"), { quality: 1 })
    //   .then(function (dataUrl) {
    //     var link = document.createElement("a");
    //     link.download = "my-image-name.jpeg";
    //     const pdf = new jsPDF("landscape", "pt", "a4", "true");
    //     pdf.addImage(dataUrl, "PNG", -10, 30);
    //     pdf.save("assetreport.pdf");
    //   });
  };

  return (
    <>
      <Grid container>
        <Grid item md={2.5}>
          <Typography
            className="gBold purple"
            variant="body"
            sx={{
              fontSize: "16px",
              letterSpacing: "-0.2px",
            }}
          >
            {statusValues != null &&
              statusValues.rawStatus.map((a) => {
                return a.wrike_status_id === asset.custom_status_id
                  ? a.name
                  : "";
              })}
          </Typography>
        </Grid>
        <Grid item md={9.4} sx={{ display: "-webkit-flex" }}>
          {asset.task_importance === "Normal" && (
            <img
              style={{ marginTop: "6px" }}
              src={LowLogo}
              alt="lp"
              className="logoImage"
            />
          )}
          {asset.task_importance === "High" && (
            <img
              style={{ marginTop: "6px" }}
              src={HighLogo}
              alt="lp"
              className="logoImage"
            />
          )}
          <Typography className="gMedium grey font16">{asset.title}</Typography>
        </Grid>
        <Grid item md={2}>
          <Button
            className={!openDetails ? "vmore" : "vmore viewmhide"}
            sx={{ cursor: "pointer", display: "-webkit-flex" }}
            item
            pt={"12px"}
            md={1.2}
            onClick={() => {
              setOpenDetails(true);
            }}
          >
            <Typography className="fontset grey" sx={{ fontSize: "14px" }}>
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
          </Button>
          <Button
            className={openDetails ? "vless" : "vless viewmhide"}
            sx={{ cursor: "pointer", display: "-webkit-flex" }}
            item
            pt={"12px"}
            md={1.2}
            onClick={() => {
              setOpenDetails(false);
            }}
          >
            <Typography className="fontset grey" sx={{ fontSize: "14px" }}>
              VIEW LESS
            </Typography>

            <img
              style={{
                marginLeft: "5px",
                marginTop: "3px",
                height: "14px",
                width: "14px",
              }}
              src={Triangledown}
              alt="hp"
              className="logoImage"
            />
          </Button>
        </Grid>
        <Grid item md={0.5} pt={"10px"}></Grid>
        <Grid
          item
          md={9.4}
          pt={"10px"}
          xs={12}
          sx={{
            display: "-webkit-flex",
          }}
        >
          <Box className="line"></Box>
          <Box
            sx={{
              display: "-webkit-flex",
              bgcolor: "#EDEDF5",
              width: "100%",
              height: "20px",
            }}
          >
            <Box
              className="bOrange"
              sx={{
                bgcolor: "#F7AB71",
                width: "25%",
                height: "100%",
                cursor: "pointer",
              }}
              aria-owns={popOverOpen ? "mouse-over-progress" : undefined}
              aria-haspopup="true"
              onMouseEnter={detailPopOverMouseIn}
              onMouseLeave={detailPopOverMouseOut}
            ></Box>

            {/* <Box
              sx={{
                height: "100%",
                cursor: "pointer",
                width: "30%",
              }}
              aria-owns={
                progressBaropen ? "mouse-over-progressBarpopover" : undefined
              }
              aria-haspopup="true"
              onMouseEnter={progressBarPopoverOpen}
              onMouseLeave={progressBarPopoverClose}
            >
            </Box> */}
          </Box>
        </Grid>
        <Grid item md={0.3}></Grid>
        <Grid item md={0.1}></Grid>
        <Grid item md={2.27} className="accordGrid"></Grid>
        <Grid item md={0.3} mb={2} sx={{ textAlign: "center" }}>
          <div>
            <Typography
              className="fontset purple"
              variant="body"
              sx={{ fontSize: "14px" }}
            >
              {asset.submission_date_formatted}
            </Typography>
          </div>
        </Grid>
        <Grid item md={9} sx={{ display: "-webkit-flex", textAlign: "center" }}>
          <Box sx={{ width: "63.2%" }}></Box>
          <Box sx={{ width: "80.56px" }}>
            <ArrowDropUpIcon
              className="gBold purple"
              sx={{
                width: "30px",
                height: "30px",
                marginTop: "-15px",
              }}
            />
            <Typography
              className="gBold purple"
              variant="body"
              sx={{
                fontSize: "14px",
                display: "block",
                marginTop: "-15px",
              }}
            >
              TODAY
            </Typography>
            <Typography
              className="fontset purple"
              variant="body"
              sx={{ fontSize: "14px" }}
            >
              {asset.days_till_today} days
            </Typography>
          </Box>
        </Grid>
        <Grid
          sx={{
            borderLeft: 2,
            borderColor: "#5eaee0",
          }}
          item
          md={11.9}
          mb={2}
        >
          {/* "Accordian 1 " */}

          <Collapse in={openDetails}>
            <Grid container>
              <Grid item md={7} pr={8} pl={"29.5px"}>
                <Grid
                  container
                  id="downloadcontent"
                  ml={2}
                  mt={1.6}
                  className="dwcontent"
                >
                  {asset.reference_entities != null &&
                    asset.reference_entities.length &&
                    asset.reference_entities.map((childAsset) => (
                      <>
                        <Grid item md={2.155} mt={"-3px"}>
                          <Typography className="gBold font12 grey">
                            {childAsset.updated_date}
                          </Typography>
                        </Grid>
                        <Grid item md={0.5}>
                          <CircleIcon
                            className="mycircle"
                            sx={{
                              fontSize: "13px",
                              color: "#7AC79D",
                              zIndex: 1,
                            }}
                          />
                        </Grid>
                        <Grid item md={9} ml={1} mt={"-2px"}>
                          <Typography
                            className="gBold purple font16"
                            sx={{
                              lineHeight: "16px",
                            }}
                          >
                            {statusValues != null &&
                              statusValues.rawStatus.map((a) => {
                                return a.wrike_status_id ===
                                  childAsset.custom_status_id
                                  ? a.name
                                  : "";
                              })}
                          </Typography>
                        </Grid>
                        <Grid item md={2.27}></Grid>
                        <Grid
                          item
                          className="mycontainer"
                          sx={{
                            borderLeft: 2,
                            borderColor: "divider",
                          }}
                          md={0.18}
                        ></Grid>
                        <Grid item md={9} ml={1.5} mt={"2px"} pb={2}>
                          <Typography
                            className="gbItalic font12 grey"
                            sx={{
                              lineHeight: "16px",
                              letterSpacing: "0.1px",
                              paddingLeft: "8px",
                            }}
                          >
                            {statusValues != null &&
                              statusValues.rawStatus.map((a) => {
                                return a.wrike_status_id ===
                                  childAsset.custom_status_id
                                  ? a.name
                                  : "";
                              })}
                          </Typography>
                        </Grid>
                      </>
                    ))}
                  <>
                    <Grid item md={2.155} mt={"-3px"}>
                      <Typography className="gBold font12 grey">
                        {asset.updated_date}
                      </Typography>
                    </Grid>
                    <Grid item md={0.5}>
                      <CircleIcon
                        className="mycircle"
                        sx={{
                          fontSize: "13px",
                          color: "#C9DB85",
                          zIndex: 1,
                        }}
                      />
                    </Grid>
                    <Grid item md={9} ml={1} mt={"-2px"}>
                      <Typography
                        className="gBold purple font16"
                        sx={{
                          lineHeight: "16px",
                        }}
                      >
                        {statusValues != null &&
                          statusValues.rawStatus.map((a) => {
                            return a.wrike_status_id === asset.custom_status_id
                              ? `${a.name} (${asset.days_till_today}d)`
                              : "";
                          })}
                      </Typography>
                    </Grid>
                    <Grid item md={2.27}></Grid>
                    <Grid item className="mycontainer" md={0.18}></Grid>
                    <Grid item md={9} ml={1.5} mt={"2px"} pb={2}>
                      <Typography
                        className="gbItalic font12 grey"
                        sx={{
                          lineHeight: "16px",
                          letterSpacing: "0.1px",
                          paddingLeft: "8px",
                        }}
                      >
                        {statusValues != null &&
                          statusValues.rawStatus.map((a) => {
                            return a.wrike_status_id === asset.custom_status_id
                              ? a.name
                              : "";
                          })}
                      </Typography>
                    </Grid>
                  </>
                  {/* date wise track grid   */}
                </Grid>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item mt={1.6} md={4} ml={4}>
                <Grid container id="accordian2">
                  <Grid item md={0.4}></Grid>
                  <Grid
                    onClick={printDocument}
                    item
                    md={0.9}
                    sx={{
                      color: "#216fb4",
                      alignContent: "center",
                      cursor: "pointer",
                    }}
                  >
                    <SaveAltSharpIcon />
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
                    md={2.2}
                    sx={{
                      color: "#216fb4",
                      textAlign: "center",
                      cursor: "pointer",
                    }}
                    onClick={handleClickpop}
                  >
                    <Popper
                      className="sucesspopper"
                      open={openCopyPopup}
                      anchorEl={anchorCopy}
                      placement={"top-start"}
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

                    <ContentCopySharpIcon />
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
                  <Grid item md={9.9}></Grid>
                  <Grid item md={12} pt={5} pb={1.25}>
                    <Typography
                      variant="body"
                      sx={{
                        fontSize: 14,
                        fontWeight: "bold",
                      }}
                      className=" astoverview"
                    >
                      Asset Overview
                    </Typography>
                  </Grid>
                  <Grid item md={4.6}>
                    <Typography
                      variant="body"
                      className="fontset Type"
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
                      className="fontset TypeName"
                      sx={{
                        fontSize: 12,
                      }}
                    >
                      {asset.request_type}
                    </Typography>
                  </Grid>
                  <Grid item md={4.6}>
                    <Typography
                      variant="body"
                      className="fontset grey"
                      sx={{
                        fontSize: 12,
                      }}
                    >
                      Format:
                    </Typography>
                  </Grid>
                  <Grid item md={7.4} mt={1}>
                    <Typography
                      variant="body"
                      className="fontset TypeName"
                      sx={{
                        fontSize: 12,
                      }}
                    >
                      {asset.format}
                    </Typography>
                  </Grid>
                  <Grid item md={12} pb={1.25} pt={3.25}>
                    <Typography variant="body" className=" font14 astoverview">
                      Request Overview
                    </Typography>
                  </Grid>
                  <Grid item md={4.6}>
                    <Typography
                      variant="body"
                      className="fontset grey"
                      sx={{
                        fontSize: 12,
                      }}
                    >
                      Requester:
                    </Typography>
                  </Grid>
                  <Grid item md={7.4} sx={{ paddingTop: "8px" }}>
                    <Typography
                      variant="body"
                      className="fontset Cathryn-Peltz"
                      sx={{
                        fontSize: 12,
                      }}
                    >
                      {asset.requester}
                    </Typography>
                  </Grid>
                  <Grid item md={4.6}>
                    <Typography
                      variant="body"
                      className="fontset grey"
                      sx={{
                        fontSize: 12,
                        color: "#4A4A4A",
                      }}
                    >
                      Affiliation:
                    </Typography>
                  </Grid>
                  <Grid item md={7.4}>
                    <Typography
                      variant="body"
                      className="fontset TransAmerican-Consor"
                      sx={{
                        fontSize: 12,
                      }}
                    >
                      {asset.affiliation}
                    </Typography>
                  </Grid>
                  <Grid item md={4.6} mb={2.5}>
                    <Typography
                      variant="body"
                      className="fontset grey"
                      sx={{
                        fontSize: 12,
                      }}
                    >
                      Partner:
                    </Typography>
                  </Grid>
                  <Grid item md={7.4}>
                    <Typography
                      variant="body"
                      className="fontset Partner"
                      sx={{
                        fontSize: 12,
                      }}
                    >
                      {asset.partner}
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
                    mb={2.375}
                  ></Grid>
                  <Grid item md={4.6}>
                    <Typography
                      variant="body"
                      className="fontset grey"
                      sx={{
                        fontSize: 12,
                      }}
                    >
                      Request Type:
                    </Typography>
                  </Grid>
                  <Grid item md={7.4} mb={1} sx={{ paddingTop: "7px" }}>
                    <Typography
                      variant="body"
                      className="fontset ReqType"
                      sx={{
                        fontSize: 12,
                      }}
                    >
                      {asset.request_type}
                    </Typography>
                  </Grid>
                  <Grid item md={4.6}>
                    <Typography
                      variant="body"
                      className="fontset grey"
                      sx={{
                        fontSize: 12,
                      }}
                    >
                      Request ID:
                    </Typography>
                  </Grid>
                  <Grid item md={7.4} sx={{ paddingTop: "10px" }}>
                    <Typography
                      variant="body"
                      className="fontset id"
                      sx={{
                        fontSize: 12,
                      }}
                    >
                      {asset.task_id}
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
                    mb={"19px"}
                  ></Grid>
                  <Grid item md={4.6}>
                    <Typography
                      variant="body"
                      className="fontset grey"
                      sx={{
                        fontSize: 12,
                      }}
                    >
                      Wondros Contact:
                    </Typography>
                  </Grid>
                  <Grid item md={7.4} sx={{ paddingTop: "5px" }}>
                    <Typography
                      variant="body purple"
                      className="fontset contact"
                      sx={{
                        fontSize: 12,
                      }}
                    >
                      {asset.wondros_contact}
                    </Typography>
                  </Grid>
                  <Grid item md={4.6} mb={1}>
                    <Typography
                      variant="body"
                      className="fontset grey"
                      sx={{
                        fontSize: 12,
                      }}
                    >
                      Contact Email:
                    </Typography>
                  </Grid>
                  <Grid item md={7.4} sx={{ paddingTop: "6px" }}>
                    <Typography
                      variant="body"
                      className="fontset email"
                      sx={{
                        fontSize: 12,
                      }}
                    >
                      {asset.contact_email}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Collapse>
        </Grid>
        <Grid
          sx={{
            marginTop: "10px",
            marginBottom: "20px",
            borderBottom: "0.5px solid",
            borderColor: "#cecece",
            width: "100%",
          }}
        />
      </Grid>
      <ProgressPopover
        pfinalanchorEl={progressAnchor}
        popOverOpen={popOverOpen}
        lable={popOverTitle}
        duration={popOverDuration}
        extraDetails={extraDetails}
      />
    </>
  );
}

export default AssetDetailView;
