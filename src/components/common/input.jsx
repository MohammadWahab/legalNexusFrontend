import React, { Component } from "react";
const Input = (props) => {
  return (
    <div className="form-group mb-3">
      <label htmlFor={props.name}>{props.label}</label>
      <input
        value={props.value}
        onChange={props.onChange}
        name={props.name}
        id={props.name}
        type="text"
        className="form-control"
      />
    </div>
  );
};

export default Input;
