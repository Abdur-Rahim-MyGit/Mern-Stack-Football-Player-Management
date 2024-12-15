import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function EditSalary() {
  const [userForm, setUserForm] = useState({
    title: "",
    shortStory: "",
    publishedDate: "",
    storyLink: "",
  });
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState(null);

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:4000/employees/")
      .then((res) => {
        setEmployees(res.data.data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:4000/salary/get-salary/" + params.id)
      .then((res) => {
        setUserForm({
          title: res.data.data.title,
          shortStory: res.data.data.shortStory,
          publishedDate: res.data.data.publishedDate,
          storyLink: res.data.data.storyLink,
        });
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [params.id]);

  const inputsHandler = (e) => {
    setUserForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onUpdate = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:4000/salary/update-salary/" + params.id, {
        title: userForm.title,
        shortStory: userForm.shortStory,
        publishedDate: userForm.publishedDate,
        storyLink: userForm.storyLink,
      })
      .then((res) => {
        console.log({ status: res.status });
        navigate("/SalaryList");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div>
      <div className="form-wrapper">
        <form onSubmit={onUpdate}>
         

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
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditSalary;