import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { columns, rows } from "./data";
import Header from "Components/Header";

export default function Invoices() {
  return (
    <div>
      <Box sx={{ width: "99%", mx: "auto" }}>
        <Header title={"INVOICES"} subTitle={"List of Invoice Balances"}/>
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
