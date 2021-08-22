import React, { Component } from "react";
import { withRouter } from "react-router-dom";
const AttorneyProfile = (props) => {
  const handleAddCredential = () => {
    props.history.push("/attorney/credential");
  };

  const handlePublishDocument = () => {
    props.history.push("/attorney/client/document");
  };

  const handleCreateMeeting = () => {
    props.history.push("/attorney/meeting");
  };

  const handleClientList = () => {
    props.history.push("/client/list");
  };

  const handleNotification = () => {
    props.history.push("/attorney/notifications");
  };
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-dark bg-success  mb-5 p-3">
        <div className="container">
          {/* Logo */}
          <a className="navbar-brand" href="#">
            Lawyer Consultency
          </a>
          {/* Menu */}
          <ul className="navbar-nav flex-row">
            <li className="nav-item mx-2">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item mx-2">
              <a
                className="nav-link disabled"
                href="#"
                tabindex="-1"
                aria-disabled="true"
              >
                Disabled
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* Nav END */}
      {/* container starts here */}
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-center bg-success bg-opacity-75 p-5 ">
            Name Of The Attorney
          </div>
        </div>
        <div className="row">
          <div className="d-flex mb-4 mt-4">
            <div class="card">
              <div class="card-body p-5">
                <h5 class="card-title">Upcoming meeting with clients</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
            <div class="card mx-5">
              <div class="card-body p-5">
                <h5 class="card-title">Client list for cases</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <button
                  className="btn-primary mt-5 "
                  onClick={handleClientList}
                >
                  Clients List
                </button>
              </div>
            </div>
            <div class="card">
              <div class="card-body p-5">
                <h5 class="card-title">Notification from clients</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <button
                  className="btn-primary mt-5 "
                  onClick={handleNotification}
                >
                  Notifications
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* first row ends here */}
        <div className="row">
          <div className="d-flex mb-4 mt-4">
            <div class="card">
              <div class="card-body p-5">
                <h5 class="card-title">create meeting for the clients</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <button
                  className="btn-primary mt-4 "
                  onClick={handleCreateMeeting}
                >
                  Create Meeting
                </button>
              </div>
            </div>
            <div class="card mx-5">
              <div class="card-body p-5">
                <h5 class="card-title"> document for cases</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <button
                  className="btn-primary mt-4 "
                  onClick={handlePublishDocument}
                >
                  Publish Document
                </button>
              </div>
            </div>
            <div class="card">
              <div class="card-body p-5">
                <h5 class="card-title">Add your credentials</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <button
                  className="btn-primary mt-5 "
                  onClick={handleAddCredential}
                >
                  Add credential
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* second row ends here */}
      </div>
    </div>
  );
};

export default withRouter(AttorneyProfile);
