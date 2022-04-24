import React, { useEffect, useState } from "react";
import axios from "axios";
import "./viewTickets.css";
function ViewTickets() {
  // VARIABLES
  const [tickets, setTickets] = useState([]);
  //FUNCTIONS
  const capitalize = (str) => {
    return str[0].toUpperCase() + str.substring(1);
  };
  useEffect(() => {
    const displayTickets = async () => {
      const res = await axios.get("http://localhost:3000/");
      const data = res.data;
      setTickets(data);
    };
    displayTickets();
  }, []);

  return (
    <div className="tickets-container">
      <table className="ticketTable">
        <thead className="table-headers">
          <tr className="headers">
            <th>Department</th>
            <th>Subject</th>
            <th>Severity</th>
            <th>Description</th>
            <th>createdAt</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket, index) => (
            <tr className="ticket-info" key={index}>
              <>
                <td>{ticket.department}</td>
                <td>{ticket.subject}</td>
                {/* simple ternary chain to colorcode severity status */}
                {ticket.severity === "low" ? (
                  <td style={{ color: "lightgreen" }}>
                    {capitalize(ticket.severity)}
                  </td>
                ) : ticket.severity === "medium" ? (
                  <td style={{ color: "orange" }}>
                    {capitalize(ticket.severity)}
                  </td>
                ) : (
                  <td style={{ color: "red" }}>
                    {capitalize(ticket.severity)}
                  </td>
                )}

                <td>{ticket.description}</td>
                <td>{new Date(ticket.createdAt).toLocaleDateString()}</td>
              </>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewTickets;
