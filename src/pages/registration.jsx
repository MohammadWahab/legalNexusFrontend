import React, { Component, useState } from "react";
import Input from "../components/common/input";
import "../image/img1.css";
import axios from "axios";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const address = {
    //   street: "24",
    //   area: "uttara",
    //   division: "mymensing",
    //   district: "kishorganj",
    // };

    // const res = await axios.post(
    //   `http://localhost:8000/user/address/entry`,
    //   address
    // );
    // console.log(res.data);
    //const data = {
    //   firstName: "khalid bin",
    //   lastName: "walid",
    //   phoneNumber: "0171223433",
    //   email: "khalid@walid.com",
    //   password: "khalid12345",
    //   nidNumber: "11111111111",
    //   isPermitted: true,
    //   roleId: 2,
    //   addressId: 100,
    // };

    // const result = await axios.post(
    //   `http://localhost:8000/user/registration`,
    //   data
    // );
    // console.log(result.data);
  };

  const handleChange = (e) => {};

  return (
    <div class="container img1">
      <div className="row align-items-center vh-100">
        <div className="col-4"></div>
        <div className="col-4 card bg-secondary">
          <div className="card-body ">
            <h5 class="card-title fs-3 text-white">Sign Up</h5>
            <form className="text-light fs-4" onSubmit={handleSubmit}>
              <div className="form-group">
                <Input name="fname" label="First Name" />
              </div>
              <div className="form-group">
                <Input name="lname" label="Last Name" />
              </div>
              <div className="form-group">
                <Input name="nid" label="NID" />
              </div>
              <div className="form-group">
                <p className="text-info border-light border-bottom">Address</p>
                <Input name="street" label="Street" />
                <Input name="division" label="Division" />
                <Input name="distric" label="Distric" />
              </div>
              <div className="form-group">
                <Input
                  name="email"
                  label="Email"
                  value={email}
                  onChange={handleChange}
                />
                {emailError && (
                  <div className="alert alert-danger">{emailError}</div>
                )}
              </div>
              <div className="form-group mb-4">
                <Input
                  value={password}
                  onChange={handleChange}
                  name="password"
                  label="Password"
                  id="password"
                  type="text"
                  className="form-control"
                />
              </div>
              <button className="btn btn-primary">Sign Up</button>
            </form>
          </div>
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  );
};

export default Registration;
