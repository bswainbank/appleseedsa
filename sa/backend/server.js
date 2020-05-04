const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const path = require('path');


require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(fileUpload());

const uri = process.env.ATLAS_URI;
console.log(uri);
mongoose.connect(uri, { useNewUrlParser:true, useCreateIndex: true })
 .catch(err => {
     console.error('App starting error:', err.stack);
 });


const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const businessRouter  = require('./routes/business');
const imageRouter  = require('./routes/Image');

app.use('/sa/api/business', businessRouter);
app.use('/sa/api/image', imageRouter);

// Serve static assets in production
if(process.env.NODE_ENG === 'production') {
    // Set static folder
    app.use(express.static('/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
    });
}

app.listen(port, () => {
    console.log('Server is running on port ' + port);
});