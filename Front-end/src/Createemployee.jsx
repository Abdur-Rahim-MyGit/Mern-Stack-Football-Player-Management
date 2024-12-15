import React, { useState } from "react";
import axios from "axios";

function Createemployee() {
  const [userForm, setuserForm] = useState({
    name: "",
    email: "",
    empno: "",
    score: "",
    assists: "",
    apna: "",
  }); 
  const inputsHandler = (e) => {
    setuserForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/employees/create-employee", userForm)
      .then((res) => {
        console.log(res.data);
        setuserForm({
          name: "",
          email: "",
          empno: "",
          score: "",
          assists: "",
          apna: "",

        });
      });
  };
  return (
    <div>
      <div className="form-wrapper song">
        <form onSubmit={onSubmit}>
          <div className="lab">
          
          <div className="mb-3 djs">
            <label className="form-label">Player Name :</label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              value={userForm.name}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3 djs">
            <label className="form-label">Team Nam : </label>
            <input
              type="text"
              className="form-control"
              name="email"
              id="email"
              value={userForm.email}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3 djs">
            <label className="form-label">Position : </label>
            <input
              type="text"
              className="form-control"
              name="empno"
              id="empno"
              value={userForm.empno}
              onChange={inputsHandler}
            />
          </div></div>
          <div>
                  <div className="mb-3 dj">
            <label className="form-label">Score : </label>
            <input
              type="text"
              className="form-control"
              name="score"
              id="score"
              value={userForm.score}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3 dj">
            <label className="form-label">Assists : </label>
            <input
              type="text"
              className="form-control"
              name="assists"
              id="assists"
              value={userForm.assists}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3 dj">
            <label className="form-label">Appearanes :</label>
            <input
              type="text"
              className="form-control"
              name="apna"
              id="apna"
              value={userForm.apna}
              onChange={inputsHandler}
            />
          </div>
          </div>
    
          <div className="mb-3 dj djs">
            <button type="submit" className="btn btn-primary bts">
              Add Player
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Createemployee;
