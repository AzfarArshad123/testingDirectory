import React from "react";
import {
  Popover,
  Box,
  Grid,
  Button,
  Typography,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
} from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import {
  RadioButtonCheckedRounded,
  RadioButtonUncheckedRounded,
} from "@mui/icons-material";

function SortPopover({
  sortAnchorEl,
  sortOpen,
  setSortOpen,
  selectedSortValues,
  setSelectedSortValues,
  setFilterNames,
}) {
  const handleClose = () => {
    setSortOpen(false);
  };

  const toggleSelectionCheckbox = (event) => {
    if (event.currentTarget.checked) {
      setSelectedSortValues((prevState) => {
        return [event.target.value];
      });
      setFilterNames((prevState) => {
        return prevState.filter(
          (a) =>
            a != "Status" &&
            a != "Newest Requests" &&
            a != "Oldest Requests" &&
            a != "High Priority" &&
            a != "Lowest Priority"
        );
      });
      setFilterNames((prevState) => {
        return prevState.concat(event.target.value);
      });
    } else {
      setSelectedSortValues((prevState) => {
        return [];
      });
      setFilterNames((prevState) => {
        return prevState.filter((a) => a != event.target.value);
      });
    }
  };

  return (
    <Popover
      id="sortPopover"
      open={sortOpen}
      transitionDuration={1}
      anchorEl={sortAnchorEl}
      onClose={handleClose}
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
        <Grid container className="poppercontainer">
          <Grid item md={7} />
          <Grid item md={5}>
            <Button
              onClick={handleClose}
              sx={{
                zIndex: 1,
                marginTop: "-53px",
                marginLeft: "0.7px",
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
                SORT
              </Typography>
              <ExpandLessIcon sx={{ color: "#1E70B9", marginTop: "-1px" }} />
            </Button>
          </Grid>
          <Grid item md={12} mb={2} sx={{ marginTop: "-20px", zIndex: 2 }}>
            <RadioGroup
              //   aria-labelledby="demo-radio-buttons-group-label"
              //   defaultValue="female"
              name="radio-buttons-group"
              onChange={toggleSelectionCheckbox}
            >
              <FormGroup>
                <FormControlLabel
                  classes={{
                    label: "checklabels",
                  }}
                  sx={{ pt: 2.95, pl: 2.75 }}
                  control={
                    <Radio
                      icon={
                        <RadioButtonUncheckedRounded
                          sx={{
                            width: "16px",
                            height: "16px",
                            color: "#216FB4",
                          }}
                        />
                      }
                      checkedIcon={
                        <RadioButtonCheckedRounded
                          sx={{
                            width: "16px",
                            height: "16px",
                            color: "#216FB4",
                          }}
                        />
                      }
                    />
                  }
                  checked={selectedSortValues.includes("Status")}
                  label="Status"
                  value="Status"
                  name="sort"
                />
              </FormGroup>
              <FormGroup>
                <FormControlLabel
                  classes={{
                    label: "checklabels", // Pass your override css here
                  }}
                  sx={{ pt: 0.8, pl: 2.75 }}
                  control={
                    <Radio
                      icon={
                        <RadioButtonUncheckedRounded
                          sx={{
                            width: "16px",
                            height: "16px",
                            color: "#216FB4",
                          }}
                        />
                      }
                      checkedIcon={
                        <RadioButtonCheckedRounded
                          sx={{
                            width: "16px",
                            height: "16px",
                            color: "#216FB4",
                          }}
                        />
                      }
                    />
                  }
                  checked={selectedSortValues.includes("Newest Requests")}
                  label="Newest Requests"
                  value="Newest Requests"
                  name="sort"
                />
              </FormGroup>
              <FormGroup>
                <FormControlLabel
                  classes={{
                    label: "checklabels",
                  }}
                  sx={{ pt: 0.8, pl: 2.75 }}
                  control={
                    <Radio
                      icon={
                        <RadioButtonUncheckedRounded
                          sx={{
                            width: "16px",
                            height: "16px",
                            color: "#216FB4",
                          }}
                        />
                      }
                      checkedIcon={
                        <RadioButtonCheckedRounded
                          sx={{
                            width: "16px",
                            height: "16px",
                            color: "#216FB4",
                          }}
                        />
                      }
                    />
                  }
                  checked={selectedSortValues.includes("Oldest Requests")}
                  label="Oldest Requests"
                  value="Oldest Requests"
                  name="sort"
                />
              </FormGroup>
              <FormGroup>
                <FormControlLabel
                  classes={{
                    label: "checklabels",
                  }}
                  sx={{ pt: 0.8, pl: 2.75 }}
                  control={
                    <Radio
                      icon={
                        <RadioButtonUncheckedRounded
                          sx={{
                            width: "16px",
                            height: "16px",
                            color: "#216FB4",
                          }}
                        />
                      }
                      checkedIcon={
                        <RadioButtonCheckedRounded
                          sx={{
                            width: "16px",
                            height: "16px",
                            color: "#216FB4",
                          }}
                        />
                      }
                    />
                  }
                  checked={selectedSortValues.includes("High Priority")}
                  label="High Priority"
                  value="High Priority"
                  name="sort"
                />
              </FormGroup>
              <FormGroup>
                <FormControlLabel
                  classes={{
                    label: "checklabels",
                  }}
                  sx={{ pt: 0.8, pl: 2.75 }}
                  control={
                    <Radio
                      icon={
                        <RadioButtonUncheckedRounded
                          sx={{
                            width: "16px",
                            height: "16px",
                            color: "#216FB4",
                          }}
                        />
                      }
                      checkedIcon={
                        <RadioButtonCheckedRounded
                          sx={{
                            width: "16px",
                            height: "16px",
                            color: "#216FB4",
                          }}
                        />
                      }
                    />
                  }
                  checked={selectedSortValues.includes("Lowest Priority")}
                  label="Lowest Priority"
                  value="Lowest Priority"
                  name="sort"
                />
              </FormGroup>
            </RadioGroup>
          </Grid>
        </Grid>
      </Box>
    </Popover>
  );
}

export default SortPopover;
