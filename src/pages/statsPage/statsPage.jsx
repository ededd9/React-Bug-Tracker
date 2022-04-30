import React, { useEffect, useState } from "react";
import SideBar from "../../components/sideBar/sideBar";
import * as d3 from "d3";
import { arc } from "d3";
import PieChart from "../../components/pieChart/pieChart";
import axios from "axios";
function StatsPage() {
  const [severityAmount, setSeverityAmount] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("http://localhost:3000/");
      const a = res.data;
      setSeverityAmount(a);
    };
    getData();
  }, []);

  console.log(severityAmount);
  let o = {};
  let lCount = 0;
  let mCount = 0;
  let sCount = 0;
  for (let i = 0; i < severityAmount.length; i++) {
    if (severityAmount[i].severity === "low") {
      lCount++;
    } else if (severityAmount[i].severity === "medium") {
      mCount++;
    } else if (severityAmount[i].severity === "severe") {
      sCount++;
    }
  }
  const data = [
    {
      label: "low",
      value: lCount,
    },
    { label: "medium", value: mCount },
    { label: "severe", value: sCount },
  ];
  console.log(data);

  return (
    <>
      <SideBar />
      <PieChart data={data} outerRadius={150} innerRadius={50} />
    </>
  );
}

export default StatsPage;
