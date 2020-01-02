const path = require('path');
const express = require('express');
const morgan = require('morgan');
const app = express();
const ejs = require('ejs');
const mongoose = require('mongoose');

//connecting to db 
mongoose.connect('mongodb://localhost/crud-mongo')
.then(db => console.log('Db connected'))
.catch(arr => console.log(err));



//importing routes 
const indexRoutes = require('./routes/index');

//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname,'views'));
app.set('view engine', ejs);



//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

//routes 
app.use('/', indexRoutes);

//starting the server

app.listen(3000, ()=>{
    console.log(`Server on port ${app.get('port')}`);
});