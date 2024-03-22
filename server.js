const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('dotnev').config();

const app = express()
app.use(express.json()); // Middleware to parse JSON bodies

// Connect to MongoDB
mongoose.connect('process.env.MONGODB_URI', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("Connected to MongoDB Atlas"))
    .catch(err => console.error('Could not connect to MongoDB Atlas', err))

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

const Patient = require('./models/patient');

app.get('/api/patients', async (req, res) => {
    const patients = await Patient.find();
    res.send(patients);
});

const patientRoutes = require('./routes/patientRoutes');
// use patientRoutes for any requests that go to /api/patients
app.use('/api/patients', patientRoutes);