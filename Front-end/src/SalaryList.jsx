import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function SalaryList() {
  const [salaries, setSalaries] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/salary/")
      .then((res) => {
        setSalaries(res.data.data);
        console.log(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const deleteSalary = (_id) => {
    console.log(_id);
    axios
      .delete(`http://localhost:4000/salary/delete-salary/${_id}`)
      .then(() => {
        console.log("Data successfully deleted!");
        // Update the state to remove the deleted item
        setSalaries(salaries.filter((salary) => salary._id !== _id));
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        // Handle promise rejection
      });
  };

  return (
    <div className="container">
      <div className="row">
        {salaries.map((salary) => (
          <div className="col-md-4" key={salary._id}>
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">{salary.title}</h5>
                <p className="card-text"> {salary.shortstory}</p>
                <p className="card-text"> {salary.publisheddate}</p>
                <p className="card-text"> {salary.storylink}</p>
                <div className="d-flex justify-content-between">
                  <Link
                    className="btn btn-primary btn-sm me-2"
                    to={"/EditSalary/" + salary._id}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteSalary(salary._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SalaryList;