// MAKE SURE TO RUN 'nodemon server' FROM THE ROOT DIRECTORY
// when checking if server is running

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

console.log(require('dotenv').config());

//require('dotenv').config();
require('dotenv').config({ path: '/.env' });

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

const journalentiresRouter = require('./routes/journalentries');
const usersRouter = require('./routes/users');

app.use('/journalentries', journalentiresRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
