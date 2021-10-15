import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { DEFAULT_COLORS } from "../../assets";

const CostumeButton = ({ children , onClick}) => {
  const StyledButton = styled(Button)({
    backgroundColor: DEFAULT_COLORS.secondary,
    fontWeight: "bold",
    textTransform: "capitalize",
    padding: "4px 1rem",
    color: "white",
    margin: "auto 8px",
    fontSize: "15px",
    "&:hover": {
      backgroundColor: DEFAULT_COLORS.darker.secondary,
    },
  });
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default CostumeButton ;
