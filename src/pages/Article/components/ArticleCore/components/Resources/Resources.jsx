import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

function Resources({ resources }) {
  if (resources.length == 0) {
    return null;
  }
  return (
    <>
      <Typography
        variant="body1"
        sx={{
          fontWeight: "bold",
          color: "text.primary",
          marginTop: 2,
          fontSize: "1.35rem",
        }}
      >
        More resources about this article :
      </Typography>
      <Box marginTop={1}>
        <a href={resources.sourceOne.link}>
          <Typography
            variant="body1"
            sx={{
              color: "#00bBb0",
              fontSize: "1.0rem",
              fontWeight: "600",
            }}
          >
            {resources.sourceOne.title}
          </Typography>
        </a>
        <a href={resources.sourceTwo.link}>
          <Typography
            variant="body1"
            sx={{
              color: "#00bBb0",
              fontSize: "1.0rem",
              fontWeight: "600",
            }}
          >
            {resources.sourceTwo.title}
          </Typography>
        </a>
      </Box>
    </>
  );
}

export default Resources;
