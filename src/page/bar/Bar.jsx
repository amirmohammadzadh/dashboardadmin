import React, { useState } from "react";
import { ResponsiveBar } from "@nivo/bar";
import { Box, useTheme } from "@mui/material";
import BarCharts from "./BarCharts";

export default function Bar() {
  const theme = useTheme();
  return <BarCharts />;
}
