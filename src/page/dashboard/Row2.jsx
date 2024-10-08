import {
  Box,
  IconButton,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import LineCharts from "page/line/LineCharts";
import { DownloadOutlined } from "@mui/icons-material";
import React from "react";
import { transactions } from "./data";

export default function Row2() {
  const theme = useTheme();
  return (
    <Stack direction={"row"} flexWrap={"wrap"} gap={1} mt={2}>
      <Paper sx={{ maxWidth: 900, flexGrow: 1 }}>
        <Stack
          alignItems={"center"}
          justifyContent={"space-between"}
          direction={"row"}
          flexWrap={"wrap"}
        >
          <Box>
            <Typography
              color={theme.palette.secondary.main}
              mb={1}
              m2={2}
              ml={4}
              variant="h6"
            >
              Revenue Generated
            </Typography>
            <Typography variant="body2" ml={4}>
              $59,342,42
            </Typography>
          </Box>
          <Box>
            <IconButton sx={{ mr: 3 }}>
              <DownloadOutlined />
            </IconButton>
          </Box>
        </Stack>
        <LineCharts isDashbord={true} />
      </Paper>

      <Box
        sx={{
          minWidth: 400,
          maxHeight: 350,
          flexGrow: 1,
          overflow: "auto",
        }}
      >
        <Paper>
          <Typography
            sx={{ color: theme.palette.secondary.main }}
            fontWeight={"bold"}
            p={1.2}
            variant="h6"
          >
            Recent Transactions
          </Typography>
        </Paper>
        {transactions.map((trans) => (
          <Paper
            sx={{
              mt: 0.4,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box p={1.2}>
              <Typography variant="body1">{trans.txId}</Typography>
              <Typography variant="body2">{trans.user} </Typography>
            </Box>
            <Typography variant="body1">{trans.date}</Typography>

            <Typography
              borderRadius={1.4}
              p={1}
              bgcolor={theme.palette.error.main}
              color={theme.palette.getContrastText(theme.palette.error.main)}
              variant="body2"
            >
              ${trans.cost}
            </Typography>
          </Paper>
        ))}
      </Box>
    </Stack>
  );
}
