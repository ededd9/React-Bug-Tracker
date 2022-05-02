import React, { useEffect, useState } from "react";
import SideBar from "../../components/sideBar/sideBar";
import * as d3 from "d3";
import { arc } from "d3";
import PieChart from "../../components/pieChart/pieChart";
import HorizontalBarChart from "../../components/horizontalBarChart/horizontalBarChart";
import axios from "axios";
import "./statsPage.css";
function StatsPage() {
  const [ticketData, setTicketData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("http://localhost:3000/");
      const a = res.data;
      setTicketData(a);
    };
    getData();
  }, []);
  console.log(ticketData);
  let o = {};
  let lCount = 0;
  let mCount = 0;
  let sCount = 0;
  for (let i = 0; i < ticketData.length; i++) {
    if (ticketData[i].severity === "low") {
      lCount++;
    } else if (ticketData[i].severity === "medium") {
      mCount++;
    } else if (ticketData[i].severity === "severe") {
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
  let itCount = 0;
  let hrCount = 0;
  let researchCount = 0;
  let financeCount = 0;
  let productCount = 0;

  for (let i = 0; i < ticketData.length; i++) {
    if (ticketData[i].department === "IT") {
      itCount++;
    } else if (ticketData[i].department === "HR") {
      hrCount++;
    } else if (ticketData[i].department === "Research") {
      researchCount++;
    } else if (ticketData[i].department === "Product") {
      productCount++;
    } else if (ticketData[i].department === "Finance") {
      financeCount++;
    }
  }
  const data2 = [
    {
      label: "IT",
      value: itCount,
    },
    { label: "HR", value: hrCount },
    { label: "Research", value: researchCount },
    { label: "Product", value: productCount },
    {
      label: "Finance",
      value: financeCount,
    },
  ];
  return (
    <>
      <SideBar />
      <div className="charts-container">
        <div className="top">
          <div className="topLeft">
            <h3>Severity Data</h3>
            {ticketData.length == 0 ? (
              <h1>No data to display</h1>
            ) : (
              <PieChart data={data} outerRadius={150} innerRadius={50} />
            )}
          </div>
          <div className="topRight">
            <h3>Department Data</h3>
            {ticketData.length == 0 ? (
              <h1>No data to display</h1>
            ) : (
              <HorizontalBarChart data={data2} />
            )}
          </div>
        </div>
        <div className="bottom">
          <div className="bottomLeft">
            <h3>t3wadawda</h3>
          </div>
          <div className="bottomRight">
            <h3>t4awdawdawda</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default StatsPage;
