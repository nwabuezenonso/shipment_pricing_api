require("dotenv").config();
const mongoose = require("mongoose");
const Pricing = require("./models/pricing");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const pricingData = [
  { cargoType: "Standard", weightRange: 5, basePrice: 10, perKmRate: 2 },
  { cargoType: "Standard", weightRange: 10, basePrice: 15, perKmRate: 2.5 },
  { cargoType: "Standard", weightRange: 20, basePrice: 20, perKmRate: 3 },

  { cargoType: "Fragile", weightRange: 5, basePrice: 15, perKmRate: 2.5 },
  { cargoType: "Fragile", weightRange: 10, basePrice: 20, perKmRate: 3 },
  { cargoType: "Fragile", weightRange: 20, basePrice: 30, perKmRate: 4 },

  { cargoType: "Heavy", weightRange: 5, basePrice: 20, perKmRate: 3 },
  { cargoType: "Heavy", weightRange: 10, basePrice: 30, perKmRate: 4 },
  { cargoType: "Heavy", weightRange: 20, basePrice: 50, perKmRate: 5 },
];

const seedDB = async () => {
  try {
    await Pricing.deleteMany(); // Clear old data
    await Pricing.insertMany(pricingData);
    console.log("Pricing data seeded successfully!");
    mongoose.connection.close();
  } catch (error) {
    console.error("Seeding failed:", error);
    mongoose.connection.close();
  }
};

seedDB();
