import React from "react";
import Geo from "./Geo";
import Header from "Components/Header";

export default function Geography() {
  return (
    <>
      <Header title={"Geography"} subTitle={"Simple Geography Chart"} />
      <Geo />
    </>
  );
}
