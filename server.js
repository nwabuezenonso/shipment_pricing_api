require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const shipmentRoutes = require("./routes/shipment");

const PORT = process.env.PORT || 8800;

const app = express();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  });

app.use("/api/shipping", shipmentRoutes);
