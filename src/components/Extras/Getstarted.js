import React, { Component } from "react";
import AssetTrackerVideo from "videos/AssetTrackerVideo.webp";
import Image1 from "images/Pics/image-track.png";
import Image2 from "images/Pics/status-image.png";
import Image3 from "images/Pics/get-strated-graphic-3.png";
import Image4 from "images/Pics/image4.webp";
import "Style/components/Extras/Getstarted/getstarted.scss";
import Footer from "../Footer/FooterGet";
import {
  Container,
  Box,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardActionArea,
} from "@mui/material";
function Getstarted() {
  return (
    <Box className="getstartedbox">
      <Container className="getstartedContainer">
        <Box>
          {" "}
          <Box pt={3.25}>
            <Grid container>
              <Grid item md={12} xs={12} pb={5}>
                <h1
                  pl={9}
                  //className="assetsHeading gBlack grey1"
                  variant="body font30"
                  // sx={{
                  //   lineHeight: "36px",
                  //   letterSpacing: "-0.4px",
                  // }}
                >
                  Get Started
                </h1>
              </Grid>
              <Grid item md={12} xs={12} pb={2.5}>
                <Typography
                  pl={9}
                  className="para"
                  // sx={{
                  //   fontSize: "18px",
                  //   lineHeight: "24px",
                  //   letterSpacing: "-0.1px",
                  // }}
                >
                  Welcome.
                </Typography>
              </Grid>
              <Grid item md={12} xs={12} pb={2}>
                <Typography
                  pl={9}
                  className="get"
                  // sx={{
                  //   lineHeight: "22px",
                  //   letterSpacing: "-0.1px",
                  // }}
                >
                  We're so glad you're here! We know how important messaging is
                  to engage and recruit new participants, retain those enrolled,
                  and raise awareness about the
                  {/* <Box
                    component="span"
                    className="gbItalic font14 grey1"
                    // sx={{
                    //   lineHeight: "22px",
                    //   letterSpacing: "-0.1px",
                    // }}
                  > */}
                  All of Us
                  {/* </Box>{" "} */}
                  Research Program. Having effective, timely assets that support
                  these efforts is of utmost importance.
                </Typography>
              </Grid>
              <Grid item md={12} xs={12}>
                <Typography
                  className="get"
                  pl={9}
                  // className="fontset1 font14 grey1"
                  // sx={{
                  //   lineHeight: "22px",
                  //   letterSpacing: "-0.1px",
                  // }}
                >
                  To support this, and you, further, we've created the{" "}
                  <Box
                    component="span"
                    // className="gbItalic font14 grey1"
                    // sx={{
                    //   lineHeight: "22px",
                    //   letterSpacing: "-0.1px",
                    // }}
                  >
                    All of Us
                  </Box>{" "}
                  Asset Tracker. This comprehensive tool allows you to track
                  your asset request in real time.
                </Typography>
              </Grid>
              <Grid
                item
                md={12}
                xs={12}
                pb={7.5}
                pt={3.75}
                className="gridcenter"
                // sx={{ alignContent: "center" }}
              >
                <Card
                  className="tvideo"
                  // sx={{
                  //   maxWidth: "640px",
                  //   maxHeight: "360px",
                  //   borderRadius: 0,
                  //   boxShadow: 0,
                  //   marginLeft: "auto",
                  //   marginRight: "auto",
                  // }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="360"
                      image={AssetTrackerVideo}
                      alt="All of Us"
                    />
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>

      <Box className="bluebox">
        <Box
          className="boxcolor"
          // sx={{ width: "100%", backgroundColor: "#EDF7FF" }}
        >
          <Grid container>
            <Grid item md={5.5} xs={12} pb={5}>
              <Typography
                className="gBold purple"
                // sx={{
                //   fontSize: "18px",
                //   lineHeight: "24px",
                //   letterSpacing: "-0.1px",
                // }}
                pt={16.5}
                pl={12}
                pb={2}
              >
                {" "}
                What Is the{" "}
                <Box
                  component="span"
                  className="gBLItalic purple1"
                  // sx={{
                  //   fontSize: "18px",
                  //   lineHeight: "24px",
                  //   letterSpacing: "-0.1px",
                  //   display: "inline",
                  // }}
                >
                  All of Us
                </Box>{" "}
                Asset Tracker?
              </Typography>
              <Typography
                pl={12}
                pr={5}
                //className="fontset1 font14 grey1"
                // sx={{
                //   lineHeight: "22px",
                //   letterSpacing: "-0.1px",
                // }}
              >
                The{" "}
                <Box
                  component="span"
                  className="gbItalic1 grey2 font141"
                  // sx={{
                  //   display: "inline",
                  // }}
                >
                  All of Us
                </Box>{" "}
                Asset Tracker lets you easily track the movement of active as
                well as the last 30 days of completed assets. Our tool allows
                you to view the status of your asset(s) in the pipeline, from
                start to finish, and provides an approximate forecast of how
                long it will take for the asset(s) to be completed.
              </Typography>
            </Grid>
            <Grid item pt={7.5} xs={12} md={6.5}>
              <Card
                className="cardheight"
                // sx={{
                //   maxWidth: "540px",
                //   maxHeight: "320px",
                //   borderRadius: 0,
                //   boxShadow: 0,
                //   backgroundColor: "transparent",
                // }}
              >
                <CardMedia
                  component="img"
                  height="290"
                  image={Image1}
                  alt="All of Us"
                />
              </Card>
            </Grid>
            <Grid pt={11.5} pl={12} xs={10} item md={6.45} pr={5}>
              <Card
                className="cardheight"
                // sx={{
                //   maxWidth: "540px",
                //   maxHeight: "320px",
                //   borderRadius: 0,
                //   boxShadow: 0,
                //   backgroundColor: "transparent",
                // }}
              >
                <CardMedia
                  component="img"
                  height="290"
                  image={Image2}
                  alt="All of Us"
                />
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography
                className="gBold purple"
                // sx={{
                //   fontSize: "18px",
                //   lineHeight: "24px",
                //   letterSpacing: "-0.1px",
                // }}
                pt={17.75}
                pb={2}
              >
                Download PDFs of Asset Status and Share with Others.
              </Typography>
              <Typography
                mr={4}
                //className="fontset1 font14 grey1"
                // sx={{
                //   lineHeight: "22px",
                //   letterSpacing: "-0.1px",
                // }}
              >
                Clicking "View more" for an asset gives you additional
                information about the latest updates, status and timeline. To
                share with others, you can copy the URL link or download the
                PDF.
              </Typography>
            </Grid>
            <Grid item xs={12} md={5.5} pr={5}>
              <Typography
                className="gBold purple"
                // sx={{
                //   fontSize: "18px",
                //   lineHeight: "24px",
                //   letterSpacing: "-0.1px",
                // }}
                pt={21.875}
                pl={12}
                pb={2}
              >
                Utilize the Filter Function to Narrow Your Search
              </Typography>
              <Typography
                pl={12}
                pr={4}
                //className="fontset1 font14 grey1"
                // sx={{
                //   lineHeight: "22px",
                //   letterSpacing: "-0.1px",
                // }}
              >
                You can use the filter function to narrow Your view by status
                and request type.
              </Typography>
            </Grid>
            <Grid item md={6.5} xs={12} pt={13} pb={7.5}>
              <Card
                className="cardheight"
                // sx={{
                //   maxWidth: "540px",
                //   maxHeight: "320px",
                //   borderRadius: 0,
                //   boxShadow: 0,
                //   backgroundColor: "transparent",
                // }}
              >
                <CardMedia
                  component="img"
                  height="320"
                  image={Image3}
                  alt="All of Us"
                />
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Container className="getstartedContainer">
        <Grid container>
          <Grid item md={7} xs={12} pb={7} pr={7.5}>
            <Typography
              pl={9}
              className="gBold purple"
              // sx={{
              //   fontSize: "18px",
              //   lineHeight: "24px",
              //   letterSpacing: "-0.1px",
              // }}
              pt={7.5}
              // ml={12}
              pb={2.5}
            >
              When Can I Expect My Finished Asset?
            </Typography>
            <Typography
              // ml={12}
              pl={9}
              pr={4}
              className="fontset1"
            >
              You can use the Asset Tracker to view estimated timeline and
              completed assets.
            </Typography>
            <Typography
              pl={9}
              pt={2}
              pr={4}
              className="fontset1"
              // sx={{
              //   lineHeight: "22px",
              //   letterSpacing: "-0.1px",
              // }}
            >
              The timeline of your asset is projected at submission. The
              magnitude of the request is the primary driver of its timeline, as
              that informs which SOP we follow. Please note there are several
              other factors that can affect timelines, including the time of
              year (some seasons experience a higher intake volume). This will
              always be communicated to you.
            </Typography>
            <Typography
              pl={9}
              pt={2}
              pr={4}
              className="fontset1"
              // sx={{
              //   lineHeight: "22px",
              //   letterSpacing: "-0.1px",
              // }}
            >
              We understand the need for effective and efficient assets . Our
              goal is to deliver strong assets quickly while keeping you
              informed every step of the way.
            </Typography>
          </Grid>
          <Grid item md={5} xs={12} pt={7.5}>
            <Card
              className="cardheight2"
              // sx={{
              //   maxWidth: "460px",
              //   maxHeight: "280px",
              //   borderRadius: 0,
              //   boxShadow: 0,
              //   backgroundColor: "transparent",
              // }}
            >
              <CardMedia component="img" image={Image4} alt="All of Us" />
            </Card>
          </Grid>
        </Grid>
      </Container>
      <div className="Line-Copy"></div>
      <Footer />
    </Box>
  );
}

export default Getstarted;
