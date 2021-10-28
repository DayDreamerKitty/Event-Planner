const Planner = require("../../db/model/Planner");

const eventListFetch = async (req, res, next) => {
  try {
    const events = await Planner.find();
    return res.json(events);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const eventCreate = async (req, res, next) => {
  try {
    const newEvent = await Planner.create(req.body);
    res.status(201).json(newEvent);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const eventUpdate = async (req, res, next) => {
  const { eventId } = req.params;
};

module.exports = { eventListFetch, eventCreate, eventUpdate };
