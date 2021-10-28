const mongoose = require("mongoose");

const PlannerSchema = mongoose.Schema({
  organizer: { type: String, maxLength: 20, unique: true },
  name: String,
  email: { type: String, required: true },
  image: { type: String, required: true },
  numOfSeats: { type: Number, min: 5 },
  bookedSeats: { type: Number, default: 0 },
  startDate: { type: Date },
  endDate: { type: Date },
});

module.exports = mongoose.model("Planner", PlannerSchema);
