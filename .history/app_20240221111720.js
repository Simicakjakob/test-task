const express=require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const mongoose = require('mongoose');
const config = require('./config/database');

//Connect to database
mongoose.connect(config.database);

//On connection
mongoose.connection.on('connected', () => {
    console.log('Connected to database' + config.database);
})

mongoose.connection.on('error', (err) => {
    console.log('Database error: ' + err);
});

const app = express();




const users = require('./routes/users');

//Port Number
const port = 3000;

//CORS Middleware
app.use(cors());

// Body Parser Middleware
app.use(bodyParser.json());








//Set Static Folder
app.use(express.static(path.join(__dirname, 'public/browser')));

app.use('/users',users);

//index route
app.get('/', (req,res) => {
    res.send('Invalid Endpoint');
});


app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, 'public/browser/index.html'));
});

//start server
app.listen(port,() => {
    console.log ('Server started on port ' + port);

});