import React, { useEffect, useState } from "react";
import axios from "axios";
import "./viewTickets.css";
function ViewTickets() {
  const [tickets, setTickets] = useState([]);

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
                <td>{ticket.severity}</td>
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
