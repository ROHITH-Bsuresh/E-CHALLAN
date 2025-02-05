// challan-backend/models/Challan.js

const mongoose = require('mongoose');

const ChallanSchema = new mongoose.Schema({
  carNumber: { type: String, required: true },
  driverName: { type: String, required: true, maxlength: 50 },
  driverId: { type: String, required: true },
  parkingPlace: { type: String },
  parkingDuration: { type: Number, required: true },
  state: { type: String, required: true },
  district: { type: String, required: true },
  street: { type: String, required: true },
  amount: { type: Number, required: true },
  dateGenerated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Challan', ChallanSchema);
