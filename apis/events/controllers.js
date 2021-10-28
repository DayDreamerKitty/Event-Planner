const Planner = require("../../db/model/Planner");

const eventListFetch = async (req, res) => {
  try {
    const events = await Planner.find();
    return res.json(events);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { eventListFetch };
