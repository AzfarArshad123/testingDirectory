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
import DoneSharpIcon from "@mui/icons-material/DoneSharp";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

function StatusPopover({
  statusDetails,
  statusAnchorEl,
  openStatus,
  setStateOpen,
  selectedStatus,
  setSelectedStatus,
  setFilterNames,
}) {
  const handleCloseStatus = () => {
    setStateOpen(false);
  };

  const toggleSelectionCheckbox = (event) => {
    if (event.target.checked) {
      setSelectedStatus((prevState) => {
        return prevState.concat(event.target.value);
      });
      //   setFilterNames((prevState) => {
      //     return prevState.concat(event.target.value);
      //   });
    } else {
      setSelectedStatus((prevState) => {
        return prevState.filter((a) => a != event.target.value);
      });
      //   setFilterNames((prevState) => {
      //     return prevState.filter((a) => a != event.target.value);
      //   });
    }
  };

  const handleAllChildCheckboxes = (event) => {
    const selectedStatus = statusDetails.mainStatus.filter(
      (a) => a.name === event.target.value
    );
    if (event.target.checked) {
      const selectedValues = selectedStatus[0].status.map((selected) => {
        return selected.wrike_status_id;
      });
      setSelectedStatus((prevState) => {
        return [...prevState, ...selectedValues];
      });
    } else {
      const unSelectedValues = selectedStatus[0].status.map((selected) => {
        return selected.wrike_status_id;
      });
      setSelectedStatus((prevState) => {
        return prevState.filter((a) => !unSelectedValues.includes(a));
      });
    }
  };

  const handleClearAll = (event) => {
    setSelectedStatus([]);
  };

  return (
    <Popover
      id="statusPopover"
      open={openStatus}
      anchorEl={statusAnchorEl}
      onClose={handleCloseStatus}
      transitionDuration={1}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <Box className="statuspopperbox" sx={{ display: "-webkit-flex" }}>
        <Box className="statusBox">
          <Grid className="statusPopperContainer" container>
            <Grid item md={8.45}></Grid>
            <Grid item md={1.6}>
              <Button
                onClick={handleCloseStatus}
                sx={{
                  zIndex: 1,
                  marginTop: "-45px",
                  marginLeft: "13.8px",
                  height: "20px",
                  "&:hover": {
                    background: "transparent",
                  },
                }}
                disableRipple
              >
                <Typography
                  // mr={0.5}
                  className="fontset font14 grey"
                >
                  STATUS
                </Typography>
                <ExpandLessIcon sx={{ color: "#1E70B9", marginTop: "-1px" }} />
              </Button>
            </Grid>
            <Grid item md={1.95} pt={1}>
              <Button
                className="underlined clearButton"
                onClick={handleClearAll}
              >
                Clear All
              </Button>
            </Grid>
            <Grid item md={0.2}></Grid>
            <Grid container sx={{ height: "350px", overflow: "auto" }}>
              <Grid item md={5} mb={3}>
                {statusDetails !== null &&
                  statusDetails.mainStatus
                    .filter(
                      (a) =>
                        a.name != "Completed/Delivered" &&
                        a.name != "Request Under Approval"
                    )
                    .map((status, index) => (
                      <>
                        <FormGroup>
                          <FormControlLabel
                            classes={{
                              label: "checklabels isbold",
                            }}
                            sx={{ pt: 0.8, pl: 2.75 }}
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
                                onChange={handleAllChildCheckboxes}
                                value={status.name}
                              />
                            }
                            label={status.name}
                          />
                        </FormGroup>
                        <Box pl={2.98}>
                          <FormGroup>
                            {status.status.map((subStatus) => (
                              <FormControlLabel
                                classes={{
                                  label: "checklabels",
                                }}
                                sx={{ pt: 0.8, pl: 2.75 }}
                                control={
                                  <Checkbox
                                    onChange={toggleSelectionCheckbox}
                                    checked={selectedStatus.includes(
                                      subStatus.wrike_status_id
                                    )}
                                    value={subStatus.wrike_status_id}
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
                                      <DoneSharpIcon
                                        sx={{
                                          margin: "2px",
                                          width: "12px",
                                          height: "12px",
                                          color: "#216FB4",
                                          boxShadow:
                                            "0px 0px 0px 1px #216FB4 inset",
                                          // border: "0.3px solid",
                                          // borderColor: "#white",
                                        }}
                                      />
                                    }
                                  />
                                }
                                label={subStatus.name}
                              />
                            ))}
                          </FormGroup>
                        </Box>
                      </>
                    ))}
              </Grid>
              <Grid item md={0.2}></Grid>
              <Grid item md={5} mb={3}>
                {statusDetails !== null &&
                  statusDetails.mainStatus
                    .filter((a) => a.name === "Request Under Approval")
                    .map((status, index) => (
                      <>
                        <FormGroup>
                          <FormControlLabel
                            classes={{
                              label: "checklabels isbold",
                            }}
                            sx={{ pt: 0.8, pl: 2.75 }}
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
                                onChange={handleAllChildCheckboxes}
                                value={status.name}
                              />
                            }
                            label={status.name}
                          />
                        </FormGroup>
                        <Box pl={2.98}>
                          <FormGroup>
                            {status.status.map((subStatus) => (
                              <FormControlLabel
                                classes={{
                                  label: "checklabels",
                                }}
                                sx={{ pt: 0.8, pl: 2.75 }}
                                control={
                                  <Checkbox
                                    onChange={toggleSelectionCheckbox}
                                    checked={selectedStatus.includes(
                                      subStatus.wrike_status_id
                                    )}
                                    value={subStatus.wrike_status_id}
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
                                      <DoneSharpIcon
                                        sx={{
                                          margin: "2px",
                                          width: "12px",
                                          height: "12px",
                                          color: "#216FB4",
                                          boxShadow:
                                            "0px 0px 0px 1px #216FB4 inset",
                                          // border: "0.3px solid",
                                          // borderColor: "#white",
                                        }}
                                      />
                                    }
                                  />
                                }
                                label={subStatus.name}
                              />
                            ))}
                          </FormGroup>
                        </Box>
                      </>
                    ))}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Popover>
  );
}

export default StatusPopover;
