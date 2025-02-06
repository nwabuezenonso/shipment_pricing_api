const mongoose = require("mongoose");

const pricingSchema = new mongoose.Schema({
  cargoType: { type: String, required: true },
  weightRange: { type: Number, required: true },
  basePrice: { type: Number, required: true },
  perKmRate: { type: Number, required: true },
});

pricingSchema.index({ cargoType: 1, weightRange: 1 });
module.exports = mongoose.model("Pricing", pricingSchema);
