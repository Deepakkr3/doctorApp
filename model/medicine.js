const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/mydb", {})
  .then(function () {
    console.log("connection established");
  })
  .catch((err) => console.error(err + " plese connect your databse before"));
const medicineScema = new mongoose.Schema({
  name: { type: String, trim: true },

  quantity: { type: Number, trim: true },
  createdAt: { type: Date, default: new Date() },
});
const medicineModel = mongoose.model("medicineModel", medicineScema);
module.exports = medicineModel;
