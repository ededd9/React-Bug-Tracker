import React from "react";
import SideBar from "../../components/sideBar/sideBar";
import { useLocation } from "react-router-dom";
import "./singleTicketPage.css";
import { useState, useEffect } from "react";
import axios from "axios";
function SingleTicketPage() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [department, setDepartment] = useState([]);
  const [subject, setSubject] = useState([]);
  const [severity, setSeverity] = useState([]);
  const [description, setDescription] = useState([]);
  useEffect(() => {
    const getTicket = async () => {
      const res = await axios.get(`http://localhost:3000/tickets/${path}`);
      setDepartment(res.data.department);
      setSubject(res.data.subject);
      setSeverity(res.data.severity);
      setDescription(res.data.description);
    };
    getTicket();
  }, [path]);
  return (
    <>
      <h1>{department}</h1>
      <h1>{subject}</h1>
      <h1>{severity}</h1>
      <h1>{description}</h1>

      <SideBar />
    </>
  );
}

export default SingleTicketPage;
