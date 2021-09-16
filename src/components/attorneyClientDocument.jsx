import React, { Component } from "react";
const AttorneyClientDocument = (props) => {
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
            <div className="card">
              <h5 className="card-header">Documents</h5>
              <div className="card-body">
                <h5 className="card-title">
                  Publish your document here to keep your clients informed
                </h5>
                <p className="card-text">
                  Publish your documents to share valueable information with
                  your clients reegarding the case you are handling for them and
                  to keep your clients up to date abouth everything regarding
                  the case
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-4">
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
    </div>
  );
};

export default AttorneyClientDocument;
