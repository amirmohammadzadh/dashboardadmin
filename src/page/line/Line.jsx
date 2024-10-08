import React from "react";
import LineCharts from "./LineCharts";
import Header from "Components/Header";

export default function Line() {
  return (
    <>
      <Header title={"Line Chart"} subTitle={"Simple Line Chart"} />
      <LineCharts />;
    </>
  );
}
