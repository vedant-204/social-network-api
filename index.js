const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const dotenv = require('dotenv');
const morgan = require('morgan');
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');

const app = express();

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {userNewUrlParser: true}, () => {
    console.log("Connected to MongoDB");
})

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use("/api/users", userRoute);
app.use("/api/authenticate", authRoute);

app.listen(3000, () => {
  console.log('Server on http://localhost:3000');
})