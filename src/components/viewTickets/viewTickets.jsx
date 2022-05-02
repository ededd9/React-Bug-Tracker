import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { Link } from "react-router-dom";
import "./viewTickets.css";
function ViewTickets() {
  // VARIABLES
  const [tickets, setTickets] = useState([]);
  //FUNCTIONS
  const capitalize = (str) => {
    return str[0].toUpperCase() + str.substring(1);
  };
  useEffect(() => {
    const getTickets = async () => {
      const res = await axios.get("http://localhost:3000/");
      const data = res.data;
      setTickets(data);
    };
    getTickets();
  }, []);

  return (
    <div className="tickets-container">
      <table className="ticketTable">
        <thead className="table-headers">
          <tr className="headers">
            <th>ID</th>
            <th>Department</th>
            <th>Subject</th>
            <th>Severity</th>
            <th>Description</th>
            <th>Age</th>
            <th>createdAt</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket, index) => (
            <tr className="ticket-info" key={index}>
              <>
                <td>{ticket._id.substring(ticket._id.length - 8)}</td>
                <td>{ticket.department}</td>
                <td>{ticket.subject}</td>
                {/* simple ternary chain to colorcode severity status */}
                {ticket.severity === "low" ? (
                  <td
                    className="severityCol"
                    style={{ backgroundColor: "lightgreen" }}
                  >
                    {capitalize(ticket.severity)}
                  </td>
                ) : ticket.severity === "medium" ? (
                  <td
                    className="severityCol"
                    style={{ backgroundColor: "#f29559" }}
                  >
                    {capitalize(ticket.severity)}
                  </td>
                ) : (
                  <td
                    className="severityCol"
                    style={{ backgroundColor: "#B33030" }}
                  >
                    {capitalize(ticket.severity)}
                  </td>
                )}
                <td>{ticket.description}</td>
                <td>{moment().format("DD-MM-YYYY hh:mm:ss")}</td>
                <td>{new Date(ticket.createdAt).toLocaleDateString()}</td>
                <td>
                  <Link to={`/ticket/${ticket._id}`}>
                    <button>More Details</button>
                  </Link>
                </td>
              </>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewTickets;
