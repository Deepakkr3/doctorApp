const express = require("express");
const controll = require("../controller/usercontroller");
const app = express();
const userRout = express.Router();

userRout.route("/").get(controll.userGets).post(controll.addUser);
userRout.route("/signUP").post(controll.signUP);
userRout.route("/login").post(controll.login);

module.exports = userRout;
