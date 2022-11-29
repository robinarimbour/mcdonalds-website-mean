require('dotenv').config()

const express = require('express');
const path = require('path');
const { ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');

const apiRoutes = require('./routes/apiRoutes');

const app = express();
const port = process.env.PORT;

// middleware
app.use(express.json());

// middleware to serve static angular files
app.use(express.static(path.join(__dirname, '../my-project/dist/my-project')));

// middleware for all api routes
app.use('/api/', apiRoutes);

// get requests from all url paths
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../my-project/dist/my-project/index.html'));
});

// Connect to database
mongoose.connect(process.env.MONGODB_URI, {
     useNewUrlParser: true, 
     useUnifiedTopology: true, 
     serverApi: ServerApiVersion.v1 })
     .then((db) => {
        console.log('Connected to database');
        // listen for requests
        app.listen(port, () => {
            console.log('Server started on port ' + port);
        });
     })
     .catch((err) => {
        console.log('Database error');
        console.log(err);
     }) 


