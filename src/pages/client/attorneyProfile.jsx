import ClientLayout from "../../layouts/clientLayout";
import React, { Component, useEffect, useState } from "react";
import axios from "axios";
const AttorneyProfile = (props) => {
  const [credentials, setCredentials] = useState([]);
  useEffect(() => {
    console.log(props.location);
    const attorneyCredentials = async () => {
      const result = await axios.get(
        `http://localhost:8000/attorney/credentials/${props.location.state.id}`
      );
      console.log(result.data);
      setCredentials(result.data);
    };
    attorneyCredentials();
  }, []);
  return (
    <ClientLayout>
      <div>
        <div className="card text-center mb-5">
          <div className="card-header">Attorney Information</div>
          <div className="card-body d-flex justify-content-between">
            <div className="card  text-center w-25">
              <div className="card-body mt-4">
                <h5 className="card-title">Bar ID</h5>
                <p>56786212345</p>
              </div>
            </div>
            <div className="card text-center w-25">
              <div className="card-body mt-4">
                <h5 className="card-title mb-3">Speciality</h5>
                <p>Criminal Litigation</p>
              </div>
            </div>
            <div className="card text-center w-25">
              <div className="card-body mt-4">
                <h5 className="card-title">Tribunal</h5>
                <p>Supreme Court</p>
              </div>
            </div>
            <div className="card text-center w-25">
              <div className="card-body mt-4 ">
                <h5 className="card-title">Rating</h5>
                <p>4.5/5</p>
              </div>
            </div>
          </div>
          <div className="card-footer text-muted"></div>
        </div>
        <div className="card text-center mb-5">
          <div className="card-header">Attorney Credentials</div>
          <div className="card-body d-flex justify-content-between row">
            {credentials.map((c) => (
              <div className="card text-center col-4">
                <div className="card-body mt-4">
                  <h5 className="card-title">Document</h5>
                  <p>
                    <a href={`http://localhost:8000/${c.document}`}>Check</a>
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="card-footer text-muted"></div>
        </div>
      </div>
    </ClientLayout>
  );
};

export default AttorneyProfile;
