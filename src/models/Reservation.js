const mongoose = require('mongoose');

const ReservationSchema = new mongoose.Schema({
  date:        { type: Date,   required: true },
  timeslot:    { type: String, required: true },   // e.g. "09:00-11:00"
  customer:    {
    name:      { type: String, required: true },
    phone:     { type: String, required: true },
  },
  itemsPicked: [{ type: String }],  // list of veggies/fruits they’ll pick
  createdAt:   { type: Date,   default: Date.now },
});

module.exports = mongoose.model('Reservation', ReservationSchema);
