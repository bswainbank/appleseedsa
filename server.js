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

const businessRouter  = require('./routes/business');
const imageRouter  = require('./routes/image');

app.use('/business', businessRouter);
app.use('/image', imageRouter);


//if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname,'sa/build')));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'sa', 'build', 'index.html'));
    });
//}
  
const uri = process.env.HEROKU_URI||process.env.ATLAS_URI;
console.log(uri);
mongoose.connect(uri, { useNewUrlParser:true, useCreateIndex: true });
// .catch(err => {
//     console.error('App starting error:', err.stack);
// });


const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})


app.listen(port, () => {
    console.log('Server is running on port ' + port);
});

//ATLAS_URI=mongodb+srv://bswainbank:llamazmdb1@cluster0-fgdma.mongodb.net/test?retryWrites=true&w=majority