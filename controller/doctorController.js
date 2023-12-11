const express = require("express");
const doctorModel = require("../model/doctor");
const app = express();
exports.addDoctor = async (req, res) => {
  try {
    const doctor = await doctorModel.create(req.body);

    res.status(200).json({ status: "success", doctoe: doctor });
  } catch (err) {
    console.error(err);
  }
};
