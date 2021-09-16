import React, { Children, Component, useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import jwtDecode from "jwt-decode";
import logo from "../image/logo.png";
const AttorneyLayout = (props) => {
  const [userName, setUserName] = useState("");

  const handleDashboard = () => {
    props.history.push("/attorney/dashboard");
  };

  const handleCaseList = () => {
    props.history.push("/attorney/cases");
  };

  const handleMeeting = () => {
    props.history.push("/attorney/meetings");
  };

  const handleNotifications = () => {
    props.history.push("/attorney/notifications");
  };

  const handleCredentials = () => {
    props.history.push("/attorney/credentials");
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    props.history.push("/login");
  };

  useEffect(() => {
    const jwt = localStorage.getItem("token");
    const user = jwtDecode(jwt);

    const fullName = [user.first_name, user.last_name].join(" ");
    setUserName(fullName);
  });
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-dark bg-success mb-5">
        <div className="container">
          {/* Logo */}
          <Link to="#">
            <img className="w-50" src={logo} alt="logo" />
          </Link>
          <button className="btn btn-danger fs-5" onClick={handleLogout}>
            Log Out
          </button>
        </div>
      </nav>
      {/* Nav END */}
      {/* container starts here */}
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 d-flex justify-content-center bg-warning text-light fs-2 bg-opacity-75 p-5">
            {userName}
          </div>
        </div>
        <div className="row">
          <div className="col-3 ">
            <div class="card">
              <div class="card-header" type="button">
                Featured
              </div>
              <ul class="list-group list-group-flush" type="button">
                <li
                  class="list-group-item"
                  type="button"
                  onClick={handleDashboard}
                >
                  Dashboard
                </li>
                <li
                  class="list-group-item"
                  type="button"
                  onClick={handleCaseList}
                >
                  Case List
                </li>
                <li
                  class="list-group-item"
                  type="button"
                  onClick={handleMeeting}
                >
                  Meeting
                </li>
                <li
                  class="list-group-item"
                  type="button"
                  onClick={handleNotifications}
                >
                  Notifications
                </li>
                <li
                  class="list-group-item"
                  type="button"
                  onClick={handleCredentials}
                >
                  Credentials
                </li>
              </ul>
            </div>
          </div>
          <div className="col-9">{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(AttorneyLayout);
