import ClientLayout from "../../layouts/clientLayout";
import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import jwtDecode from "jwt-decode";

import axios from "axios";
const SearchAttorney = (props) => {
  const [attorneys, setAttorneys] = useState([]);
  const handleViewProfile = () => {
    props.history.push("/attorney/profile");
  };
  const handleRequest = async () => {
    // const data = {
    //   seen: false,
    //   status: "pending",
    //   client_id: 107,
    //   attorney_id: 108,
    // };
    // const result = await axios.post(
    //   `http://localhost:8000/user/create/request`,
    //   data
    // );
    // console.log(result.data);
  };
  useEffect(() => {
    const jwt = localStorage.getItem("token");
    const user = jwtDecode(jwt);

    const attorneyFinder = async () => {
      const result = await axios.get(
        `http://localhost:8000/search/attorney/${user.id}`
      );
      console.log(result.data);
      setAttorneys(result.data);
    };
    attorneyFinder();
  }, []);
  return (
    <ClientLayout>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Attoney Name</th>
            <th scope="col">Attorney Email</th>
            <th scope="col">Speciality</th>
            <th scope="col">Total Clients</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {attorneys.map((c) => (
            <tr>
              <td>{`${c.first_name} ${c.last_name}`}</td>
              <td>{c.email}</td>
              <td>Criminal Litigation</td>
              <td>{c.clients}</td>
              <td className="d-flex">
                <button
                  className="btn btn-primary me-1"
                  onClick={handleRequest}
                >
                  Send Request
                </button>
                <div className="bg-dark bg-gradient p-2">
                  <Link
                    to={{
                      pathname: "/attorney/profile",
                      state: {
                        id: c.id,
                      },
                    }}
                  >
                    View Profile
                  </Link>
                </div>
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
    </ClientLayout>
  );
};

export default SearchAttorney;
