import ClientLayout from "../../layouts/clientLayout";
const ClientCaseList = (props) => {
  const handleCheckDetails = () => {
    props.history.push("/client/case/details");
  };
  return (
    <ClientLayout>
      <div className>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Case ID</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col" onClick={handleCheckDetails}>
                Check details
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={handleCheckDetails}
                >
                  CHECK
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={handleCheckDetails}
                >
                  CHECK
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={handleCheckDetails}
                >
                  CHECK
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={handleCheckDetails}
                >
                  CHECK
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={handleCheckDetails}
                >
                  CHECK
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={handleCheckDetails}
                >
                  CHECK
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={handleCheckDetails}
                >
                  CHECK
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">8</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={handleCheckDetails}
                >
                  CHECK
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">9</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={handleCheckDetails}
                >
                  CHECK
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">10</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={handleCheckDetails}
                >
                  CHECK
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="d-flex justify-content-center">
          <nav aria-label="Page navigation example">
            <ul class="pagination">
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
        </div>
      </div>
    </ClientLayout>
  );
};

export default ClientCaseList;
