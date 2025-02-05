// challan-backend/routes/challanRoutes.js

const express = require('express');
const router = express.Router();
const Challan = require('../models/Challan');

// @route   POST /api/challans
// @desc    Create a new challan
router.post('/', async (req, res) => {
  try {
    const newChallan = new Challan(req.body);
    const savedChallan = await newChallan.save();
    res.status(201).json(savedChallan);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// @route   GET /api/challans
// @desc    Get all challans
router.get('/', async (req, res) => {
  try {
    const challans = await Challan.find();
    res.json(challans);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// @route   GET /api/challans/:id
// @desc    Get a single challan by ID
router.get('/:id', async (req, res) => {
  try {
    const challan = await Challan.findById(req.params.id);
    if (!challan) return res.status(404).json({ message: 'Challan not found' });
    res.json(challan);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// @route   PUT /api/challans/:id
// @desc    Update a challan by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedChallan = await Challan.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedChallan) return res.status(404).json({ message: 'Challan not found' });
    res.json(updatedChallan);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
// Admin login
app.post('/admin-login', (req, res) => {
  const { adminId, password } = req.body;
  // Replace with actual authentication logic
  if (adminId === 'admin' && password === 'admin123') {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

// Admin approve challan
app.post('/admin/challan/approve/:id', async (req, res) => {
  try {
    await Challan.findByIdAndUpdate(req.params.id, { isPaid: true });
    res.send('Challan approved');
  } catch (error) {
    res.status(500).send('Error approving challan');
  }
});

// Admin deny challan
app.post('/admin/challan/deny/:id', async (req, res) => {
  try {
    await Challan.findByIdAndUpdate(req.params.id, { isPaid: false });
    res.send('Challan denied');
  } catch (error) {
    res.status(500).send('Error denying challan');
  }
});


// @route   DELETE /api/challans/:id
// @desc    Delete a challan by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedChallan = await Challan.findByIdAndDelete(req.params.id);
    if (!deletedChallan) return res.status(404).json({ message: 'Challan not found' });
    res.json({ message: 'Challan deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
