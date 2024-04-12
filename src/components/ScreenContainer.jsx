import { Box } from "@mui/material";
import React from "react";
const ScreenContainer = ({
  children,
  backgroundColor = "transparent",
  component,
  shrink = false,
}) => {
  return (
    <Box
      sx={{
        width: "100vw",
        bgcolor: backgroundColor,
      }}
      component={component}
    >
      <Box
        sx={{
          maxWidth: "1400px",
          mx: "auto",
          width: { xs: "90%", md: shrink ? "80%" : "90%" },
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
export default ScreenContainer;
