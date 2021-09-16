import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
const AttorneyMeeting = (props) => {
  const [selectedDate, setSelectedDate] = useState(null);
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
          {/* second part */}
          <div className="col-4">
            <div class="card">
              <h5 class="card-header">Meeting Time setup</h5>
              <div class="card-body">
                <div>
                  <div>
                    <p className="mx-3 fs-4 text-secondary">Date & Time</p>
                  </div>
                  <DatePicker
                    className="p-2 m-3 rounded"
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    dateFormat="dd/MM/yyyy"
                    filterDate={(date) =>
                      date.getDay() != 6 && date.getDay() != 0
                    }
                    isClearable
                    showYearDropdown
                    scrollableMonthYearDropdown
                    showTimeSelect
                    dateFormat="Pp"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttorneyMeeting;
