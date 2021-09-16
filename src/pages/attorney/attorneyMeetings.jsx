import AttorneyLayout from "../../layouts/attorneyLayout";
import React, { Component, useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import axios from "axios";
const AttorneyMeetings = (props) => {
  const [meetings, setMeetings] = useState([]);
  useEffect(() => {
    const jwt = localStorage.getItem("token");
    const user = jwtDecode(jwt);
    console.log(user);
    const meetingIntel = async () => {
      const result = await axios.get(
        `http://localhost:8000/user/check/meeting/${user.id}/${user.role_id}`
      );
      console.log(result.data);
      setMeetings(result.data);
    };
    meetingIntel();
  }, []);
  return (
    <AttorneyLayout>
      <table className="table">
        <thead>
          <tr>
            <th>Case ID</th>
            <th>Client Name</th>
            <th>Client Email</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {meetings.map((c) => (
            <tr>
              <td>{c.case_id}</td>
              <td>{`${c.first_name} ${c.last_name}`}</td>
              <td>{c.email}</td>
              <td>{`${c.year}/${c.month}/${c.day}`}</td>
              <td>
                {c.minute == 0 ? `${c.hour}:00` : `${c.hour}:${c.minute}`}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-flex justify-content-center">
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" href="#">
                Previous
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                1
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                2
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                3
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </AttorneyLayout>
  );
};

export default AttorneyMeetings;
