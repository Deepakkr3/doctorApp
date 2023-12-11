const express = require("express");
const { models } = require("mongoose");
//const controll = require("../controller/usercontroller");
const controllMedcn = require("../controller/medcnController");
const app = express();
const MedRout = express.Router();

MedRout.route("/").post(controllMedcn.add);
module.exports = MedRout;
