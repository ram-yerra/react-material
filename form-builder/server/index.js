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

app.listen(8090, 'localhost', (err) => {
    if (err) {
        console.log('Server error', err);
        return;
    }
    console.log('App is successfully running on http://localhost:8090');
});

// const https = require('https');
// const fs = require('fs');

// const options = {
//   key: fs.readFileSync('key.pem'),
//   cert: fs.readFileSync('cert.pem')
// };

// https.createServer(options, function (req, res) {
//   res.writeHead(200);
//   res.end("hello world\n");
// }).listen(8000);