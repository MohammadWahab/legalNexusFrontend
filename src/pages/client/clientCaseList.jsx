import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";
import ClientLayout from "../../layouts/clientLayout";
import { Link } from "react-router-dom";


const ClientCaseList = (props) => {
  const [cases, setCases] = useState([])
  useEffect(() => {
    const user = jwtDecode(localStorage.getItem('token'))
    const caseList = async () => {
      try {
        const result = await axios.get(
          `http://localhost:8000/client/${user.id}/created/cases`
        );
        console.log(result.data);
        setCases(result.data);
      } catch (err) {
        throw err;
      }
    };
    caseList();
  }, []);
  const handleCheckDetails = () => {
    props.history.push("/client/case/details");
  };
  return (
    <ClientLayout>
      <div className>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Case ID</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col" onClick={handleCheckDetails}>
                Check details
              </th>
            </tr>
          </thead>
          <tbody>
          {cases.map((c) => {
              return (
                <tr>
                  <th scope="row">{c.id}</th>
                  <td>{c.first_name}</td>
                  <td>{c.last_name}</td>
                  <td>{c.email}</td>
                  <td>
                    <Link
                      to={{
                        pathname: "/client/case/details",
                        state: {
                          caseId: c.id,
                          caseState: c.case_state,
                          startDate: c.start_date,
                          firstName: c.first_name,
                          lastName: c.last_name,
                          clientId: c.client_id,
                          attorneyId: c.attorney_id,
                        },
                      }}
                    >
                      CHECK
                    </Link>
                  </td>
                </tr>
              );
            })}
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
    </ClientLayout>
  );
};

export default ClientCaseList;
