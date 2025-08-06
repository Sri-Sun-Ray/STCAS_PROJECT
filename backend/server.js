const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');


const app = express();
const PORT = 3000;
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:4200', // Angular default port
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.use(bodyParser.json());

app.use('/api/users', userRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/stcas_users')
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.error('MongoDB connection error:', err));