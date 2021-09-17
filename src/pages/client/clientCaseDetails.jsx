import ClientLayout from "../../layouts/clientLayout";
import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import jwtDecode from "jwt-decode";
import axios from "axios";


const ClientCaseDetails = (props) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [caseState, setCaseState] = useState({});
  const [clientName, setClientName] = useState("");
  const [attorneyName, setAttorneyName] = useState("");
  const [caseDocuments, setCaseDocuments] = useState([]);
  const [file, setFile] = useState(null);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    console.log(props.location.state.caseId);
    try {
      const res = await axios.post(
        `http://localhost:8000/case/upload/documents/${props.location.state.caseId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };


  useEffect(() => {
    console.log(props.location.state);
    setCaseState(props.location.state);
    const fullName = [
      props.location.state.firstName,
      " ",
      props.location.state.lastName,
    ].join(" ");
    setClientName(fullName);
    console.log(clientName);

    const jwt = localStorage.getItem("token");
    const user = jwtDecode(jwt);

    const attorneyFullName = [user.first_name, " ", user.last_name].join(" ");
    setAttorneyName(attorneyFullName);

    const caseDocs = async () => {
      const res = await axios.get(
        `http://localhost:8000/case/documents/${props.location.state.caseId}`
      );
      console.log(res.data);
      setCaseDocuments(res.data);
    };
    caseDocs();
  }, []);


  return (
    <ClientLayout>
      <div>
        <div className="card mb-5">
          <div className="card-header text-center">Case Details</div>
          <div className="card-body d-flex justify-content-between">
            <div className="card  text-center w-25">
              <div className="card-body p-5">
                <h5 className="card-title">State</h5>
                <p>{caseState.caseState}</p>
              </div>
            </div>
            <div className="card text-center w-25">
              <div className="card-body mt-4">
                <h5 className="card-title mb-3">Start Date</h5>
                <p>{caseState.startDate}</p>
              </div>
            </div>
            <div className="card text-center w-25">
              <div className="card-body mt-4">
                <h5 className="card-title">Client</h5>
                <p>{clientName}</p>
              </div>
            </div>
            <div className="card text-center w-25">
              <div className="card-body mt-4">
                <h5 className="card-title">Attorney</h5>,
                <p>{attorneyName}</p>
              </div>
            </div>
          </div>
          <div className="card-footer text-muted"></div>
        </div>
        <div className="card text-center mb-5">
          <div className="card-header">Case Attachments</div>
          <div className="card-body">
            <div className="row">
              {caseDocuments.map((c) => (
                <div className="card text-center col-4">
                  <div className="card-body mt-4">
                    <h5 className="card-title mb-3">Document</h5>
                    <p>
                      <a href={`http://localhost:8000/${c.document}`}>Check</a>
                    </p>
                  </div>
                </div>
              ))}
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
                <form onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="formFileLg" className="form-label">
                        upload your file
                      </label>
                      <input
                        className="form-control form-control-lg"
                        id="formFileLg"
                        type="file"
                        onChange={handleChange}
                      />
                    </div>
                    <input
                      type="submit"
                      value="Upload"
                      className="btn btn-primary btn-block mt-4"
                    />
                  </form>
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
