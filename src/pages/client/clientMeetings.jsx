import ClientLayout from "../../layouts/clientLayout";
import React, { Component, useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import axios from "axios";
const ClientMeetings = (props) => {
  const [meeting, setMeeting] = useState([]);
  useEffect(() => {
    const jwt = localStorage.getItem("token");
    const user = jwtDecode(jwt);
    const getMeetings = async () => {
      const result = await axios.get(
        `http://localhost:8000/user/check/meeting/${user.id}/${user.role_id}`
      );
      console.log(result.data);
      setMeeting(result.data);
    };
    getMeetings();
  }, []);
  return (
    <ClientLayout>
      <table className="table">
        <thead>
          <tr>
            <th>Case ID</th>
            <th>Attorney Name</th>
            <th>Attorney Email</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {meeting.map((c) => (
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
          {/* <tr>
            <td>11234</td>
            <td>Md Abdul Wahab</td>
            <td>wahab@gamil.com</td>
            <td>2021/08/24</td>
            <td>22:30</td>
          </tr>
          <tr>
            <td>11234</td>
            <td>Md Maruf Islam</td>
            <td>maruf@gamil.com</td>
            <td>2021/08/24</td>
            <td>22:30</td>
          </tr>
          <tr>
            <td>11234</td>
            <td>Md Ashraful Islam</td>
            <td>robin@gamil.com</td>
            <td>2021/08/24</td>
            <td>22:30</td>
          </tr>
          <tr>
            <td>11234</td>
            <td>Md Abdul Wahab</td>
            <td>wahab@gamil.com</td>
            <td>2021/08/24</td>
            <td>22:30</td>
          </tr>
          <tr>
            <td>11234</td>
            <td>Md Maruf Islam</td>
            <td>maruf@gamil.com</td>
            <td>2021/08/24</td>
            <td>22:30</td>
          </tr>
          <tr>
            <td>11234</td>
            <td>Md Maruf Islam</td>
            <td>maruf@gamil.com</td>
            <td>2021/08/24</td>
            <td>22:30</td>
          </tr> */}
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
    </ClientLayout>
  );
};

export default ClientMeetings;
