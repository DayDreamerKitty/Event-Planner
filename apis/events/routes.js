const { Router } = require("express");
const express = require("express");

const { eventListFetch } = require("./controllers");

const router = express.Router();

router.get("/", eventListFetch);

module.exports = router;
