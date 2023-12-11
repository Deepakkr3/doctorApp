const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/mydb", {})
  .then(function () {
    console.log("connection established");
  })
  .catch((err) => console.error(err + " plese connect your databse before"));
const UserScema = new mongoose.Schema({
  name: { type: String, trim: true },
  emal: { type: String, trim: true },
  paswaord: { type: String, trim: true },
  villege: { type: String, trim: true },
  createdAt: { type: Date, default: new Date() },
  case: { enum: ["serious", "normal"] },
  ambulane: ["yes", "no"],
});
const UserMod = mongoose.model("Mod", UserScema);
module.exports = UserMod;
