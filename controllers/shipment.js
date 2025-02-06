const Pricing = require("../models/pricing");

const calculateShippingCost = async (req, res) => {
  try {
    const { weight, distance, cargoType } = req.body;

    const pricing = await Pricing.findOne({
      cargoType,
      weightRange: { $gte: weight },
    }).sort({ weightRange: 1 });

    if (!pricing) {
      return res.status(404).json({ message: "Pricing not found" });
    }

    const totalCost = pricing.basePrice + distance * pricing.perKmRate;

    res.json({ totalCost });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  calculateShippingCost,
};
