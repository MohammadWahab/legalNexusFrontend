import ClientLayout from "../../layouts/clientLayout";
import React, { Component } from "react";
const ClientDashboard = (props) => {
  return (
    <div>
      <ClientLayout>
        <div className="row mb-3">
          <div className="d-flex">
            <div class="card text-center w-50 me-1">
              <div class="card-header">Cases</div>
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">15</p>
              </div>
            </div>
            <div class="card text-center w-50 ms-1">
              <div class="card-header">Today's meeting</div>
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
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
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">25</p>
              </div>
            </div>
            <div class="card text-center w-50 ms-1">
              <div class="card-header">Total Documents</div>
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">17</p>
              </div>
            </div>
          </div>
        </div>
      </ClientLayout>
    </div>
  );
};

export default ClientDashboard;
