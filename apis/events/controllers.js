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
  try {
    const event = await Planner.findByIdAndUpdate({ _id: eventId }, req.body, {
      new: true,
      runValidators: true,
    });
    if (event) {
      return res.json(event);
    } else {
      return res.status(404).json({ message: "this product doesn't exist " });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { eventListFetch, eventCreate, eventUpdate };
