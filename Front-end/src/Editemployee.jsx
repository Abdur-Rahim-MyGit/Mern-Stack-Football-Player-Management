import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; import axios from "axios";
function EditEmployee() {
const [userForm, setUserForm] = useState({ name: "",
email: "",
 
empno: "",score: "",
assists: "",
apna: "",

});
let params = useParams(); let navigate = useNavigate();
const inputsHandler = (e) => { setUserForm((prevNext) => ({
...prevNext,
[e.target.name]: e.target.value,
}));
};
const onUpdate = (e) => { e.preventDefault(); axios
.put("http://localhost:4000/employees/update-employee/" + params.id, { name: userForm.name,
email: userForm.email, empno: userForm.empno,score: userForm.score,assists: userForm.assists,apna: userForm.apna
})
.then((res) => {
console.log({ status: res.status }); navigate("/Employeelist");
});
};
useEffect(() => { axios
.get("http://localhost:4000/employees/get-employee/" + params.id)
.then((res) => { setUserForm({
name: res.data.data.name, email: res.data.data.email, empno: res.data.data.empno,score: res.data.data.score,
assists: res.data.data.assists,apna: res.data.data.apna,
});
});
}, []);
return (
<div>
<div className="form-wrapper song">
<form onSubmit={onUpdate}>
<div className="mb-3 dj">
<label className="form-label">Player Name : </label>
<input
type="text" className="form-control" name="name"
id="name" value={userForm.name} onChange={inputsHandler}
/>
</div>

<div className="mb-3 dj">
<label className="form-label">Team Name : </label>
<input
type="text" className="form-control" name="email"
id="email" value={userForm.email} onChange={inputsHandler}
/>
</div>
<div className="mb-3 dj">
<label className="form-label">Position : </label>
<input
type="text" className="form-control" name="empno"
id="empno" value={userForm.empno} onChange={inputsHandler}
/>
</div>
{/* --------------------------- */}
<div className="mb-3 dj">
<label className="form-label">Score : </label>
<input
type="text" className="form-control" name="score"
id="score" value={userForm.score} onChange={inputsHandler}
/>
</div>
<div className="mb-3 dj">
<label className="form-label">Assists : </label>
<input
type="text" className="form-control" name="assists"
id="assists" value={userForm.assists} onChange={inputsHandler}
/>
</div>

<div className="mb-3 dj">
<label className="form-label">Appearanes : </label>
<input
type="text" className="form-control" name="apna"
id="apna" value={userForm.apna} onChange={inputsHandler}
/>
</div>




<div className="mb-3 dj">
<button type="submit" className="btn btn-primary"> Update
</button>
</div>
</form>
</div>
</div>
);
}
export default EditEmployee;
 

