import AttorneyLayout from "../../layouts/attorneyLayout";
import React, { Component, useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import axios from "axios";
const AttorneyCredential = (props) => {
  const [file, setFile] = useState(null);
  const [attorneyCredentials, setAttorneyCredentials] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    try {
      const jwt = localStorage.getItem("token");
      const user = jwtDecode(jwt);
      console.log(user);
      const res = await axios.post(
        `http://localhost:8000/upload/credentials/${user.id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  useEffect(() => {
    const jwt = localStorage.getItem("token");
    const user = jwtDecode(jwt);
    const credentials = async () => {
      const result = await axios.get(
        `http://localhost:8000/attorney/credentials/${user.id}`
      );
      setAttorneyCredentials(result.data);
      console.log(result.data);
    };
    credentials();
  }, []);

  return (
    <AttorneyLayout>
      <div className="card text-center mb-5">
        <div className="card-header">Credentials</div>
        <div className="card-body d-flex justify-content-between row">
          {attorneyCredentials.map((c) => (
            <div className="card  text-center col-4">
              <h5 className="card-title">Credential</h5>
              <p>
                <a href={`http://localhost:8000/${c.document}`}>Check</a>
              </p>
            </div>
          ))}
        </div>
        <div className="card-footer text-muted"></div>
      </div>
      <div className="card  mb-5">
        <div className="card-header text-center">Upload Credential</div>
        <div className="card-body d-flex justify-content-between ">
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
          <div className="card">
            <div className="card-body text-center">
              <p>Upload your credentials as they are extremely essential</p>
              <p>to get connected with more clients and to come to their aid</p>
              <p>
                by helping them get justice.These documents you provide would{" "}
              </p>
              <p>help substantiate your claim of how professional you are </p>
              <p>as an Attorney of the legal system</p>
            </div>
          </div>
        </div>
      </div>
    </AttorneyLayout>
  );
};

export default AttorneyCredential;
