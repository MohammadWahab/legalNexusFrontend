import React, { Component } from "react";
const AttorneyNotification = (props) => {
  const handleHomePage = () => {
    props.history.push("/attorney/profile");
  };

  const handleCredential = () => {
    props.history.push("/attorney/credential");
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
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 d-flex justify-content-center bg-success bg-opacity-75 p-5 ">
            Name Of The Attorney
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <div class="card">
              <div class="card-header">Featured</div>
              <ul class="list-group list-group-flush">
                <li
                  class="list-group-item p-5 "
                  role="button"
                  onClick={handleHomePage}
                >
                  Home page
                </li>
                <li
                  class="list-group-item p-5"
                  role="button"
                  onClick={handleCredential}
                >
                  Credentials
                </li>
                <li class="list-group-item p-5" role="button">
                  Upocoming Meeting
                </li>
                <li class="list-group-item p-5" role="button">
                  Documents
                </li>
              </ul>
            </div>
          </div>
          <div className="col-8">
            <table class="table table-striped table-info">
              <thead>
                <tr>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>
                    <button className="btn btn-primary">Accept</button>
                    <button className="btn btn-danger mx-2">Reject</button>
                  </td>
                </tr>
                <tr>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>
                    <button className="btn btn-primary">Accept</button>
                    <button className="btn btn-danger mx-2">Reject</button>
                  </td>
                </tr>
                <tr>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                  <td>
                    <button className="btn btn-primary">Accept</button>
                    <button className="btn btn-danger mx-2">Reject</button>
                  </td>
                </tr>
                <tr>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                  <td>
                    <button className="btn btn-primary">Accept</button>
                    <button className="btn btn-danger mx-2">Reject</button>
                  </td>
                </tr>
                <tr>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                  <td>
                    <button className="btn btn-primary">Accept</button>
                    <button className="btn btn-danger mx-2">Reject</button>
                  </td>
                </tr>
                <tr>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                  <td>
                    <button className="btn btn-primary">Accept</button>
                    <button className="btn btn-danger mx-2">Reject</button>
                  </td>
                </tr>
                <tr>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                  <td>
                    <button className="btn btn-primary">Accept</button>
                    <button className="btn btn-danger mx-2">Reject</button>
                  </td>
                </tr>
                <tr>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                  <td>
                    <button className="btn btn-primary">Accept</button>
                    <button className="btn btn-danger mx-2">Reject</button>
                  </td>
                </tr>
                <tr>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                  <td>
                    <button className="btn btn-primary">Accept</button>
                    <button className="btn btn-danger mx-2">Reject</button>
                  </td>
                </tr>
                <tr>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                  <td>
                    <button className="btn btn-primary">Accept</button>
                    <button className="btn btn-danger mx-2">Reject</button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="d-flex justify-content-center">
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button>4</button>
              <button>5</button>
              <button>6</button>
              <button>7</button>
              <button>8</button>
              <button>9</button>
              <button>10</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttorneyNotification;
