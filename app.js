const express = require("express");
const connectDB = require("./db/database");
const app = express();
const eventRoutes = require("./apis/events/routes");

connectDB();
app.use(express.json());
app.use("/api/events", eventRoutes);

app.listen(8000, () => console.log("Welcome!"));
