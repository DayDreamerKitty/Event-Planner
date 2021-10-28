const express = require("express");
const connectDB = require("./db/database");
const app = express();
const eventRoutes = require("./apis/events/routes");
const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");

connectDB();
app.use(express.json());
app.use(logger);
app.use("/api/events", eventRoutes);
app.use((req, res, next) => {
  res.status(404).json({ message: "Path not found!" });
});
app.use(errorHandler);
app.listen(8000, () => console.log("Welcome!"));
