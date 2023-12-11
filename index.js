const mongoose = require("mongoose");
const express = require("express");
const userRout = require("./router/userRouter");
const app = express();
const userMod = require("./model/user");
const medicineModel = require("./model/doctor");
const doctorRoute = require("./router/doctorRouter");
const medRout = require("./router/medicineRoute");

app.use(express.json());
app.use("/ausers", userRout);
app.use("/doctor", doctorRoute);
app.use("/medicine", medRout);

console.log("hellow devloper");
app.listen(8080, function (req, res) {
  console.log("listening on");
});
