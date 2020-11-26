const express = require("express");
const path = require('path');
const logger = require('./middleware/logger')

const app = express();

//Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}))

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/members', require('./routes/api/members'));

//listening for port on evironment variable or on 5000
const PORT = process.env.PORT || 5000;
//run web server
app.listen(PORT, () => console.log('Server started on port ' + PORT));
