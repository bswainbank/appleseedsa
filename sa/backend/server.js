const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');


require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(fileUpload());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser:true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const businessRouter  = require('./routes/business');
const imageRouter  = require('./routes/Image');

app.use('/business', businessRouter);
app.use('/image', imageRouter);

app.listen(port, () => {
    console.log('Server is running on port ' + port);
});