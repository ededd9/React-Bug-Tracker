import React from "react";
import "./addTicket.css";
function addTicket() {
  return (
    <>
      <container class="addTicketContainer">
        <div class="newIssueDiv">
          <h1>Add New Issue:</h1>
          <form method="POST" action="/mainpage">
            <div>
              <h3>Department</h3>
              <select name="department" class="departments">
                <option value="" selected disabled hidden>
                  Select a department
                </option>
                <option value="IT">IT</option>
                <option value="HR">HR</option>
                <option value="Account">Account</option>
              </select>
            </div>
            <div>
              <h3>Subject</h3>
              <input required type="text" placeholder="" name="subject" />
            </div>
            <div>
              <h3>Severity</h3>
              <select name="severity" class="severity-level">
                <option value="" selected disabled hidden>
                  Choose severity of issue
                </option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="severe">Severe</option>
              </select>
            </div>
            <br />
            <div>
              <label for="description">Description</label>
              <textarea required name="description" id="description"></textarea>
            </div>
            <br />
            <button class="add-ticket" type="submit">
              Save
            </button>
          </form>
        </div>
      </container>
    </>
  );
}

export default addTicket;
