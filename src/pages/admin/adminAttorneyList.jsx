import AdminLayout from "../../layouts/adminLayout";
import React, { Component, useState, useEffect } from "react";
import axios from "axios";
const AdminAttorneyList = (props) => {
  const [attorneys, setAttorneys] = useState([]);

  const [value, setValue] = useState();

  const refresh = () => {
    // it re-renders the component
    setValue({});
  };

  const handleAction = (c) => {
    if (c.is_permitted) {
      c.is_permitted = false;
    } else {
      c.is_permitted = true;
    }

    const takeAdministritiveAction = async () => {
      const postBody = {
        is_permitted: c.is_permitted,
      };
      const updateUser = await axios.post(
        `http://localhost:8000/admin/action/${c.id}`,
        postBody
      );
      console.log(updateUser.data);
      if (updateUser.data) {
        refresh();
      }
    };
    takeAdministritiveAction();
  };

  useEffect(() => {
    const getAttorney = async () => {
      const result = await axios.get(
        `http://localhost:8000/admin/summon/attorney`
      );
      //console.log(result.data);
      setAttorneys(result.data);
    };
    getAttorney();
  }, []);
  return (
    <AdminLayout>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Attorney ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {attorneys.map((c) => (
            <tr>
              <th scope="row">{c.id}</th>
              <td>{`${c.first_name} ${c.last_name}`}</td>
              <td>{c.email}</td>
              <td className={c.is_permitted ? "" : "text-danger"}>
                {c.is_permitted ? "Active" : "Restricted"}
              </td>
              <td className="d-flex">
                <button
                  className="btn btn-success me-1"
                  disabled={c.is_permitted}
                  onClick={() => handleAction(c)}
                >
                  Activate
                </button>
                <button
                  className="btn btn-danger ms-1"
                  disabled={!c.is_permitted}
                  onClick={() => handleAction(c)}
                >
                  Restrict
                </button>
              </td>
            </tr>
          ))}
          {/* <tr>
            <th scope="row">1</th>
            <td>Wahab</td>
            <td>Wahab@gamil.com</td>
            <td>1</td>
            <td>Active</td>
            <td>
              <button className="btn btn-success me-1">Activate</button>
              <button className="btn btn-danger ms-1">Restrict</button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Robin</td>
            <td>robin@gamil.com</td>
            <td>4</td>
            <td>Active</td>
            <td>
              <button className="btn btn-success me-1">Activate</button>
              <button className="btn btn-danger ms-1">Restrict</button>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>masum</td>
            <td>masum@gamil.com</td>
            <td>10</td>
            <td>Active</td>
            <td>
              <button className="btn btn-success me-1">Activate</button>
              <button className="btn btn-danger ms-1">Restrict</button>
            </td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>talha</td>
            <td>talha@gamil.com</td>
            <td>0</td>
            <td className="text-danger">Restricted</td>
            <td>
              <button className="btn btn-success me-1">Activate</button>
              <button className="btn btn-danger ms-1">Restrict</button>
            </td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>shakil</td>
            <td>shakil@gamil.com</td>
            <td>1000</td>
            <td>Active</td>
            <td>
              <button className="btn btn-success me-1">Activate</button>
              <button className="btn btn-danger ms-1">Restrict</button>
            </td>
          </tr> */}
        </tbody>
      </table>
      {/* pagination */}
      <nav aria-label="Page navigation example">
        <ul class="pagination d-flex justify-content-center">
          <li class="page-item">
            <a class="page-link" href="#">
              Previous
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              1
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              2
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              3
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </AdminLayout>
  );
};

export default AdminAttorneyList;
