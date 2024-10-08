import { BarChart } from "@mui/icons-material";
import { Paper, Stack, Typography, useTheme } from "@mui/material";
import BarCharts from "page/bar/BarCharts";
import Geo from "page/geography/Geo";
import PieChart from "page/pie/PieChart";
import React from "react";

export default function Row3() {
  const theme = useTheme();
  return (
    <Stack gap={1.5} direction={"row"} flexWrap={"wrap"} mt={2}>
      <Paper
        sx={{
          flexGrow: 1,
          minWidth: "300px",
          width: "33%",
        }}
      >
        <Typography
          color={theme.palette.secondary.main}
          sx={{ padding: "30px 30px 0 30px" }}
          variant="h6"
          fontWeight={"600"}
        >
          Campaign
        </Typography>
        <PieChart isDashbord={true} />
        <Typography variant="h6" align="center" sx={{ mt: "15px" }}>
          $48,352 revenue generated
        </Typography>
        <Typography variant="body2" px={0.7} pb={3} align="center">
          Includes extra misc expenditures and costs
        </Typography>
      </Paper>

      <Paper
        sx={{
          flexGrow: 1,
          minWidth: 400,
          width: "28%",
        }}
      >
        <Typography
          color={theme.palette.secondary.main}
          sx={{ padding: "30px 30px 0 30px" }}
          variant="h6"
          fontWeight={"600"}
        >
          Sales Quantity
        </Typography>
        <BarCharts isDashbord={true} />
      </Paper>

      <Paper
        sx={{
          flexGrow: 1,
          minWidth: 400,
          width: "33%",
        }}
      >
        <Geo isDashbord={true} />
      </Paper>
    </Stack>
  );
}
