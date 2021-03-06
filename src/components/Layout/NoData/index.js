import React from "react";
import { FaChartArea } from "react-icons/fa";
import Container from "~components/Layout/Container";
import FlexCenter from "~components/Layout/FlexCenter";

const NoData = () => (
  <Container dataTestId="no-data" innerStyle={{ height: 400 }}>
    <FlexCenter
      direction="column"
      style={{ textAlign: "center", userSelect: "none", height: "100%" }}
    >
      <FaChartArea style={{ fontSize: 100, color: "#d4d3d3" }} />
      <h1 css="color: #d4d3d3;margin: 0;">No Data Found</h1>
      <p css="color: #d4d3d3;margin: 0">Add a user or seed the database.</p>
    </FlexCenter>
  </Container>
);

export default NoData;
