const express = require('express');
const cors = require ('cors');
var morgan = require('morgan');
var bodyParser = require('body-parser');
const app = express();
app.use(express.json());
app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
const userController = require('./controllers/userController');

app.post('/registerUser',userController.register);
app.post('/loginUser',userController.Login);

app.listen('3000');
console.log('server started');

module.exports =app;