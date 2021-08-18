const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();
app.use(cors());
app.use(express.json());


mongoose.Promise = global.Promise;
let uri = 'mongodb://localhost/formsdb';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('Connected to MongoDB');
}, (err) => {
    console.log('Mongoose error:', err);
});

app.use('/forms', routes.formRoutes);

app.listen(8080, 'localhost', (err) => {
    if (err) {
        console.log('Server error', err);
        return;
    }
    console.log('App is successfully running on http://localhost:8080');
});