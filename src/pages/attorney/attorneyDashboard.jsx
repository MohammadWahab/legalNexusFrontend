import AttorneyLayout from "../../layouts/attorneyLayout";
import React, { Component } from "react";
const AttorneyDashboard = (props) => {
  return (
    <div>
      <AttorneyLayout>
        <div className="row mb-3">
          <div className="d-flex">
            <div class="card text-center w-50 me-1">
              <div class="card-header">Cases</div>
              <div class="card-body">
                <h5 class="card-title">Total engagement</h5>
                <p class="card-text">15</p>
              </div>
            </div>
            <div class="card text-center w-50 ms-1">
              <div class="card-header">Today's meeting</div>
              <div class="card-body">
                <h5 class="card-title">Upcoming meeting to be attended</h5>
                <p class="card-text">5</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="d-flex">
            <div class="card text-center w-50 me-1">
              <div class="card-header">Notifications</div>
              <div class="card-body">
                <h5 class="card-title">Notifications remaining to check</h5>
                <p class="card-text">25</p>
              </div>
            </div>
            <div class="card text-center w-50 ms-1">
              <div class="card-header">Requests</div>
              <div class="card-body">
                <h5 class="card-title">You have Requests to Check</h5>
                <p class="card-text">15</p>
              </div>
            </div>
          </div>
        </div>
      </AttorneyLayout>
    </div>
  );
};

export default AttorneyDashboard;
