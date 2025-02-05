const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(bodyParser.json());
app.use(cors());
mongoose.connect('mongodb://localhost:27017/challanDB', {
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));
const challanSchema = new mongoose.Schema({
  carNumber: String,
  driverName: String,
  driverId: String,
  parkingDuration: String,
  state: String,
  district: String,
  street: String,
  totalAmount: Number,
  isPaid: { type: Boolean, default: false } 
});
const Challan = mongoose.model('Challan', challanSchema);
app.post('/saveChallan', async (req, res) => {
  try {
    const newChallan = new Challan(req.body);
    await newChallan.save();
    res.status(200).send('Challan saved successfully');
  } catch (error) {
    console.error('Error saving challan:', error);
    res.status(500).send('Failed to save challan');
  }
});
app.get('/getChallans/:carNumber', async (req, res) => {
  try {
    const { carNumber } = req.params;
    const challans = await Challan.find({ carNumber });
    res.status(200).json(challans);
  } catch (error) {
    console.error('Error fetching challans:', error);
    res.status(500).send('Failed to fetch challans');
  }
});
app.post('/signup', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = new User({ email: req.body.email, password: hashedPassword });
    await newUser.save();
    res.status(200).send('User registered successfully');
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).send('Error registering user');
  }
});
app.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send('User not found');

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).send('Invalid password');

    const token = jwt.sign({ email: user.email }, JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).send('Error logging in');
  }
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
