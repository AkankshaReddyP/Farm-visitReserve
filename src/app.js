require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const reservationRoutes = require('./routes/reservations');

const app = express();
app.use(express.json());

app.use(cors({
  origin: 'http://localhost:3000'  // your React dev server
}));

// Connect to Atlas
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// Mount routes
app.use('/api/reservations', reservationRoutes);

// Health check
app.get('/api/health', (_req, res) => res.send({ status: 'up' }));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`🚀 Server running on port ${port}`));
