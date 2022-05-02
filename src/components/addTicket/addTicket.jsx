import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import "./addTicket.css";
function AddTicket() {
  const [department, setDepartment] = useState([]);
  const [subject, setSubject] = useState([]);
  const [severity, setSeverity] = useState([]);
  const [description, setDescription] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTicket = {
      department,
      subject,
      severity,
      description,
    };
    try {
      const res = await axios.post("http://localhost:3000/tickets", newTicket);
      window.location.replace("http://localhost:3001/home");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="addTicketContainer">
        <form onSubmit={handleSubmit}>
          <div className="title">
            <h1>Create ticket:</h1>
          </div>
          <div className="top-two-container">
            <h3>Subject</h3>
            <input
              required
              type="text"
              placeholder=""
              name="subject"
              onChange={(e) => setSubject(e.target.value)}
            />
            <label htmlFor="description">Description</label>
            <textarea
              required
              name="description"
              id="description"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="select-items">
            <div className="leftCol">
              <h3>Department</h3>
              <select
                name="department"
                className="departments"
                onChange={(e) => setDepartment(e.target.value)}
              >
                <option defaultValue="" selected disabled hidden>
                  Select a department
                </option>
                <option value="IT">IT</option>
                <option value="HR">HR</option>
                <option value="Research">Research</option>
                <option value="Product">Product</option>
                <option value="Finance">Finance</option>

              </select>
            </div>
            <div className="rightCol">
              <h3>Severity</h3>
              <select
                name="severity"
                className="severity-level"
                onChange={(e) => setSeverity(e.target.value)}
              >
                <option defaultValue="" selected disabled hidden>
                  Choose severity of issue
                </option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="severe">Severe</option>
              </select>
            </div>
          </div>
          <button className="add-ticket-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default AddTicket;
