import React, { useEffect, useState } from "react";
import {
  Popover,
  Box,
  Grid,
  Button,
  Typography,
  FormControlLabel,
  FormGroup,
  Checkbox,
} from "@mui/material";
import CheckBoxOutlineBlankSharpIcon from "@mui/icons-material/CheckBoxOutlineBlankSharp";
import CheckBoxSharpIcon from "@mui/icons-material/CheckBoxSharp";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { getRequestTypesAssets } from "api/apiMethods";

function RequestTypePopover({
  requestTypeAnchorEl,
  openRequestType,
  setRequestTypeOpen,
  selectedRequestTypes,
  setSelectedRequestTypes,
  setFilterNames,
}) {
  const [requestDetails, setRequestDetails] = useState(null);
  const handleClose = () => {
    setRequestTypeOpen(false);
  };

  const toggleSelectionCheckbox = (event) => {
    if (event.target.checked) {
      setSelectedRequestTypes((prevState) => {
        return prevState.concat(event.target.value);
      });
      setFilterNames((prevState) => {
        return prevState.concat(event.target.value);
      });
    } else {
      setSelectedRequestTypes((prevState) => {
        return prevState.filter((a) => a != event.target.value);
      });
      setFilterNames((prevState) => {
        return prevState.filter((a) => a != event.target.value);
      });
    }
  };

  const handleClearAll = (event) => {
    setSelectedRequestTypes([]);
  };
  useEffect(() => {
    getRequestTypesAssets().then((response) => {
      if (response !== false) {
        setRequestDetails(response);
      }
    });
  }, []);

  return (
    <Popover
      open={openRequestType}
      anchorEl={requestTypeAnchorEl}
      onClose={handleClose}
      transitionDuration={1}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      classes={{ paper: "reqtypePaper" }}
    >
      <Box  className="Muiroot reqTypeBox">
        <Grid  selected className="reqContainer">
          <Grid item={true} md={5.5}>
            <Button
              onClick={handleClose}
              sx={{
                zIndex: 1,
                marginTop: "-54px",
                marginLeft: "2.5px",
                height: "20px",
                width: "154px",
                "&:hover": {
                  background: "transparent !important" ,
                },
              }}
              disableRipple
            >
              <Typography
                // mr={0.5}
                className="fontset font14 grey"
              >
                REQUEST TYPE
              </Typography>
              <ExpandLessIcon sx={{ paddingLeft: "0.2px", color: "#1E70B9" }} />
            </Button>
          </Grid>
          <Grid item= {true} md={1.9}></Grid>
          <Grid item= {true} md={4.1}>
            <Button
              onClick={handleClearAll}
              className="underlined"
              sx={{ borderRadius: "0px" }}
            >
              Clear All
            </Button>
          </Grid>
          <Grid item= {true} md={12} mb={3}>
            <FormGroup>
              {requestDetails !== null &&
                requestDetails.map((requestTypes) => (
                  <FormControlLabel
                    classes={{
                      label: "checklabels",
                    }}
                    sx={{ pt: 0.8, pl: 2.75 }}
                    control={
                      <Checkbox
                        onChange={toggleSelectionCheckbox}
                        value={requestTypes.internal_name}
                        checked={selectedRequestTypes.includes(
                          requestTypes.internal_name
                        )}
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
                    label={requestTypes.name}
                  />
                ))}
            </FormGroup>
          </Grid>
        </Grid>
      </Box>
    </Popover>
  );
}

export default RequestTypePopover;
