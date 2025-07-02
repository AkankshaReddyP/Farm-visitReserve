const express = require('express');
const Reservation = require('../models/Reservation');
const router = express.Router();

// Create a new reservation
router.post('/', async (req, res) => {
  try {
    const r = new Reservation(req.body);
    await r.save();
    res.status(201).json(r);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// List reservations (optionally filter by date)
router.get('/', async (req, res) => {
  const filter = {};
  if (req.query.date) filter.date = new Date(req.query.date);
  const list = await Reservation.find(filter).sort('date timeslot');
  res.json(list);
});

// Get one by ID
router.get('/:id', async (req, res) => {
  const r = await Reservation.findById(req.params.id);
  if (!r) return res.status(404).send({ error: 'Not found' });
  res.json(r);
});

// Cancel (delete) a reservation
router.delete('/:id', async (req, res) => {
  await Reservation.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

module.exports = router;
