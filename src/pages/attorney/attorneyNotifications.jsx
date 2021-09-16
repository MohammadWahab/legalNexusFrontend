import AttorneyLayout from "../../layouts/attorneyLayout";
import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";
const AttorneyNotifications = (props) => {
  const [requests, setRequests] = useState([]);
  const [user, setUser] = useState({});
  const handleAccept = async (client_id) => {
    const data = {
      case_state: "ongoing",
      start_date: new Date().toString(),
      client_id: client_id,
      attorney_id: user.id,
    };
    const result = await axios.post(
      `http://localhost:8000/cases/creation`,
      data
    );
    console.log(result.data);

    if (result) {
      const clonedArray = requests.filter((c) => c.client_id != client_id);
      const post = {
        client_id,
      };
      const updatedRequest = await axios.post(
        `http://localhost:8000/update/requests`,
        post
      );
      console.log(updatedRequest.data);
      setRequests(clonedArray);
    }
  };

  const handleReject = async (client_id) => {
    const post = {
      client_id,
    };
    const result = await axios.post(
      `http://localhost:8000/delete/requests`,
      post
    );
    if (result) {
      const clonedArray = requests.filter((c) => c.client_id != client_id);
      setRequests(clonedArray);
      console.log(result.data);
    }
  };
  useEffect(() => {
    const notifications = async () => {
      const jwt = localStorage.getItem("token");
      const user = jwtDecode(jwt);
      setUser(user);
      console.log(user);
      const result = await axios.get(
        `http://localhost:8000/attorney/requests/${user.id}`
      );
      console.log(result.data);
      setRequests(result.data);
    };
    notifications();
  }, []);
  return (
    <AttorneyLayout>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Description</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((c) => (
              <tr>
                <td>{`${c.first_name} ${c.last_name}`}</td>
                <td>{c.email}</td>
                <td>{c.description}</td>
                <td className="d-flex">
                  <button
                    className="btn btn-primary"
                    onClick={() => handleAccept(c.client_id)}
                  >
                    Accept
                  </button>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => handleReject(c.client_id)}
                  >
                    Reject
                  </button>
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
      </div>
    </AttorneyLayout>
  );
};

export default AttorneyNotifications;
