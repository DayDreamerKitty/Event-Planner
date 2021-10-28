const mongoose = require("mongoose");

const PlannerSchema = mongoose.Schema({
  organizer: String,
  name: String,
  email: String,
  image: String,
  numOfSeats: Number,
  bookedSeats: Number,
  startDate: Date,
  endDate: Date,
});

module.exports = mongoose.model("Planner", PlannerSchema);
