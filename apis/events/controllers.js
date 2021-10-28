const Planner = require("../../db/model/Planner");

const eventListFetch = async (req, res, next) => {
  try {
    const events = await Planner.find();
    return res.json(events);
  } catch (error) {
    next(error);
  }
};

const eventCreate = async (req, res, next) => {
  try {
    const newEvent = await Planner.create(req.body);
    res.status(201).json(newEvent);
  } catch (error) {
    next(error);
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
      const errorMsg = {
        status: 404,
        message: "Event not found!",
      };
      next(errorMsg);
    }
  } catch (error) {
    next(error);
  }
};

const eventDelete = async (req, res, next) => {
  try {
    const foundEvent = await Planner.findByIdAndRemove(req.params.eventId);
    // const manyEvent = await Planner.deleteMany(req.body.eventId);
    if (foundEvent) {
      return res.status(204).end();
    } else {
      const errorMsg = {
        status: 404,
        message: "Event not found!",
      };
      next(errorMsg);
    }
  } catch (error) {
    next(error);
  }
};

const eventDetail = async (req, res, next) => {
  try {
    const detailEvent = await Planner.findById(req.params.eventId);
    if (detailEvent) {
      return res.json(detailEvent);
    } else {
      const errorMsg = {
        status: 404,
        message: "Event not found!",
      };
      next(errorMsg);
    }
  } catch (error) {
    next(error);
  }
};

const eventBooked = async (req, res, next) => {
  try {
    const fullyBooked = await Planner.find({
      $expr: { $eq: ["$numOfSeats", "$bookedSeats"] },
    });
    return res.json(fullyBooked);
  } catch (error) {
    next(error);
  }
};

const eventLimit = async (req, res, next) => {
  try {
    const limitedEvents = await Planner.find({ offset: 5, limit: 2 });
    return res.json(limitedEvents);
  } catch (error) {
    next(error);
  }
};
module.exports = {
  eventListFetch,
  eventCreate,
  eventUpdate,
  eventDelete,
  eventDetail,
  eventBooked,
  eventLimit,
};
