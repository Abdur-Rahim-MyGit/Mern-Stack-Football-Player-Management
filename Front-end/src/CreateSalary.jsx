import React, { useState, useEffect } from "react";
import axios from "axios";

function CreateSalary() {
  const [userForm, setUserForm] = useState({
    title: "",
    shortStory: "",
    publishedDate: "",
    storyLink: "",
  });
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/employees/")
      .then((res) => {
        setEmployees(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [employees]);

  const inputsHandler = (e) => {
    setUserForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/salary/create-salary", userForm)
      .then((res) => {
        console.log(res.data);
        setUserForm({
          title: "",
          shortStory: "",
          publishedDate: "",
          storyLink: "",
        });
      });
  };

  return (
    <div>
      <h2>Submit a New Story</h2>
      <div className="form-wrapper">
        <form onSubmit={onSubmit}>
         
       
        
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              type="text"
              className="form-control"
              name="title"
              id="title"
              value={userForm.title}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Short Story</label>
            <textarea
              className="form-control"
              name="shortStory"
              id="shortStory"
              value={userForm.shortStory}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Published Date</label>
            <input
              type="date"
              className="form-control"
              name="publishedDate"
              id="publishedDate"
              value={userForm.publishedDate}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Story Link</label>
            <input
              type="url"
              className="form-control"
              name="storyLink"
              id="storyLink"
              value={userForm.storyLink}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-primary">
              {" "}
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateSalary;