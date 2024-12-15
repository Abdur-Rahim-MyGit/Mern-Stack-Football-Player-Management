const express = require("express");                                                                                                                                                                                                                                                                                                                                                                                               
const router = express.Router();

let employeeschema = require("../models/Employee");

router.route("/create-employee").post(async (req, res, next) => {
  await employeeschema
    .create(req.body)
    .then((result) => {
      res.json({
        data: result,
        message: "data successfully added",
        status: 200,
      });
    })
    .catch((err) => {
      return next(err);
    });
});
// READ Employees
router.route("/").get(async (req, res, next) => { await employeeschema
  .find()
  .then((result) => { res.json({
  data: result,
  message: "All items successfully fetched.", status: 200,
  });
  })
  .catch((err) => { return next(err);
  });
  });
  // Delete Employee
router.route("/delete-employee/:id").delete(async (req, res, next) => {
  await employeeschema
  .findByIdAndDelete(req.params.id)
  .then(() => { res.json({
  msg: "Data successfully updated.",
  });
  })
  .catch((err) => { console.log(err);
  });
  });
// Get Single Employee
router.route("/get-employee/:id").get(async (req, res, next) => { await employeeschema
  .findById(req.params.id)
  .then((result) => { res.json({
  data: result,
  message: "Data successfully fetched.", status: 200,
  });
  })
  .catch((err) => { return next(err);
  });
  });
  
  // Update Employee
  router.route("/update-employee/:id").put(async (req, res, next) => { await employeeschema
  .findByIdAndUpdate(req.params.id, {
  $set: req.body,
  })
  .then((result) => { res.json({
  data: result,
  msg: "Data successfully updated.",
  });
  })
  .catch((err) => { console.log(err);
  });
  });
    
  
module.exports = router;
