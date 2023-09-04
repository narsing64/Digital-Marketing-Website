// server/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/digitalmarketing', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define a schema and model for your form data
const formSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phoneNumber: String,
  message: String,
});

const Form = mongoose.model('Form', formSchema);

// API endpoint for form submission
app.post('/api/submit-form', async (req, res) => {
  try {
    const formData = req.body;
    const savedForm = new Form(formData);
    await savedForm.save();
    
    res.status(200).json({ message: 'Form data saved successfully' });
  } catch (error) {
    console.error('Error saving form data:', error);
    res.status(500).json({ error: 'An error occurred while saving the form data' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
