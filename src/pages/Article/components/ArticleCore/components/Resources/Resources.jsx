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
        {resources.map((resource) => {
          return (
            <a key={resource.link} href={resource.link}>
              <Typography
                variant="body1"
                sx={{
                  color: "#00bBb0",
                  fontSize: "1.0rem",
                  fontWeight: "600",
                }}
              >
                {resource.title}
              </Typography>
            </a>
          );
        })}
      </Box>
    </>
  );
}

export default Resources;
