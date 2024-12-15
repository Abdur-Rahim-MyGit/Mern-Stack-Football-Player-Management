const express = require("express");
const router = express.Router();

let salarySchema = require("../models/Salary");
const Employee = require("../models/Employee");

router.route("/create-salary").post(async (req, res, next) => {
  await salarySchema
   .create(req.body)
   .then((result) => {
      res.json({
        data: result,
        message: "data successfully added!",
        status: 200,
      });
    })
   .catch((err) => {
      return next(err);
    });
});

//read salaries
router.route("/").get(async (req, res, next) => {
  await salarySchema
   .aggregate([
      {
        $lookup: {
          from: "employees",
          localField: "title",
          foreignField: "_id",
          as: "employee",
        },
      },
    ])
   .then((result) => {
      res.json({
        data: result,
        message: "data successfully fetched!",
        status: 200,
      });
    })
   .catch((err) => {
      res.status(500).json({
        message: "Error fetching data",
        error: err,
      });
    });
});

// Delete Salary
router.route("/delete-salary/:id").delete(async (req, res, next) => {
  await salarySchema
   .findByIdAndDelete(req.params.id)
   .then(() => {
      res.json({
        msg: "Data successfully deleted.",
      });
    })
   .catch((err) => {
      res.status(500).json({
        message: "Error deleting data",
        error: err,
      });
    });
});

// Get Single Salary
router.route("/get-salary/:id").get(async (req, res, next) => {
  await salarySchema
   .findById(req.params.id)
   .then((result) => {
      if (result) {
        res.json({
          data: result,
          message: "Data successfully fetched.",
          status: 200,
        });
      } else {
        res.status(404).json({
          message: "Salary not found",
        });
      }
    })
   .catch((err) => {
      return next(err);
    });
});

// Update Salary
router.route("/update-salary/:id").put(async (req, res, next) => {
  await salarySchema
   .findByIdAndUpdate(req.params.id, {
      $set: req.body,
    })
   .then((result) => {
      if (result) {
        res.json({
          data: result,
          msg: "Data successfully updated.",
        });
      } else {
        res.status(404).json({
          message: "Salary not found",
        });
      }
    })
   .catch((err) => {
      res.status(500).json({
        message: "Error updating data",
        error: err,
      });
    });
});

module.exports = router;