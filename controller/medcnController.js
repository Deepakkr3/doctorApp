const medModel = require("../model/medicine");
exports.add = async (req, res) => {
  try {
    const medicine = await medModel.create(req.body);
    res.status(200).json({
      medicine: medicine,
      feedback: "plese rete tis product",
    });
  } catch (err) {
    res.status(500).json({ statusbar: err, messages: [err.message] });
  }
};
