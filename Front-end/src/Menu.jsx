import React from "react";

function Menu() {
  return (
    <div>
      <div class="out">
        <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid navs ">
          <a style={{color:"white",margin:"50px"}} className="inns navbar-brand hed inss" href="/">
          <i className="fa-hi7"></i> Foot-Ball Players
          </a>
          <div className=" d-flex justify-content-end">
            <a style={{fontFamily:"Verdana", border:"2px white bold"}} className="inn " href="/Createemployee">
              Add Players 
            </a>
            <a style={{fontFamily:"Verdana"}} className="inn " href="/employeelist">
              Players List
            </a>
            <a style={{fontFamily:"Verdana", marginLeft:"90px"}} className="inns hed " href="/">
              Login Here
            </a>
            {/* <a style={{fontFamily:"Verdana"}} className="inn" href="/CreateSalary">
              Players Salary
            </a>
            <a style={{fontFamily:"Verdana"}} className="inn" href="/SalaryList">
              Salary List
            </a> */}
          </div>
        </div>
      </nav>
      
      </div>
      
    </div>
  );
}

export default Menu;
