import React from "react";
import "./mainPage.css";
import SideBar from "../../components/sideBar/sideBar";
import ViewTickets from "../../components/viewTickets/viewTickets";
function MainPage() {
  return (
    <>
      <div className="f1 col">
        <SideBar />
      </div>
      <div className="f2 col">
        <ViewTickets />
      </div>
    </>
  );
}

export default MainPage;
