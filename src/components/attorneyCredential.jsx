import React, { Component } from "react";
const AttorneyCredential = (props) => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-dark bg-success mb-5 p-3">
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
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-center bg-success bg-opacity-75 p-5 ">
            Name Of The Attorney
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-8 ">
            <div class="card">
              <h5 class="card-header">Credential</h5>
              <div class="card-body">
                <h5 class="card-title">
                  Prove your worth by providing credential
                </h5>
                <p class="card-text">
                  Adding credentials or documents related to your education
                  substatntiate your claim of how good of an attorney you are
                  and this will help you get more clients.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div class="card">
              <h5 class="card-header">Add Credential</h5>
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttorneyCredential;
