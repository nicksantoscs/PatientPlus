const express = require('express');
const router = express.Router();
const Patient = require('../models/patient');

// get all patients
router.get('/', async (req, res) => {
    const patients = await Patient.find();
    res.send(patients);
});

// get patient by id
router.get('/:id', async (req, res) => {
    const patient = await Patient.findById(req.params.id);
    if(!patient) return res.status(404).send('Patient not found.');
    res.send(patient);
});

// create new patient
router.post('/', async (res, req) => {
    let patient = new Patient({
        firstName: req.body.firstNameame,
        lastName: req.body.lastName,
        dateOfBirth: req.body.dateOfBirth,
        age: req.body.age,
        gender: req.body.gender,
        phoneNumber: req.body.phoneNumber,
        bloodType: req.body.bloodType,
        heightCM: req.body.heightCM,
        weight: req.body.weight,
        allergies: req.body.allergies,
        medications: req.body.medications,
        medicalHistory: req.body.medicalHistory,
        insureanceNum: req.body.insureanceNum,
    });
    patient = await patient.save();
    res.send(patient);
});

// update existing patient
router.put('/:id', async (req, res) => {
    const patient = await Patient.findByIdAndUpdate(req.params.id, {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      dateOfBirth: req.body.dateOfBirth,
      age: req.body.age,
      gender: req.body.gender,
      phoneNumber: req.body.phoneNumber,
      bloodType: req.body.bloodType,
      heightCM: req.body.heightCM,
      weight: req.body.weight,
      allergies: req.body.allergies,
      medications: req.body.medications,
      medicalHistory: req.body.medicalHistory,
      insureanceNum: req.body.insureanceNum,
    }, { new: true });
  
    if (!patient) return res.status(404).send('Patient not found.');
    res.send(patient);
  });
  
  // delete patient
  router.delete('/:id', async (req, res) => {
    const patient = await Patient.findByIdAndRemove(req.params.id);
    if (!patient) return res.status(404).send('Patient not found.');
    res.send(patient);
  });
  
  module.exports = router;