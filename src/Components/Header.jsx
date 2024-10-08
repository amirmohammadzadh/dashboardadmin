import { Box, Typography, useTheme } from "@mui/material";
import React from "react";

export default function Header({ title, subTitle , isDashbord = false }) {
  const theme = useTheme();
  return (
    <Box mb={isDashbord ? 2 : 4}>
      <Typography
        sx={{ color: theme.palette.info.light, fontWeight: 700 }}
        variant="h5"
      >
        {title}
      </Typography>
      <Typography variant="body1">{subTitle}</Typography>
    </Box>
  );
}
