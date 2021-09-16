import React, { Component, useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import jwtDecode from "jwt-decode";
import logo from "../image/logo.png";
const ClientLayout = (props) => {
  const [userName, setUserName] = useState("");

  const handleDashboard = () => {
    props.history.push("/client/dashboard");
  };
  const handleCaseList = () => {
    props.history.push("/client/cases");
  };
  const handleNotifications = () => {
    props.history.push("/client/notifications");
  };
  const handleMeeting = () => {
    props.history.push("/client/meetings");
  };
  const handleFindAttorney = () => {
    props.history.push("/search/attorney");
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
          <div className="col-12 d-flex justify-content-center bg-warning bg-opacity-75 p-5 text-light fs-2">
            {userName}
          </div>
        </div>
        <div className="row">
          <div className="col-3 ">
            <div class="card">
              <div class="card-header">Featured</div>
              <ul class="list-group list-group-flush">
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
                  onClick={handleFindAttorney}
                >
                  Find Attorney
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

export default withRouter(ClientLayout);
