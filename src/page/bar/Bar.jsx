import React, { useState } from "react";
import { ResponsiveBar } from "@nivo/bar";
import { Box, useTheme } from "@mui/material";
import BarCharts from "./BarCharts";
import Header from "Components/Header";

export default function Bar() {
  const theme = useTheme();
  return (
    <>
      <Header
        title={"Bar Chart"}
        subTitle={"The minimum wage in Germany, France and Spain (EUR/month)"}
      />
      <BarCharts />
    </>
  );
}
