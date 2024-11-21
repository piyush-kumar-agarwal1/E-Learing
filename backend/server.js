require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const userRoutes = require('./routes/user');
const commentRoutes = require('./routes/comments');
const saveRoutes = require('./routes/savenotes');
const cors = require('cors');

// middleware
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// parse json data
app.use(express.json());

// cors
app.use(cors());

// routes
app.use('/api', userRoutes);
app.use('/api', commentRoutes);
app.use('/api', saveRoutes);

// Serve frontend
app.use(express.static(path.join(__dirname, '../frontend/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

// connect to mongodb
mongoose.connect(process.env.MONGO_URI)
    .then((result) => {
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log(`Connected to mongo & Server started on port ${process.env.PORT}`);
        });
    })
    .catch((err) => console.log(err));