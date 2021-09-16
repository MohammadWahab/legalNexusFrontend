import ClientLayout from "../../layouts/clientLayout";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const ClientCaseDetails = (props) => {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <ClientLayout>
      <div>
        <div className="card mb-5">
          <div className="card-header text-center">Case Details</div>
          <div className="card-body d-flex justify-content-between">
            <div className="card  text-center w-25">
              <div className="card-body p-5">
                <h5 className="card-title">State</h5>
                <p>OPEN</p>
              </div>
            </div>
            <div className="card text-center w-25">
              <div className="card-body mt-4">
                <h5 className="card-title mb-3">Start Date</h5>
                <p>2021/08/24</p>
              </div>
            </div>
            <div className="card text-center w-25">
              <div className="card-body mt-4">
                <h5 className="card-title">Client</h5>
                <p>Mohammad Maruf Islam</p>
              </div>
            </div>
            <div className="card text-center w-25">
              <div className="card-body mt-4">
                <h5 className="card-title">Attorney</h5>,
                <p>Mohammad Abdul Wahab</p>
              </div>
            </div>
          </div>
          <div className="card-footer text-muted"></div>
        </div>
        <div className="card text-center mb-5">
          <div className="card-header">Case Attachments</div>
          <div className="card-body d-flex justify-content-between">
            <div className="card  text-center">
              <div className="card-body mt-4">
                <h5 className="card-title">Document-01</h5>
                <p>2021/08/25</p>
              </div>
            </div>
            <div className="card text-center">
              <div className="card-body mt-4">
                <h5 className="card-title mb-3">Document-02</h5>
                <p>2021/08/25</p>
              </div>
            </div>
            <div className="card text-center">
              <div className="card-body mt-4">
                <h5 className="card-title">Document-03</h5>
                <p>2021/08/25</p>
              </div>
            </div>
            <div className="card text-center">
              <div className="card-body mt-4">
                <h5 className="card-title">Document-04</h5>,<p>2021/08/29</p>
              </div>
            </div>
          </div>
          <div className="card-footer text-muted"></div>
        </div>
        <div className="card  mb-5">
          <div className="card-header text-center">Meetings & Documents</div>
          <div className="card-body d-flex justify-content-between ">
            <div className="card">
              <div className="card-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Case ID</th>
                      <th>Date</th>
                      <th>Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>11234</td>
                      <td>2021/08/24</td>
                      <td>22:30</td>
                    </tr>
                    <tr>
                      <td>11234</td>
                      <td>2021/08/24</td>
                      <td>22:30</td>
                    </tr>
                    <tr>
                      <td>11234</td>
                      <td>2021/08/24</td>
                      <td>22:30</td>
                    </tr>
                    <tr>
                      <td>11234</td>
                      <td>2021/08/24</td>
                      <td>22:30</td>
                    </tr>
                    <tr>
                      <td>11234</td>
                      <td>2021/08/24</td>
                      <td>22:30</td>
                    </tr>
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
            </div>
            <div className="card">
              <h5 className="card-header">Upload Document</h5>
              <div className="card-body">
                <div className="mb-5">
                  <label
                    for="formFileMultiple"
                    className="form-label fs-4 fw-bold"
                  >
                    Upload File
                  </label>
                  <input
                    className="form-control border-1"
                    type="file"
                    id="formFileMultiple"
                    multiple
                  />
                  <p>
                    <select class="form-select" id="formFileMultiple">
                      <option selected>Choose...</option>
                      <input type="file" id="formFileMultiple" />
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ClientLayout>
  );
};

export default ClientCaseDetails;
