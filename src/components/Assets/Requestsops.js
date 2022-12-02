import React, { Component } from "react";
import Step1 from "images/Pics/Step1.webp";
import Step2 from "images/Pics/Step2.webp";
import Step3 from "images/Pics/Step3.webp";
import Video from "images/Pics/Video.jpg";
import { Container, Box, Typography, Grid } from "@mui/material";
import "../../Style/components/Requestsops/requestsops.scss";
import Footer from "../Footer/FooterReq";
function Requestsop() {
  return (
    <Container id="sopcont">
      <Typography
        className="gBlack grey font30"
        pt={3.25}
        // sx={{
        //   letterSpacing: "-0.4px",
        //   lineHeight: "36px",
        // }}
      >
        Request Standard Operating Procedures (SOPs)
      </Typography>
      <Typography
        className="gBold purple"
        // sx={{
        //   marginTop: "40px",
        //   fontSize: "18px",
        //   letterSpacing: "-0.1px",
        //   lineHeight: "24px",
        // }}
      >
        Are there specific procedures I need to follow before sending in a
        request?
      </Typography>
      <Typography
        className="req"
        // sx={{
        //   marginTop: "20px",
        //   fontSize: "14px",
        //   letterSpacing: "0.1px",
        //   lineHeight: "22px",
        // }}
      >
        The short answer is yes!
      </Typography>

      <Typography
        pb={7.5}
        // className="reqs"
        //className="fontset2 grey3"
        sx={{
          width: "1167px",
          height: "84px",
          fontFamily: "GothamBook !important",
          fontSize: "14px !important",
          fontWeight: "normal",
          fontStretch: "normal",
          fontStyle: "normal",
          lineHeight: "1.57",
          letterSpacing: "0.1px",
          color: "#4a4a4a !important",
          marginTop: "16px",
        }}
      >
        We will happily work with you to ensure your asset request gets approved
        and created in a timely fashion. However, we do have standard operating
        procedures (SOPs) we ask that you follow in order to avoid delaying
        approval of your asset request.
      </Typography>

      <div className="Line-CopyR"></div>
      <Grid container pt={"59px"}>
        <Grid item md={1.3}></Grid>
        <Grid item md={1.3}>
          <img
            className="imgstyle"
            src={Step1}
            // style={{ width: "100px", height: "100px" }}
          />
        </Grid>
        <Grid item md={0.5}></Grid>
        <Grid item md={7.7} mt={"12px"}>
          <Typography
            className="Read-the-Mock-Up-M"
            // sx={{
            //   fontSize: "18px",
            //   letterSpacing: "-0.1px",
            //   lineHeight: "24px",
            // }}
          >
            Read the Mock-Up & Modification SOPs
          </Typography>

          <Typography
            pt={1.5}
            pb={5}
            className="We-ask-that-you-log"
            sx={{
              fontSize: "14px",
              letterSpacing: "0.1px",
              lineHeight: "22px",
            }}
          >
            We ask that you log in to your Collaboration Hub account and
            familiarize yourself with the
            <span
              className="text-style-1"
              // style={{
              //   textDecoration: "underline",
              //   color: "#216fb4",
              //   cursor: "pointer",
              // }}
            >
              Mock-Up & Modification Standard Operating Procedures.
            </span>
          </Typography>
        </Grid>
        <Grid item md={1.2}></Grid>
        <Grid
          item
          mt={-4.5}
          mb={-0.5}
          md={1.83}
          className="griddash"
          // sx={{
          //   zIndex: -1,
          //   borderRight: "1px dashed",
          //   borderColor: "#5eaee0",
          //   height: "76px",
          // }}
        ></Grid>
        <Grid item md={10}></Grid>
        <Grid item md={1.3}></Grid>
        <Grid item md={1.3}>
          <div className="img">
            <img
              className="imgstyle1"
              src={Step2}
              // style={{ width: "100px", height: "100px" }}
            />
          </div>
        </Grid>
        <Grid item md={0.5}></Grid>
        <Grid item md={4.37}>
          
          <Typography
            className="Watch-the-Video-Tuto"
            // sx={{
            //   fontSize: "18px",
            //   letterSpacing: "-0.1px",
            //   lineHeight: "24px",
            // }}
          >
            Watch the Video Tutorial on the Mock-Up & Modification SOPs
          </Typography>
          <Typography
            pt={"12px"}
            pb={0.25}
            className="After-reading-the-Mo"
            // sx={{
            //   fontSize: "14px",
            //   letterSpacing: "0.1px",
            //   lineHeight: "22px",
            // }}
          >
            After reading the
            <span
              className="text-style-1"
              // style={{
              //   textDecoration: "underline",
              //   color: "#216fb4",
              //   cursor: "pointer",
              // }}
            >
              Mock-Up & Modification Standard Operating Procedures
            </span>
            on the Collaboration Hub, please watch the video tutorial on the
            Mock-Up & Modification SOPs.
          </Typography>
        </Grid>
        <Grid item md={4} pl={"20px"}>
          <div className="video">
            <img
              src={Video}
              className="imgstyle2"
              // style={{ width: "300px", height: "168px", cursor: "pointer" }}
            />
          </div>
        </Grid>
        <Grid
          item
          mt={-9}
          mb={-2}
          md={1.83}
          className="griddash"
          // sx={{
          //   zIndex: -1,
          //   borderRight: "1px dashed",
          //   borderColor: "#5eaee0",
          //   height: "76px",
          // }}
        ></Grid>
        <Grid item md={10}></Grid>
        <Grid item md={1.3}></Grid>
        <Grid item md={1.3} pt={0.25}>
          <div className="img">
            <img
              className="imgstyle2"
              src={Step3}
              // style={{ width: "100px", height: "100px" }}
            />
          </div>
        </Grid>
        <Grid item md={0.5}></Grid>
        <Grid item md={7.7} mt={2}>
          <Typography
            className="Asset-Development-Ch"
            // sx={{
            //   fontSize: "18px",
            //   letterSpacing: "-0.1px",
            //   lineHeight: "24px",
            // }}
          >
            Asset Development Checklist
          </Typography>
          <Typography
            mt={"12px"}
            mb={5}
            className="To-ensure-accurate"
            // sx={{
            //   fontSize: "14px",
            //   letterSpacing: "0.1px",
            //   lineHeight: "22px",
            // }}
          >
            To ensure accurate, clear, and effective communication for your new
            or modified asset, review the
            <span
              className="text-style-1"
              // style={{
              //   textDecoration: "underline",
              //   color: "#216fb4",
              //   cursor: "pointer",
              // }}
            >
              Asset Development Checklist
            </span>
            before submitting it for NIH review via the Asset Portal.
          </Typography>
        </Grid>
      </Grid>
      <div className="Line-CopyS"></div>
      <Footer />
    </Container>
  );
}

export default Requestsop;
