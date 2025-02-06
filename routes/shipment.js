const express = require("express");
const router = express.Router();

const { calculateShippingCost } = require("../controllers/shipment");

router.post("/calculate/cost", calculateShippingCost);

module.exports = router;
