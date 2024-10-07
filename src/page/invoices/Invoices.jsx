import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { columns, rows } from "./data";

export default function Invoices() {
  return (
    <div>
      <Box sx={{ width: "99%", mx: "auto" }}>
        <DataGrid
          rows={rows}
          // @ts-ignore
          columns={columns}
          slots={{
            toolbar: GridToolbar,
          }}
          checkboxSelection
        />
      </Box>
    </div>
  );
}
