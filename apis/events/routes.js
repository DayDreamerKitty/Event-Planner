const express = require("express");

const {
  eventListFetch,
  eventCreate,
  eventUpdate,
  eventDelete,
  eventDetail,
  eventBooked,
} = require("./controllers");

const router = express.Router();

router.post("/", eventCreate);

router.get("/", eventListFetch);

router.put("/:eventId", eventUpdate);

router.delete("/:eventId", eventDelete);

router.get("/:eventId", eventDetail);

router.get("/booked", eventBooked);

module.exports = router;
