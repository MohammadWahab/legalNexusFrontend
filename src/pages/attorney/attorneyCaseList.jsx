import AttorneyLayout from "../../layouts/attorneyLayout";
import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AttorneyCaseList = (props) => {
  const [cases, setCases] = useState([]);

  const handleCheckDetails = () => {
    props.history.push("/attorney/case/details");
  };

  useEffect(() => {
    const caseList = async () => {
      try {
        const result = await axios.get(
          "http://localhost:8000/test/created/cases"
        );
        console.log(result.data);
        setCases(result.data);
      } catch (err) {
        throw err;
      }
    };
    caseList();
  }, []);
  return (
    <AttorneyLayout>
      <div className>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Case ID</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Check details</th>
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
                        pathname: "/attorney/case/details",
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
            {/* <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={handleCheckDetails}
                >
                  CHECK
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={handleCheckDetails}
                >
                  CHECK
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={handleCheckDetails}
                >
                  CHECK
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={handleCheckDetails}
                >
                  CHECK
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={handleCheckDetails}
                >
                  CHECK
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={handleCheckDetails}
                >
                  CHECK
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={handleCheckDetails}
                >
                  CHECK
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">8</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={handleCheckDetails}
                >
                  CHECK
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">9</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={handleCheckDetails}
                >
                  CHECK
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">10</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={handleCheckDetails}
                >
                  CHECK
                </button>
              </td>
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
      </div>
    </AttorneyLayout>
  );
};

export default AttorneyCaseList;
