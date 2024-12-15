import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function EmployeeList() {
  const [pageNumber, setPageNumber] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const pages = Array.from(Array(totalPages).keys());
  const [userForm, setUserForm] = useState([]);
  const deleteEmployee = (_id) => {
    axios
      .delete("http://localhost:4000/employees/delete-employee/" + _id)
      .then(() => {
        console.log("Data successfully deleted!");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    axios
      .get(`http://localhost:4000/employees?page=${pageNumber}`)

      .then((res) => {
        setUserForm(res.data.data);
        setTotalPages(res.data.total);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userForm]);
  return (
    <div className="song">

      <table className="songs">
        <thead >
          <tr>
            <th scope="col">Player Name </th>
            <th scope="col">Team Name </th>
            <th scope="col">Position</th>
            <th scope="col">Score</th>
            <th scope="col">Assists</th>
            <th scope="col">Appearanes</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody className="tdh">
          {userForm.map((user, index) => {
            return (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.empno}</td>
                <td>{user.score}</td>
                <td>{user.assists}</td>
                <td>{user.apna}</td>

                <td>
                  <Link 
                    className="btn btn1 btn-primary btn-sm me-2"
                    to={"/Editemployee/" +user._id}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btns btn-danger btn-sm btss"
                    onClick={() => deleteEmployee(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {pages.map((pageIndex) => (
        <input
          type="button"
          onClick={() => setPageNumber(pageIndex)}
          value={pageIndex + 1}
        />
      ))}
    </div>
  );
}
export default EmployeeList;
