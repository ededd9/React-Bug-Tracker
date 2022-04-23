import React from "react";
import AddTicket from "../../components/addTicket/addTicket";
import SideBar from "../../components/sideBar/sideBar";
import "./addTicketPage.css";
function AddTicketPage() {
  return (
    <>
      <SideBar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <AddTicket />
      </div>
    </>
  );
}

export default AddTicketPage;
