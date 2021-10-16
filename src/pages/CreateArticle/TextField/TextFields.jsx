import React from "react";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";

function TextFields({placeHoder}) {
  return (
    <TextField variant="outlined" placeholder="title" sx={{ width: "100%" }} />
  );
}

export default TextFields;
