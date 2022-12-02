import React, { Component } from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
  IconButton,
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
import NorthIcon from "@mui/icons-material/North";
import SortIcon from "@mui/icons-material/Sort";
import SouthIcon from "@mui/icons-material/South";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import { width } from "@mui/system";
import CircleIcon from "@mui/icons-material/Circle";
import AddBoxIcon from "@mui/icons-material/AddBox";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { red } from "@mui/material/colors";
function Bshadow() {
  return (
    <Container>
      <Grid container maxWidth={"320px"} mt={5}>
        <Grid className="bs1" item md={6} mb={2}>
          Hello World this is a check
        </Grid>
        <Grid className="bs2" item md={6} mb={2}>
          {/* Hello World this is a check */}
        </Grid>
        <Grid className="bs3" item md={12}>
          Hello World this is a checking purpose
        </Grid>
      </Grid>
    </Container>
  );
}

export default Bshadow;
