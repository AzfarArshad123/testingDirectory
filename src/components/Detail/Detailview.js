import React, { useEffect, useState } from "react";
import { Container, Box, Typography, Grid } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CircleIcon from "@mui/icons-material/Circle";
import {
  RequestTypePopover,
  SortPopover,
  StatusPopover,
} from "components/Popovers";
import HighLogo from "images/logos/High.webp";
import LowLogo from "images/logos/Low.webp";
import CloseIcon from "@mui/icons-material/Close";
import { getActiveAssetsByUser, getStatusAssets } from "api/apiMethods";
import AssetDetailView from "components/AssetComponent/AssetDetailView";

function Detailview() {
  const [statusAnchorEl, setStatusAncholEl] = useState(null);
  const [openStatus, setStateOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState([]);
  const [requestTypeAnchorEl, setrequestTypeAnchorEl] = useState(null);
  const [openRequestType, setRequestTypeOpen] = useState(false);
  const [selectedRequestTypes, setSelectedRequestTypes] = useState([]);
  const [sortAnchorEl, setSortAnchorEl] = useState(null);
  const [sortOpen, setSortOpen] = useState(false);
  const [selectedSortValues, setSelectedSortValues] = useState([]);
  const [filterNames, setFilterNames] = useState([]);
  const [activeAssets, setActiveAssets] = useState(null);
  const [statusDetails, setStatusDetails] = useState(null);

  const handleClickStatus = (event) => {
    setStatusAncholEl(event.currentTarget);
    setStateOpen(true);
  };
  const handleClickRequestType = (event) => {
    setrequestTypeAnchorEl(event.currentTarget);
    setRequestTypeOpen(true);
  };

  const handleClickSort = (event) => {
    setSortAnchorEl(event.currentTarget);
    setSortOpen(true);
  };

  const filterRemove = (event, filter) => {
    event.preventDefault();
    setFilterNames((prevState) => {
      return prevState.filter((a) => a != filter);
    });
    setSelectedSortValues((prevState) => {
      return prevState.filter((a) => a != filter);
    });
    setSelectedRequestTypes((prevState) => {
      return prevState.filter((a) => a != filter);
    });
    setSelectedStatus((prevState) => {
      return prevState.filter((a) => a != filter);
    });
  };

  useEffect(() => {
    if (statusDetails == null) {
      getStatusAssets().then((response) => {
        if (response !== false) {
          setStatusDetails(response);
        }
      });
    }
    getActiveAssetsByUser(
      8,
      selectedStatus,
      selectedRequestTypes,
      selectedSortValues
    ).then((response) => {
      if (response !== null) {
        setActiveAssets(response.data);
      }
    });
  }, [selectedStatus, selectedRequestTypes, selectedSortValues]);
  return (
    <Container className="projectContainer">
      <Box className="positionstatic">
        <Box pt={3.25}>
          <Grid container>
            <Grid md={5.95} lg={7.195} xs={3}>
              <Typography
                className="assetsHeading gBlack grey font30"
                variant="body"
              >
                {activeAssets != null ? activeAssets.length + " " : ""}
                Active Asset
              </Typography>
            </Grid>
            <Grid
              item
              className="gridCol"
              pt={1.4}
              md={0.8}
              lg={0.87}
              xs={12}
              pr={0.25}
            >
              <CircleIcon
                className="cOrange"
                sx={{
                  width: "13px",
                  height: "13px",
                  paddingTop: "3.5px",
                  marginRight: "4px",
                  color: "#f6ab76 !important",
                }}
              />
              <Typography
                className="fontset"
                sx={{ fontSize: "14px", color: "#4a4a4a" }}
                pr={2.5}
              >
                Intake
              </Typography>
            </Grid>
            <Grid
              item
              className="gridCol"
              pt={1.4}
              md={2}
              lg={1.585}
              xs={12}
              pr={0.25}
            >
              <CircleIcon
                className="cYellow"
                sx={{
                  width: "13px",
                  height: "13px",
                  paddingTop: "3.5px",
                  marginRight: "4px",
                }}
              />
              <Typography
                className="fontset grey"
                sx={{ fontSize: "14px" }}
                pr={2.5}
              >
                Under Approval
              </Typography>
            </Grid>
            <Grid
              item
              className="gridCol"
              pt={1.4}
              md={1.8}
              lg={1.41}
              xs={12}
              pr={0.25}
            >
              <CircleIcon
                sx={{
                  width: "13px",
                  height: "13px",
                  color: "#C9DB85",
                  paddingTop: "3.5px",
                  marginRight: "4px",
                }}
              />
              <Typography
                className="fontset grey"
                sx={{ fontSize: "14px" }}
                pr={2.5}
              >
                In Production
              </Typography>
            </Grid>
            <Grid item className="gridCol" pt={1.4} md={1.25} lg={0.94} xs={12}>
              <CircleIcon
                sx={{
                  width: "13px",
                  height: "13px",
                  color: "#7AC79D",
                  paddingTop: "3.5px",
                  marginRight: "4px",
                }}
              />
              <Typography className="fontset grey" sx={{ fontSize: "14px" }}>
                Prep Final
              </Typography>
            </Grid>
          </Grid>
        </Box>
        {/* current status menu */}
        <Grid container pt={1.25} pb={1.1875}>
          <Grid item md={12} className="filtersNamesContainer">
            {filterNames != undefined &&
              filterNames.map((filter, index) => (
                <span
                  className="assetNames"
                  id="asset2"
                  style={{
                    display: "inline-flex",
                    marginTop: "10px",
                  }}
                >
                  <Typography
                    className="fontset purple font12"
                    pl={1}
                    pt={0.5}
                    pb={0.5}
                    pr={1.25}
                    sx={{
                      lineHeight: "16px",
                      letterSpacing: "-0.17px",
                    }}
                  >
                    {filter}
                  </Typography>{" "}
                  <CloseIcon
                    id={index}
                    onClick={(event) => filterRemove(event, filter)}
                    sx={{
                      color: "#216fb4",
                      width: "12px",
                      height: "12px",
                      marginRight: "9px",
                      marginTop: "6px",
                      cursor: "pointer",
                    }}
                  />
                </span>
              ))}
          </Grid>
        </Grid>
        <Grid
          container
          sx={{ borderBottom: "1px solid", borderColor: "#a4a4a4" }}
        >
          <Grid item md={2.5} xs={12} pt={"11.5px"}>
            <Typography
              variant="h7"
              sx={{
                paddingRight: "110px",
              }}
              className="font14 gBold grey"
            >
              CURRENT STATUS
            </Typography>
          </Grid>
          <Grid item md={0.2} pt={2.2} sx={{ cursor: "pointer" }}>
            <img src={HighLogo} alt="hp" className="logoImage" />
          </Grid>
          <Grid item md={1} pt={"10px"}>
            <Typography
              variant="body"
              className="fontset grey font12"
              sx={{ cursor: "pointer" }}
            >
              High priority
            </Typography>
          </Grid>
          <Grid item md={0.2} pt={2.7} sx={{ cursor: "pointer" }}>
            <img src={LowLogo} alt="lp" className="logoImage" />
          </Grid>
          <Grid item md={1} pt={"10px"}>
            <Typography
              sx={{ cursor: "pointer" }}
              className="fontset font12 grey"
              variant="body"
              mr={2.5}
            >
              Low priority
            </Typography>
          </Grid>
          <Grid item md={3.14}></Grid>
          <Grid
            item
            md={1.865}
            sx={{
              pt: 1.3,
              pb: 0.3,
              pl: 0.5,
              pr: 0.5,
              display: "-webkit-flex",
            }}
            className="selectButton"
            onClick={handleClickRequestType}
          >
            <Typography pl={1.7} className="fontset font14 grey">
              REQUEST TYPE
            </Typography>
            <ExpandMoreIcon
              sx={{
                color: "#1E70B9",
                marginTop: "-2.5px",
                display: "block",
                paddingRight: "20px",
              }}
            />
          </Grid>
          <Grid
            md={0.22}
            sx={{
              marginTop: "12px",
              borderLeft: "1px solid",
              height: "16px",
              borderColor: "#cecece",
              paddingRight: "19px",
            }}
          ></Grid>
          <Grid
            item
            md={1.05}
            sx={{ pt: 1.3, pb: 0.3, display: "-webkit-flex" }}
            className="selectButton"
            onClick={handleClickStatus}
          >
            <Typography className="fontset font14 grey">STATUS</Typography>
            <ExpandMoreIcon
              sx={{
                color: "#1E70B9",
                marginTop: "-2.5px",
                display: "block",
                paddingRight: "20px",
              }}
            />
          </Grid>
          <Grid
            md={0.22}
            sx={{
              marginTop: "12px",
              borderLeft: "1px solid",
              height: "16px",
              borderColor: "#cecece",
              paddingRight: "19px",
            }}
          ></Grid>
          <Grid
            item
            md={0.6}
            sx={{
              pt: 1.3,
              pb: 0.3,
              display: "-webkit-flex",
            }}
            onClick={handleClickSort}
            className="selectButton"
          >
            <Typography className="fontset font14 grey">SORT</Typography>
            <ExpandMoreIcon
              sx={{
                color: "#1E70B9",
                marginTop: "-2.5px",
                display: "block",
                paddingRight: "7px",
              }}
            />
          </Grid>
        </Grid>
      </Box>
      {/* body starting */}
      <Box className="bodystart pagebody" mt={3.75}>
        {activeAssets !== null &&
          activeAssets.map((asset) => (
            <AssetDetailView asset={asset} statusValues={statusDetails} />
          ))}
      </Box>
      {/* <Sort Popover> */}
      <SortPopover
        sortAnchorEl={sortAnchorEl}
        sortOpen={sortOpen}
        setSortOpen={setSortOpen}
        selectedSortValues={selectedSortValues}
        setSelectedSortValues={setSelectedSortValues}
        setFilterNames={setFilterNames}
      />
      {/* Status Popover */}
      <StatusPopover
        statusDetails={statusDetails}
        statusAnchorEl={statusAnchorEl}
        openStatus={openStatus}
        setStateOpen={setStateOpen}
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
        setFilterNames={setFilterNames}
      />
      {/* request type popover */}
      <RequestTypePopover
        requestTypeAnchorEl={requestTypeAnchorEl}
        openRequestType={openRequestType}
        setRequestTypeOpen={setRequestTypeOpen}
        selectedRequestTypes={selectedRequestTypes}
        setSelectedRequestTypes={setSelectedRequestTypes}
        setFilterNames={setFilterNames}
      />
    </Container>
  );
}

export default Detailview;
