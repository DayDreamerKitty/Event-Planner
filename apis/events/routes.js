const express = require("express");

const {
  eventListFetch,
  eventCreate,
  eventUpdate,
  eventDelete,
  eventDetail,
  eventBooked,
  eventLimit,
  fetchEvent,
} = require("./controllers");

const router = express.Router();

router.param("eventId", async (req, res, next, eventId) => {
  const event = await fetchEvent(eventId, next);
  if (event) {
    req.event = event;
    next();
  } else {
    next({ status: 404, message: "Event not found!" });
  }
});

router.post("/", eventCreate);

router.get("/", eventListFetch);

router.put("/:eventId", eventUpdate);

router.delete("/:eventId", eventDelete);

router.get("/:eventId", eventDetail);

router.post("/booked", eventBooked);

router.post("/limit", eventLimit);

module.exports = router;
