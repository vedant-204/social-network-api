const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const dotenv = require('dotenv');
const morgan = require('morgan');

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {userNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log("Connected to MongoDB");
})

const app = express();

app.listen(3000, () => {
  console.log('Server on http://localhost:3000');
})