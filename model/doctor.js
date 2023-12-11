const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/mydb", {})
  .then(function () {
    console.log("connection established");
  })
  .catch((err) => console.error(err + " problem occer in doctor model"));
const DoctorScema = new mongoose.Schema({
  name: { type: String, trim: true },

  location: { type: String, trim: true },
  qualification: { type: String, trim: true },
});
const doctorModel = mongoose.model("doctorModel", DoctorScema);
module.exports = doctorModel;
