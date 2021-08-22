import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";

const Registration = (props) => {
  const handleClient = () => {
    props.history.push("/client/registration");
  };

  const handleAttorney = () => {
    props.history.push("/attorney/registration");
  };

  const styles = {
    marginTop: "50px",
  };
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-light bg-light mb-5">
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
      {/* Content */}
      <div className="container">
        <div className="row mb-3">
          <div
            className="col-12 bg-primary bg-opacity-50 fs-1 px-5 py-5 text-center text-light"
            style={{ marginTop: "5rem" }}
          >
            <h2>Title</h2>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            <div className="card">
              <div className="d-flex justify-content-between px-3 my-2">
                <a href="#" className="btn btn-primary">
                  Go
                </a>
                <a href="#" className="btn btn-primary">
                  Go
                </a>
              </div>
              <div className="d-flex justify-content-between px-3 my-2">
                <a href="#" className="btn btn-primary">
                  Go
                </a>
                <a href="#" className="btn btn-primary">
                  Go
                </a>
              </div>
              <div className="d-flex justify-content-between px-3 my-2">
                <a href="#" className="btn btn-primary">
                  Go
                </a>
                <a href="#" className="btn btn-primary">
                  Go
                </a>
              </div>
            </div>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Registration);
