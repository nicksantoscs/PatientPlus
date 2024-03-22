const mongoose = require('mongoose')

const PatientSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    dateOfBirth: {type: Date, required: true},
    age: {type: Number, required: true},
    gender: {type: String, required: true},
    address: {type: String, required: true},
    phoneNumber: {type: Number, required: true},
    bloodType: {type: String, required: true},
    heightCM: {type: Number, required: true},
    weight: {type: Number, required: true},
    allergies: {type: String, required: true},
    medications: {type: String, required: false},
    medicalHistory: {type: String, required: true},
    insuranceNum: {type: String, required: true},
});

module.exports = mongoose.model('Patient', PatientSchema);

const Patient = require('./models/patient');

app.get('/api/patients', async (req, res) => {
    const patients = await Patient.find();
    res.send(patients);
});