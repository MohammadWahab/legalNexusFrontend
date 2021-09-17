import React, { Component, useState } from "react";
import Input from "../components/common/input";
import "../image/img.css";
import axios from "axios";

const Registration = () => {
  const [regData, setRegData] = useState({
    firstName: '',
    lastName: '',
    nidNumber: '',
    email: '',
    password: '',

    street:'',
    area: '',
    division: '',
    district: ''
  });

  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    
    console.log(regData);

    const address = await (await axios.post(`http://localhost:8000/user/address/entry`, regData)).data
  
    const user = await (await axios.post(`http://localhost:8000/user/registration`, {...regData, isPermitted: true, roleId: 1, addressId:address.insertId})).data

    console.log(user);

    setLoading(false)
  };

  const handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    setRegData({...regData, [name]: value});
  };

  return (
    <div class="img">
      <div className="container row align-items-center vh-100 pt-5 pb-5">
        <div className="col-6 card mx-auto" style={{background: 'rgba(108, 117, 125, 0.4)'}}>
          <div className="card-body">
            <h5 className="card-title fs-2 text-white text-center">Sign Up</h5>
            <form className="text-light fs-4" onSubmit={handleSubmit}>
              <div className="form-group">
                <Input name="firstName" label="First Name" value={regData.firstName} onChange={handleChange} required/>
              </div>
              <div className="form-group">
                <Input name="lastName" label="Last Name" value={regData.lastName} onChange={handleChange} required/>
              </div>
              <div className="form-group">
                <Input name="nidNumber" label="NID" value={regData.nidNumber} onChange={handleChange} required/>
              </div>
              <div className="form-group">
                <Input
                  name="email"
                  label="Email"
                  value={regData.email}
                  onChange={handleChange}
                  required
                />
                {/* {emailError && (
                  <div className="alert alert-danger">{emailError}</div>
                )} */}
              </div>
              <div className="form-group mb-4">
                <Input
                  name="password"
                  label="Password"
                  id="password"
                  type="password"
                  value={regData.password}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <p className="text-info border-light border-bottom">Address</p>
                <div className="row">
                  <div className="col-6">
                    <Input name="street" label="Street" value={regData.street} onChange={handleChange} required/>
                    <Input name="area" label="Area" value={regData.area} onChange={handleChange} required/>
                  </div>
                  <div className="col-6">
                    <Input name="division" label="Division" value={regData.division} onChange={handleChange} required/>
                    <Input name="district" label="Distric" value={regData.district} onChange={handleChange} required/>
                  </div>
                </div>
              </div>
             
              <button className="btn btn-primary" type="submit">
                {loading && <> 
                  <div class="spinner-border spinner-border-sm mr-1" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                  &nbsp;
                </>}
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
