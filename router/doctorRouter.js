const express = require("express");
const doctorController = require("../controller/doctorController");
const app = express();
const DoctorRout = express.Router();

// userRout.route("/").get(controll.userGets).post(controll.addUser);
DoctorRout.route("/").get((req, res) => {
  res.status(200).json({
    status: res.statusCode,
    message: "hyy doctor",
  });
});
DoctorRout.route("/").post(doctorController.addDoctor);

module.exports = DoctorRout;
