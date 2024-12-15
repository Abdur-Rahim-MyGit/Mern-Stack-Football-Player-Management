import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Createemployee from "./Createemployee";
import Employeelist from "./Employeelist";
import Home from "./Home";
import Editemployee from "./Editemployee";
import EditSalary from "./EditSalary";
import CreateSalary from "./CreateSalary";
import SalaryList from "./SalaryList";

// import Form from "./Form";
import Menu from "./Menu";

function App() {
  return (
    <div>
      <div className="logos"></div>
      <Menu />
      <div className="container mt-5">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Createemployee" element={<Createemployee />} />
            <Route path="/Employeelist" element={<Employeelist />} />
            <Route path="/Editemployee/:id" element={<Editemployee />} />
            <Route path="/CreateSalary" element={<CreateSalary />} />
            <Route path="/SalaryList" element={<SalaryList />} />
            <Route path="/EditSalary/:id" element={<EditSalary />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
