const express = require('express');
const path = require('path');

const cors = require('cors');
const mongoose = require('mongoose');

const ATLAS_URI="mongodb+srv://sample_user_1:telehealth-02@cluster0.pyeaz.mongodb.net/test?retryWrites=true&w=majority";

const app = express();

app.use(cors());
app.use(express.json());


const uri = "mongodb+srv://sample_user_1:telehealth-02@cluster0.pyeaz.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})



const exercisesRouter = require('./backend/routes/exercises');
const usersRouter = require('./backend/routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);


// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// An api endpoint that returns a short list of items
app.get('/api/getList', (req, res) => {
    var list = ['item1', 'item2', 'item3'];
    res.json(list);
    console.log('Sent list of items');
});

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
