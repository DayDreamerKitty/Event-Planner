const express = require("express");

const {
  eventListFetch,
  eventCreate,
  eventUpdate,
  eventDelete,
  eventDetail,
  eventBooked,
  eventLimit,
} = require("./controllers");

const router = express.Router();

router.post("/", eventCreate);

router.get("/", eventListFetch);

router.put("/:eventId", eventUpdate);

router.delete("/:eventId", eventDelete);

router.get("/:eventId", eventDetail);

router.post("/booked", eventBooked);

router.post("/limit", eventLimit);

module.exports = router;
