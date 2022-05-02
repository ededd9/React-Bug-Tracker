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
  const [id, setId] = useState([]);
  useEffect(() => {
    const getTicket = async () => {
      const res = await axios.get(`http://localhost:3000/tickets/${path}`);
      setDepartment(res.data.department);
      setSubject(res.data.subject);
      setSeverity(res.data.severity);
      setDescription(res.data.description);
      setId(res.data._id);
    };
    getTicket();
  }, [path]);
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/tickets/${id}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="infoContainer">
        <div className="infoHeader">
          <h1>
            Ticket (#{id}) {subject}
          </h1>
        </div>
        <div className="middleInfo">
          Department: {department}
          Severity: {severity}
        </div>
        DESCRIPTION: {description}
        <div className="ticket-buttons">
          <button>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
      <SideBar />
    </>
  );
}

export default SingleTicketPage;
